import { useState, type FormEvent } from 'react'

const grades = [
  'Elementary (K-5)',
  'Middle School (6-8)',
  'High School (9-12)',
  'College',
  'Adult learner',
]

const subjects = [
  'Pre-Algebra',
  'Algebra I & II',
  'Geometry',
  'Trigonometry',
  'Pre-Calculus',
  'Calculus',
  'Statistics',
  'SAT/ACT Math',
  'Other',
]

export function TrialForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="trial" className="ds-section">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface-muted shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-2">
            <div className="ds-band-primary p-8 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-text-on-primary/70">
                Free trial
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-on-primary lg:text-4xl">
                Book your 45-minute session
              </h2>
              <p className="mt-4 leading-relaxed text-text-on-primary/80">
                No credit card. No obligation. Just a real tutoring session to
                see if we're the right fit.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Matched with a specialist in your subject',
                  'Live video + interactive whiteboard',
                  'Session summary sent to parents',
                  'Easy upgrade to weekly plan',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-on-primary/90">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden
                    >
                      <path
                        d="M4 10l4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface p-8 lg:p-12">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary-subtle text-2xl text-primary">
                    ✓
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-text">
                    You're on the list!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-text-muted">
                    We'll email you within 15 minutes with tutor matches and
                    available time slots.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Student name" name="studentName" required />
                    <Field label="Parent / guardian email" name="email" type="email" required />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField label="Grade level" name="grade" options={grades} required />
                    <SelectField label="Subject" name="subject" options={subjects} required />
                  </div>

                  <Field
                    label="What do you want to work on?"
                    name="goals"
                    as="textarea"
                    placeholder="e.g. struggling with quadratic equations, preparing for SAT in March..."
                  />

                  <button type="submit" className="ds-btn-accent w-full py-3.5">
                    Claim my free trial
                  </button>

                  <p className="text-center text-xs text-text-muted">
                    By signing up, you agree to our Terms and Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  as,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  as?: 'textarea'
  placeholder?: string
}) {
  return (
    <label className="block text-sm font-medium text-text">
      {label}
      {as === 'textarea' ? (
        <textarea
          name={name}
          rows={3}
          required={required}
          placeholder={placeholder}
          className="ds-input"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="ds-input"
        />
      )}
    </label>
  )
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string
  name: string
  options: string[]
  required?: boolean
}) {
  return (
    <label className="block text-sm font-medium text-text">
      {label}
      <select name={name} required={required} defaultValue="" className="ds-input">
        <option value="" disabled>
          Select...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}
