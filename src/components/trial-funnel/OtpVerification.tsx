import { useEffect, useRef, useState, type ClipboardEvent, type KeyboardEvent } from 'react'

const OTP_LENGTH = 4
const RESEND_SECONDS = 30
const MAX_ATTEMPTS = 5

const LOCKOUT_MESSAGE = 'Too many incorrect tries. Tap Resend to get a fresh code.'

/** Progressive error copy keyed on how many attempts remain after a wrong try. */
function messageForRemaining(remaining: number): string {
  if (remaining <= 0) return LOCKOUT_MESSAGE
  if (remaining === 1) return 'One attempt left before you’ll need a new code.'
  const lead =
    remaining >= 4 ? 'That code isn’t right' : remaining === 3 ? 'Still not matching' : 'That’s not the code'
  return `${lead} — ${remaining} attempts left.`
}

export function OtpVerification({
  phoneDisplay,
  onSubmit,
  onChangeNumber,
  onResend,
}: {
  phoneDisplay: string
  /** Returns true when the code is valid; false shows an inline error. */
  onSubmit: (code: string) => boolean
  onChangeNumber: () => void
  onResend: () => void
}) {
  const [digits, setDigits] = useState<string[]>(() => Array(OTP_LENGTH).fill(''))
  const [errorMsg, setErrorMsg] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [seconds, setSeconds] = useState(RESEND_SECONDS)
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])

  const locked = attempts >= MAX_ATTEMPTS

  useEffect(() => {
    inputsRef.current[0]?.focus()
  }, [])

  useEffect(() => {
    if (seconds <= 0) return
    const id = window.setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => window.clearTimeout(id)
  }, [seconds])

  const submit = (code: string) => {
    if (locked || code.length < OTP_LENGTH) return
    if (onSubmit(code)) return
    const nextAttempts = attempts + 1
    setAttempts(nextAttempts)
    setErrorMsg(messageForRemaining(MAX_ATTEMPTS - nextAttempts))
  }

  const handleChange = (index: number, raw: string) => {
    if (locked) return
    const char = raw.replace(/\D/g, '').slice(-1)
    if (!char && raw !== '') return
    const next = [...digits]
    next[index] = char
    setDigits(next)
    setErrorMsg('')
    if (char && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus()
    }
    if (char && next.every((d) => d !== '')) {
      submit(next.join(''))
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (locked) return
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      const next = [...digits]
      next[index - 1] = ''
      setDigits(next)
      setErrorMsg('')
      inputsRef.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (locked) return
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH)
    if (!text) return
    const next = Array(OTP_LENGTH).fill('')
    for (let i = 0; i < text.length; i++) next[i] = text[i]
    setDigits(next)
    setErrorMsg('')
    const focusIndex = Math.min(text.length, OTP_LENGTH - 1)
    inputsRef.current[focusIndex]?.focus()
    if (text.length === OTP_LENGTH) submit(next.join(''))
  }

  const handleResend = () => {
    if (seconds > 0) return
    onResend()
    setDigits(Array(OTP_LENGTH).fill(''))
    setErrorMsg('')
    setAttempts(0)
    setSeconds(RESEND_SECONDS)
    inputsRef.current[0]?.focus()
  }

  const filled = digits.every((d) => d !== '')

  return (
    <div className="trial-otp">
      <p className="trial-otp__target">
        <span className="trial-otp__number">{phoneDisplay}</span>
        <button type="button" className="trial-otp__change" onClick={onChangeNumber}>
          Change
        </button>
      </p>
      <p className="trial-otp__hint">Enter the 4-digit code we sent you by text.</p>

      <div className="trial-otp__label">Enter OTP</div>
      <div className={`trial-otp__inputs${errorMsg ? ' is-invalid' : ''}`} onPaste={handlePaste}>
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputsRef.current[index] = el
            }}
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? 'one-time-code' : 'off'}
            maxLength={1}
            className="trial-otp__box"
            aria-label={`Digit ${index + 1}`}
            value={digit}
            disabled={locked}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>
      {errorMsg && <p className="trial-otp__err">{errorMsg}</p>}

      <button
        type="button"
        className="trial-cta trial-otp__verify"
        onClick={() => submit(digits.join(''))}
        disabled={!filled || locked}
      >
        Verify
      </button>

      <div className="trial-otp__resend">
        {seconds > 0 ? (
          <span className="trial-otp__timer">
            Resend code in 0:{String(seconds).padStart(2, '0')}
          </span>
        ) : (
          <button type="button" className="trial-otp__resend-btn" onClick={handleResend}>
            Resend OTP
          </button>
        )}
      </div>
    </div>
  )
}
