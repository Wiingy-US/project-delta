import { SectionHeader } from './ui/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Tell us your goals',
    description:
      'Share your grade level, subject, and what you want to improve — homework help, test prep, or building fundamentals.',
  },
  {
    number: '02',
    title: 'Get matched instantly',
    description:
      'Our system pairs you with a vetted tutor who specializes in your topic and teaching style preference.',
  },
  {
    number: '03',
    title: 'Try your free session',
    description:
      'Join a live 45-minute video session with an interactive whiteboard. No payment info needed.',
  },
  {
    number: '04',
    title: 'Continue if you love it',
    description:
      'Keep your tutor or switch anytime. Flexible weekly plans starting at $39/session.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="ds-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How it works"
          title="From sign-up to your first session in under an hour"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <span className="font-display text-4xl font-semibold text-primary/20 transition-colors group-hover:text-primary/40">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
