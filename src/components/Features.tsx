import { SectionHeader } from './ui/SectionHeader'

const features = [
  {
    icon: '🎯',
    title: 'Personalized learning paths',
    description:
      'Every session adapts to your pace. Tutors identify gaps and build a plan that sticks.',
  },
  {
    icon: '📐',
    title: 'All math levels',
    description:
      'Pre-algebra through AP Calculus, statistics, SAT/ACT math, and college-level courses.',
  },
  {
    icon: '🖊️',
    title: 'Interactive whiteboard',
    description:
      'Draw, annotate, and solve problems together in real time — just like in-person tutoring.',
  },
  {
    icon: '📊',
    title: 'Progress tracking',
    description:
      'Parents get weekly summaries with topics covered, homework completed, and growth metrics.',
  },
  {
    icon: '🕐',
    title: 'Flexible scheduling',
    description:
      'Book evenings, weekends, or between classes. Reschedule with 24-hour notice.',
  },
  {
    icon: '✅',
    title: 'Vetted experts',
    description:
      'Every tutor passes background checks, teaching demos, and ongoing quality reviews.',
  },
]

export function Features() {
  return (
    <section id="features" className="ds-band-primary ds-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Why Delta Math"
          title="Tutoring that actually moves the needle"
          description="We combine expert human tutors with smart matching and session tools so every minute counts."
          className="[&_.ds-eyebrow]:text-text-on-primary/70 [&_.ds-heading]:text-text-on-primary [&_.ds-subheading]:text-text-on-primary/80"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-text-on-primary/15 bg-text-on-primary/10 p-6 backdrop-blur-sm"
            >
              <span className="text-2xl" role="img" aria-hidden>
                {feature.icon}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-text-on-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-on-primary/75">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
