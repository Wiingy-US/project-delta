import { SessionPreview } from './ui/SessionPreview'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
      <div
        className="pointer-events-none absolute -right-32 -top-32 size-[500px] rounded-full bg-primary-light/60 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-accent-subtle blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-subtle px-4 py-1.5 text-sm font-medium text-primary">
            <span className="size-2 rounded-full bg-accent" />
            Free 45-minute trial session
          </p>

          <h1 className="animate-fade-up-delay-1 font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-[3.5rem]">
            Math confidence starts with the{' '}
            <em className="not-italic text-primary">right tutor</em>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-lg text-lg leading-relaxed text-text-muted">
            Personalized 1-on-1 tutoring for algebra, calculus, geometry, and
            test prep. Match with an expert tutor in minutes — no commitment
            required.
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4">
            <a href="#trial" className="ds-btn-primary">
              Book your free trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#how-it-works" className="ds-btn-ghost">
              See how it works
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted">
            <li className="flex items-center gap-2">
              <CheckIcon />
              No credit card
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Cancel anytime
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              K-12 & college
            </li>
          </ul>
        </div>

        <SessionPreview
          className="animate-fade-up-delay-2"
          topic="Quadratic equations"
          gradeLabel="Grade 10"
          messages={{
            tutorMessage1: (
              <>
                Let's solve <span className="font-mono font-medium">x² − 5x + 6 = 0</span>.
                What do you notice about the coefficients?
              </>
            ),
            studentMessage: 'I think we can factor it… (x−2)(x−3)?',
            tutorMessage2:
              "Exactly right! Let's verify by expanding — you're building great intuition.",
            studentInitial: 'M',
          }}
          footer={
            <>
              <div className="flex -space-x-2">
                {['S', 'A', 'J'].map((initial, i) => (
                  <div
                    key={initial}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-surface-muted bg-primary text-xs font-bold text-text-on-primary"
                    style={{ zIndex: 3 - i }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-muted">
                <span className="font-semibold text-text">400+</span> students
                tutored this month
              </p>
            </>
          }
          floatingStat={{ value: '+2.1', label: 'avg. grade improvement' }}
        />
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary" aria-hidden>
      <path
        d="M3.5 8.5l3 3 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
