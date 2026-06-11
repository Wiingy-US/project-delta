import type { ReactNode } from 'react'

export type SessionMessage = {
  tutorMessage1: ReactNode
  studentMessage: ReactNode
  tutorMessage2: ReactNode
  studentInitial: string
}

type SessionPreviewProps = {
  eyebrow?: string
  topic: string
  gradeLabel: string
  messages: SessionMessage
  footer?: ReactNode
  floatingStat?: { value: string; label: string }
  className?: string
}

export function SessionPreview({
  eyebrow = 'Live session preview',
  topic,
  gradeLabel,
  messages,
  footer,
  floatingStat,
  className = '',
}: SessionPreviewProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="ds-card p-6 lg:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
              {eyebrow}
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-text lg:text-xl">
              {topic}
            </p>
          </div>
          <span className="ds-badge">{gradeLabel}</span>
        </div>

        <div className="ds-card-inner space-y-4">
          <div className="flex gap-3">
            <div className="ds-avatar-tutor" aria-hidden>
              S
            </div>
            <div className="ds-bubble-tutor">{messages.tutorMessage1}</div>
          </div>
          <div className="flex justify-end gap-3">
            <div className="ds-bubble-student">{messages.studentMessage}</div>
            <div className="ds-avatar-student" aria-hidden>
              {messages.studentInitial}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="ds-avatar-tutor" aria-hidden>
              S
            </div>
            <div className="ds-bubble-tutor">{messages.tutorMessage2}</div>
          </div>
        </div>

        {footer && (
          <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
            {footer}
          </div>
        )}
      </div>

      {floatingStat && (
        <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-float)] lg:-left-8">
          <p className="font-display text-2xl font-semibold text-primary">
            {floatingStat.value}
          </p>
          <p className="text-xs text-text-muted">{floatingStat.label}</p>
        </div>
      )}
    </div>
  )
}
