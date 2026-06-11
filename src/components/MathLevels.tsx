import { SectionHeader } from './ui/SectionHeader'
import { SessionPreview } from './ui/SessionPreview'

const levels = [
  {
    id: 'elementary',
    label: 'Elementary',
    grades: 'Grades K–5',
    topic: 'Fractions & decimals',
    topics: ['Addition & subtraction', 'Multiplication tables', 'Fractions', 'Word problems', 'Place value'],
    messages: {
      tutorMessage1:
        'If you have ¾ of a pizza and eat ¼, how much is left? Try drawing it out.',
      studentMessage: 'Is it 2/4? That’s the same as ½!',
      tutorMessage2:
        'Perfect! You’re seeing equivalent fractions — that’s a big idea at this level.',
      studentInitial: 'E',
    },
  },
  {
    id: 'middle',
    label: 'Middle School',
    grades: 'Grades 6–8',
    topic: 'Ratios & proportions',
    topics: ['Pre-algebra', 'Ratios & rates', 'Integers', 'Geometry basics', 'Percentages'],
    messages: {
      tutorMessage1:
        'A recipe uses 2 cups of flour for 12 cookies. How much flour for 18 cookies?',
      studentMessage: 'I set up 2/12 = x/18… so x = 3 cups?',
      tutorMessage2:
        'Exactly — cross-multiplying is a powerful tool. Let’s try one with variables next.',
      studentInitial: 'R',
    },
  },
  {
    id: 'high',
    label: 'High School',
    grades: 'Grades 9–12',
    topic: 'Quadratic equations',
    topics: ['Algebra I & II', 'Geometry', 'Trigonometry', 'Pre-calculus', 'SAT/ACT math'],
    messages: {
      tutorMessage1:
        'Let’s solve x² − 5x + 6 = 0. What do you notice about the coefficients?',
      studentMessage: 'I think we can factor it… (x−2)(x−3)?',
      tutorMessage2:
        'Exactly right! Let’s verify by expanding — you’re building great intuition.',
      studentInitial: 'M',
    },
  },
  {
    id: 'college',
    label: 'College',
    grades: 'Undergrad & beyond',
    topic: 'Multivariable calculus',
    topics: ['Calculus I–III', 'Linear algebra', 'Statistics', 'Differential equations', 'Proof writing'],
    messages: {
      tutorMessage1:
        'Find ∂f/∂x where f(x,y) = x²y + 3xy². Which terms treat y as constant?',
      studentMessage: '2xy + 3y² — the y terms stay fixed when we differentiate x.',
      tutorMessage2:
        'Spot on. Now let’s set up the gradient and interpret it geometrically.',
      studentInitial: 'A',
    },
  },
] as const

export function MathLevels() {
  return (
    <section id="math-levels" className="ds-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Math for every level"
          title="From counting to calculus — we meet students where they are"
          description="Every session is tailored to grade level, pace, and goals. Browse how tutoring looks from elementary through college."
        />

        <nav
          className="mt-10 flex flex-wrap gap-2"
          aria-label="Student level quick links"
        >
          {levels.map((level) => (
            <a
              key={level.id}
              href={`#${level.id}`}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-primary/30 hover:bg-primary-subtle hover:text-primary"
            >
              {level.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {levels.map((level) => (
            <div key={level.id} id={level.id} className="scroll-mt-28">
              <SessionPreview
                eyebrow={level.label}
                topic={level.topic}
                gradeLabel={level.grades}
                messages={level.messages}
              />
              <div className="mt-4 px-1">
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Topics we cover
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {level.topics.map((topic) => (
                    <li key={topic} className="ds-pill">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/15 bg-primary-subtle px-6 py-5 text-center lg:px-10">
          <p className="text-sm text-text-muted">
            Not sure which level fits?{' '}
            <a href="#trial" className="font-semibold text-primary underline-offset-4 hover:underline">
              Book a free trial
            </a>{' '}
            and we’ll match you with the right tutor.
          </p>
        </div>
      </div>
    </section>
  )
}
