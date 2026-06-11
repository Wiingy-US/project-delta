import { useCallback, useState } from 'react'
import {
  CalendarPlus,
  Check,
  CircleCheck,
  Clock,
  Copy,
  Link2,
  Mail,
  MessageSquareText,
  Target,
  User,
} from 'lucide-react'
import type { LeadState } from './types'
import { audienceLabel, buildMeetingLink, formatSessionTimeRange, levelLabel } from './utils'

const rowIconProps = { size: 18, strokeWidth: 1.75, 'aria-hidden': true as const }

type BookingSuccessProps = {
  lead: LeadState
  dateStr: string
  calUrl: string
  additionalRequirements: string
  requirementsSaved: boolean
  onRequirementsChange: (value: string) => void
  onSaveRequirements: () => void
}

function SuccessRow({
  icon,
  primary,
  secondary,
}: {
  icon: React.ReactNode
  primary: string
  secondary?: string
}) {
  return (
    <div className="trial-success__row">
      <span className="trial-success__row-icon" aria-hidden>
        {icon}
      </span>
      <div className="trial-success__row-text">
        <p className="trial-success__row-primary">{primary}</p>
        {secondary && <p className="trial-success__row-secondary">{secondary}</p>}
      </div>
    </div>
  )
}

function HeroArt() {
  return (
    <svg className="trial-success__hero-art" viewBox="0 0 400 120" fill="none" aria-hidden>
      <circle cx="320" cy="28" r="36" fill="rgba(255,255,255,0.12)" />
      <circle cx="88" cy="22" r="22" fill="rgba(255,255,255,0.1)" />
      <rect x="248" y="52" width="88" height="56" rx="6" fill="rgba(255,255,255,0.18)" transform="rotate(8 292 80)" />
      <rect x="52" y="58" width="72" height="48" rx="4" fill="rgba(255,255,255,0.22)" />
      <path d="M62 72h52M62 80h40M62 88h46" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />
      <text x="268" y="78" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        x² + bx + c
      </text>
      <path d="M170 90 L182 42 L194 90 Z" fill="rgba(251,191,36,0.85)" />
      <rect x="178" y="38" width="8" height="8" rx="1" fill="rgba(255,255,255,0.5)" />
    </svg>
  )
}

export function BookingSuccess({
  lead,
  dateStr,
  calUrl,
  additionalRequirements,
  requirementsSaved,
  onRequirementsChange,
  onSaveRequirements,
}: BookingSuccessProps) {
  const timeRange = lead.slotTime ? formatSessionTimeRange(lead.slotTime) : ''
  const goalText = lead.goalLabel
    ? `${lead.goalLabel}${lead.courseLabel ? ` · ${lead.courseLabel}` : ''}`
    : 'Math tutoring'
  const meetingLink = buildMeetingLink(lead)
  const [linkCopied, setLinkCopied] = useState(false)

  const copyMeetingLink = useCallback(async () => {
    if (!meetingLink) return

    try {
      await navigator.clipboard.writeText(meetingLink)
      setLinkCopied(true)
      window.setTimeout(() => setLinkCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }, [meetingLink])

  return (
    <div className="trial-success">
      <div className="trial-success__hero">
        <HeroArt />
        <h2 className="trial-success__title">
          {lead.name ? `${lead.name}, your` : 'Your'} free trial class is booked!
        </h2>
        <div className="trial-success__badge" aria-hidden>
          <Check size={20} strokeWidth={2.5} />
        </div>
      </div>

      <div className="trial-success__body">
        <div className="trial-success__rows">
          <SuccessRow icon={<Clock {...rowIconProps} />} primary={dateStr} secondary={timeRange} />
          <SuccessRow
            icon={<User {...rowIconProps} />}
            primary={`For: ${audienceLabel(lead.audience)}`}
            secondary={levelLabel(lead)}
          />
          <SuccessRow icon={<Target {...rowIconProps} />} primary={`Goal: ${goalText}`} secondary="1:1 live online class" />
          {lead.email && (
            <SuccessRow icon={<Mail {...rowIconProps} />} primary={lead.email} secondary="Confirmation & class link sent here" />
          )}
        </div>

        <section className="trial-success__section" aria-labelledby="trial-meeting-link-heading">
          <h3 id="trial-meeting-link-heading" className="trial-success__section-title trial-success__section-title--with-icon">
            <Link2 size={16} strokeWidth={2} aria-hidden />
            Your class link
          </h3>
          <p className="trial-success__section-help">
            Use this link to join your live 1:1 trial class.
          </p>
          <div className="trial-success__link-row">
            <input
              type="text"
              className="trial-success__link-input"
              readOnly
              value={meetingLink}
              aria-label="Class meeting link"
              onFocus={(e) => e.target.select()}
            />
            <div className="trial-success__link-actions">
              <button type="button" className="trial-success__link-action" onClick={copyMeetingLink}>
                {linkCopied ? <Check size={16} strokeWidth={2} aria-hidden /> : <Copy size={16} strokeWidth={2} aria-hidden />}
                {linkCopied ? 'Copied!' : 'Copy'}
              </button>
              <a
                href={calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="trial-success__link-action"
              >
                <CalendarPlus size={16} strokeWidth={2} aria-hidden />
                Add to Google Calendar
              </a>
            </div>
          </div>
        </section>

        <section className="trial-success__section" aria-labelledby="trial-requirements-heading">
          <h3 id="trial-requirements-heading" className="trial-success__section-title trial-success__section-title--with-icon">
            <MessageSquareText size={16} strokeWidth={2} aria-hidden />
            Any other requirements?
          </h3>
          <p className="trial-success__section-help">
            Optional — topics or learning needs for your tutor.
          </p>
          <textarea
            id="trial-requirements"
            className="trial-success__textarea"
            rows={2}
            placeholder="e.g., focus on word problems, needs extra patience with fractions…"
            value={additionalRequirements}
            onChange={(e) => onRequirementsChange(e.target.value)}
          />
          {requirementsSaved ? (
            <p className="trial-success__saved-msg" role="status">
              <CircleCheck size={16} strokeWidth={2} aria-hidden />
              Requirements saved.
            </p>
          ) : (
            <button
              type="button"
              className="trial-cta trial-success__save"
              disabled={!additionalRequirements.trim()}
              onClick={onSaveRequirements}
            >
              Save requirements
            </button>
          )}
        </section>
      </div>
    </div>
  )
}
