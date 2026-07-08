import { Fragment, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { COUNTRIES, COURSES, DEFAULT_COUNTRY, GOALS, GRADES, LEARNER_TYPES, dialCodeFor } from './config'
import { IconCheck, IconChild, IconGoogle, IconGrad, IconLock, IconOther, IconSelf, IconTarget } from './icons'
import { BookingSuccess } from './BookingSuccess'
import { OtpVerification } from './OtpVerification'
import { TutorAvailability } from './TutorAvailability'
import type { Audience, LeadState, ScreenId } from './types'
import { initialLead } from './types'
import {
  audienceLabel,
  buildCalendarUrl,
  getUpcomingDays,
  levelLabel,
  poss,
  subj,
} from './utils'

function TrialJourney({ activeStep }: { activeStep: 0 | 1 | 2 }) {
  const steps = ['Tell us your goal', 'Your information', 'Book free trial'] as const

  return (
    <div className="trial-journey" aria-label="Trial booking steps">
      {steps.map((step, index) => {
        const status = index < activeStep ? ' is-done' : index === activeStep ? ' is-active' : ''
        return (
          <Fragment key={step}>
            {index > 0 && (
              <span className={`trial-journey__line${index <= activeStep ? ' is-filled' : ''}`} aria-hidden />
            )}
            <div className={`trial-journey__item${status}`}>
              <span className="trial-journey__node" aria-hidden>
                {index < activeStep && <IconCheck size={10} />}
              </span>
              <span className="trial-journey__label">{step}</span>
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}

function getJourneyStep(screen: ScreenId): 0 | 1 | 2 {
  if (screen === 'thanks' || screen === 'schedule') return 2
  if (screen === 'contact' || screen === 'otp') return 1
  return 0
}

function BriefChips({ lead }: { lead: LeadState }) {
  const chips: string[] = []
  if (lead.audience) chips.push(`For: ${audienceLabel(lead.audience)}`)
  if (lead.grade) chips.push(levelLabel(lead))
  if (lead.learnerType && !lead.grade) {
    chips.push(LEARNER_TYPES.find((t) => t.id === lead.learnerType)?.label ?? '')
  }
  if (lead.goalLabel) {
    chips.push(`Goal: ${lead.goalLabel}${lead.courseLabel ? ` · ${lead.courseLabel}` : ''}`)
  }

  if (!chips.length) return null

  return (
    <div className="trial-brief" aria-label="Your selections">
      {chips.map((chip) => (
        <span key={chip} className="trial-brief-chip">
          <IconCheck />
          {chip}
        </span>
      ))}
    </div>
  )
}

function OptionButton({
  title,
  desc,
  icon,
  selected,
  onSelect,
}: {
  title: string
  desc?: string
  icon: ReactNode
  selected?: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      className={`trial-opt${selected ? ' selected' : ''}`}
      onClick={() => {
        onSelect()
      }}
    >
      <span className="trial-opt-icon">{icon}</span>
      <span>
        <span className="trial-opt-title">{title}</span>
        {desc && <span className="trial-opt-desc">{desc}</span>}
      </span>
    </button>
  )
}

function ScreenFrame({
  eyebrow,
  title,
  help,
  children,
}: {
  eyebrow: string
  title: string
  help?: ReactNode
  children: ReactNode
}) {
  return (
    <div className="trial-screen">
      <div className="trial-question">
        <div className="trial-q-eyebrow">{eyebrow}</div>
        <div className="trial-q-title">{title}</div>
        {help && <div className="trial-q-help">{help}</div>}
      </div>
      <div className="trial-screen__body">{children}</div>
    </div>
  )
}

export function TrialStepper() {
  const quizRef = useRef<HTMLDivElement>(null)
  const hasInitialCenteredRef = useRef(false)
  const shouldCenterCardRef = useRef(false)
  const [lead, setLead] = useState<LeadState>(initialLead)
  const [history, setHistory] = useState<ScreenId[]>(['audience'])
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState<string>(DEFAULT_COUNTRY)
  const [phone, setPhone] = useState('')
  const [nameInvalid, setNameInvalid] = useState(false)
  const [emailInvalid, setEmailInvalid] = useState(false)
  const [phoneInvalid, setPhoneInvalid] = useState(false)
  const [selectedDay, setSelectedDay] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [additionalRequirements, setAdditionalRequirements] = useState('')
  const [requirementsSaved, setRequirementsSaved] = useState(false)
  const screen = history[history.length - 1]
  const canGoBack = history.length > 1 && screen !== 'thanks'

  const days = useMemo(() => getUpcomingDays(8), [])

  useEffect(() => {
    if (!shouldCenterCardRef.current) return
    shouldCenterCardRef.current = false
    quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [history, screen])

  const navigate = useCallback((next: ScreenId, push = true) => {
    setHistory((prev) => (push ? [...prev, next] : prev.slice(0, -1).concat(next)))
  }, [])

  const goBack = () => {
    if (history.length < 2) return
    setHistory((prev) => prev.slice(0, -1))
    setSelectedGoalId(null)
  }

  const selectAudience = (audience: Audience) => {
    setLead((prev) => ({
      ...prev,
      audience,
      grade: null,
      learnerType: null,
      goal: null,
      goalLabel: null,
      match: null,
      course: null,
      courseLabel: null,
    }))
    setSelectedGoalId(null)
    if (!hasInitialCenteredRef.current) {
      hasInitialCenteredRef.current = true
      shouldCenterCardRef.current = true
    }
    navigate(audience === 'self' ? 'learnerType' : 'grade')
  }

  const selectGrade = (gradeId: string, goalSetKey: string) => {
    setLead((prev) => ({
      ...prev,
      grade: gradeId,
      goal: null,
      goalLabel: null,
      match: null,
      course: null,
      courseLabel: null,
    }))
    setSelectedGoalId(null)
    navigate({ type: 'goal', setKey: goalSetKey })
  }

  const selectLearnerType = (learnerType: string) => {
    setLead((prev) => ({
      ...prev,
      learnerType,
      goal: null,
      goalLabel: null,
      match: null,
      course: null,
      courseLabel: null,
    }))
    setSelectedGoalId(null)
    navigate({ type: 'goal', setKey: `self_${learnerType}` })
  }

  const selectGoal = (goal: (typeof GOALS)[string][number]) => {
    setSelectedGoalId(goal.id)
    setLead((prev) => ({
      ...prev,
      goal: goal.id,
      goalLabel: goal.label,
      match: goal.match,
      course: null,
      courseLabel: null,
    }))

    if (!goal.courses) {
      navigate('contact')
    }
  }

  const selectCourse = (course: { id: string; label: string }, goalMatch: string, active: boolean) => {
    setLead((prev) => ({
      ...prev,
      course: active ? course.id : null,
      courseLabel: active ? course.label : null,
      match: active ? course.label : goalMatch,
    }))
  }

  const continueFromGoal = () => {
    navigate('contact')
  }

  const submitContact = () => {
    const okName = name.trim().length >= 2
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
    const okPhone = phone.replace(/\D/g, '').length >= 7
    setNameInvalid(!okName)
    setEmailInvalid(!okEmail)
    setPhoneInvalid(!okPhone)
    if (!okName || !okEmail || !okPhone) return
    setLead((prev) => ({
      ...prev,
      name: name.trim(),
      email: email.trim(),
      country,
      phone: `${dialCodeFor(country)} ${phone.trim()}`.trim(),
    }))
    navigate('otp')
  }

  const verifyOtp = (code: string) => {
    if (code !== '1234') return false
    // Replace 'otp' in history so returning from scheduling lands on contact.
    navigate('schedule', false)
    return true
  }

  const confirmBooking = () => {
    if (!selectedDay || !selectedTime) return
    const payload = { ...lead, slotDate: selectedDay, slotTime: selectedTime }
    setLead(payload)
    console.log('LEAD PAYLOAD →', JSON.stringify(payload, null, 2))
    setHistory(['thanks'])
  }

  const saveAdditionalRequirements = () => {
    const trimmed = additionalRequirements.trim()
    const payload = { ...lead, additionalRequirements: trimmed || null }
    setLead(payload)
    setRequirementsSaved(true)
    console.log('LEAD PAYLOAD (updated) →', JSON.stringify(payload, null, 2))
  }

  const goalSetKey = typeof screen === 'object' && screen.type === 'goal' ? screen.setKey : null
  const goals = goalSetKey ? GOALS[goalSetKey] ?? [] : []
  const activeGoal = goals.find((g) => g.id === selectedGoalId)

  let content: ReactNode = null

  if (screen === 'audience') {
    content = (
      <ScreenFrame
        eyebrow="Book A Free Trial Class Now"
        title="Who is the math tutoring for?"
        help="This helps us personalize the trial class."
      >
        <div className="trial-options">
          <OptionButton title="My child" icon={<IconChild />} onSelect={() => selectAudience('child')} />
          <OptionButton title="Myself" icon={<IconSelf />} onSelect={() => selectAudience('self')} />
          <OptionButton title="Someone else" icon={<IconOther />} onSelect={() => selectAudience('other')} />
        </div>
      </ScreenFrame>
    )
  } else if (screen === 'grade') {
    content = (
      <ScreenFrame eyebrow="Select Right Option" title={`What grade is ${subj(lead)} in?`}>
        <div className="trial-options">
          {GRADES.map((g) => (
            <OptionButton
              key={g.id}
              title={g.label}
              desc={g.sub}
              icon={<IconGrad />}
              onSelect={() => selectGrade(g.id, `child_${g.id}`)}
            />
          ))}
          {lead.audience === 'other' && (
            <OptionButton
              title="Professional"
              desc="Adult learner"
              icon={<IconSelf />}
              onSelect={() => selectGrade('professional', 'self_adult')}
            />
          )}
        </div>
      </ScreenFrame>
    )
  } else if (screen === 'learnerType') {
    content = (
      <ScreenFrame eyebrow="Select Right Option" title="Which best describes you?">
        <div className="trial-options">
          {LEARNER_TYPES.map((t) => (
            <OptionButton
              key={t.id}
              title={t.label}
              icon={<IconSelf />}
              onSelect={() => selectLearnerType(t.id)}
            />
          ))}
        </div>
      </ScreenFrame>
    )
  } else if (goalSetKey) {
    content = (
      <ScreenFrame
        eyebrow="Select Right Option"
        title={lead.audience === 'self' ? 'What are you working toward?' : "What's the main goal right now?"}
      >
        <div className="trial-options">
          {goals.map((g) => (
            <OptionButton
              key={g.id}
              title={g.label}
              icon={<IconTarget />}
              selected={selectedGoalId === g.id}
              onSelect={() => selectGoal(g)}
            />
          ))}
        </div>
        {activeGoal?.courses && (
          <>
            <div className="trial-q-help mt-4">Which course? (optional — helps us match faster)</div>
            <div className="trial-chip-row">
              {(activeGoal.courseSet ?? COURSES).map((c) => {
                const on = lead.course === c.id
                return (
                  <button
                    key={c.id}
                    type="button"
                    className={`trial-chip-sel${on ? ' on' : ''}`}
                    onClick={() => selectCourse(c, activeGoal.match, !on)}
                  >
                    {c.label}
                  </button>
                )
              })}
            </div>
            <button type="button" className="trial-cta" onClick={continueFromGoal}>
              Continue
            </button>
          </>
        )}
      </ScreenFrame>
    )
  } else if (screen === 'contact') {
    content = (
      <ScreenFrame
        eyebrow="Almost there"
        title={`Where should we send ${poss(lead)} trial class details?`}
        help="We'll email your trial class confirmation and joining details."
      >
        <div className={`trial-field${nameInvalid ? ' invalid' : ''}`}>
          <label htmlFor="trial-name">Your first name</label>
          <input
            id="trial-name"
            type="text"
            autoComplete="given-name"
            placeholder="e.g., Sarah"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="trial-err">Please enter your name.</div>
        </div>
        <div className={`trial-field${emailInvalid ? ' invalid' : ''}`}>
          <label htmlFor="trial-email">Email</label>
          <input
            id="trial-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="trial-err">That email doesn't look right — mind checking it?</div>
        </div>
        <div className={`trial-field${phoneInvalid ? ' invalid' : ''}`}>
          <div className="trial-phone">
            <div className="trial-phone__country">
              <label htmlFor="trial-country">Country/Region</label>
              <div className="trial-phone__select">
                <select
                  id="trial-country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.iso} value={c.iso}>
                      {c.iso} ({c.dial})
                    </option>
                  ))}
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
            <div className="trial-phone__number">
              <label htmlFor="trial-phone">Phone number</label>
              <input
                id="trial-phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder={dialCodeFor(country)}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="trial-err">Please enter a valid phone number.</div>
        </div>
        <div className="trial-privacy">
          <IconLock />
          Used only to set up your trial class. No spam, ever.
        </div>
        <button type="button" className="trial-cta" onClick={submitContact}>
          Continue
        </button>
        <div className="trial-or" aria-hidden>
          or
        </div>
        <button type="button" className="trial-google-btn">
          <IconGoogle />
          Continue with Google
        </button>
      </ScreenFrame>
    )
  } else if (screen === 'otp') {
    content = (
      <ScreenFrame eyebrow="Almost there" title="Verify your number">
        <OtpVerification
          phoneDisplay={`${dialCodeFor(country)} ${phone.trim()}`}
          onSubmit={verifyOtp}
          onChangeNumber={goBack}
          onResend={() => console.info('Resend OTP requested')}
        />
      </ScreenFrame>
    )
  } else if (screen === 'schedule') {
    content = (
      <ScreenFrame
        eyebrow={`Last step${lead.name ? `, ${lead.name}` : ''}`}
        title={`Pick a time for ${poss(lead)} free trial class`}
        help={
          <>
            A live 1:1 class in <b>{lead.match}</b> with an expert tutor.
          </>
        }
      >
        <TutorAvailability
          days={days}
          selectedDay={selectedDay}
          selectedTime={selectedTime}
          onSelectDay={(day) => {
            setSelectedDay(day)
            setSelectedTime(null)
          }}
          onSelectTime={setSelectedTime}
          onConfirm={confirmBooking}
        />
      </ScreenFrame>
    )
  } else if (screen === 'thanks' && lead.slotDate && lead.slotTime) {
    const dateStr = lead.slotDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })
    const calUrl = buildCalendarUrl(lead.slotDate, lead.slotTime)

    content = (
      <BookingSuccess
        lead={lead}
        dateStr={dateStr}
        calUrl={calUrl}
        additionalRequirements={additionalRequirements}
        requirementsSaved={requirementsSaved}
        onRequirementsChange={(value) => {
          setAdditionalRequirements(value)
          setRequirementsSaved(false)
        }}
        onSaveRequirements={saveAdditionalRequirements}
      />
    )
  }

  const journeyStep = getJourneyStep(screen)

  return (
    <div className="trial-shell" id="trial">
      <div className="trial-quiz" ref={quizRef}>
        {screen !== 'thanks' && (
          <div className="trial-top">
            {canGoBack && (
              <div className="trial-progress-row">
                <button
                  type="button"
                  className="trial-back"
                  aria-label="Go back"
                  onClick={goBack}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  Back
                </button>
              </div>
            )}
            <TrialJourney activeStep={journeyStep} />
          </div>
        )}
        {screen !== 'thanks' && <BriefChips lead={lead} />}
        {content}
      </div>
      <p className="trial-footer-note">© Wiingy · Your information is only used to set up your trial class.</p>
    </div>
  )
}
