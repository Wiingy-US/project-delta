import { useEffect, useRef, useState, type ClipboardEvent, type KeyboardEvent } from 'react'

const OTP_LENGTH = 4
const RESEND_SECONDS = 30

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
  const [error, setError] = useState(false)
  const [seconds, setSeconds] = useState(RESEND_SECONDS)
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    inputsRef.current[0]?.focus()
  }, [])

  useEffect(() => {
    if (seconds <= 0) return
    const id = window.setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => window.clearTimeout(id)
  }, [seconds])

  const submit = (code: string) => {
    if (code.length < OTP_LENGTH) return
    const ok = onSubmit(code)
    if (!ok) setError(true)
  }

  const handleChange = (index: number, raw: string) => {
    const char = raw.replace(/\D/g, '').slice(-1)
    if (!char && raw !== '') return
    const next = [...digits]
    next[index] = char
    setDigits(next)
    setError(false)
    if (char && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus()
    }
    if (char && next.every((d) => d !== '')) {
      submit(next.join(''))
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      const next = [...digits]
      next[index - 1] = ''
      setDigits(next)
      setError(false)
      inputsRef.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH)
    if (!text) return
    const next = Array(OTP_LENGTH).fill('')
    for (let i = 0; i < text.length; i++) next[i] = text[i]
    setDigits(next)
    setError(false)
    const focusIndex = Math.min(text.length, OTP_LENGTH - 1)
    inputsRef.current[focusIndex]?.focus()
    if (text.length === OTP_LENGTH) submit(next.join(''))
  }

  const handleResend = () => {
    if (seconds > 0) return
    onResend()
    setDigits(Array(OTP_LENGTH).fill(''))
    setError(false)
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
      <div className={`trial-otp__inputs${error ? ' is-invalid' : ''}`} onPaste={handlePaste}>
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
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>
      {error && <p className="trial-otp__err">That code isn't right — check and try again.</p>}

      <button type="button" className="trial-cta trial-otp__verify" onClick={() => submit(digits.join(''))} disabled={!filled}>
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
