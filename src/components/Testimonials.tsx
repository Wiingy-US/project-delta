import { SectionHeader } from './ui/SectionHeader'

const testimonials = [
  {
    quote:
      'My daughter went from dreading algebra to actually asking for extra practice. Her tutor made fractions click in one session.',
    name: 'Priya M.',
    role: 'Parent of 8th grader',
    rating: 5,
  },
  {
    quote:
      'I was failing calc and needed to pass for my engineering program. Three sessions in, I got a B on my midterm.',
    name: 'Marcus T.',
    role: 'College sophomore',
    rating: 5,
  },
  {
    quote:
      'The trial session sold us immediately. Clear explanations, patient teaching, and my son felt comfortable asking questions.',
    name: 'David & Lisa K.',
    role: 'Parents of 10th grader',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="ds-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Reviews"
          title="Families love the results"
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-surface-muted p-6"
            >
              <div className="flex gap-0.5 text-accent" aria-label={`${t.rating} stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text">
                "{t.quote}"
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-text">{t.name}</p>
                <p className="text-sm text-text-muted">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
