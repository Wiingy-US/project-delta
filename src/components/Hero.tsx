import { HeroDecor } from './HeroDecor'
import { TrialStepper } from './trial-funnel/TrialStepper'

const stats = [
  { value: '4,500+', label: 'Expert tutors' },
  { value: '50+', label: 'Topics available' },
  { value: '20,000+', label: 'Happy learners' },
]

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="hero-title__line">Get Best Math Tutor</span>
            <span className="hero-title__line hero-title__accent">with 1:1 Classes</span>
          </h1>

          <p className="hero-subtitle">
            Top vetted tutors specialised in math. Math covers a range of subjects including algebra,
            calculus, statistics, and more for all levels.
          </p>
        </div>

        <div className="hero-form-stage">
          <HeroDecor />
          <TrialStepper />
        </div>

        <div className="hero-stats" aria-label="Wiingy in numbers">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <div className="hero-stat__value">{stat.value}</div>
              <div className="hero-stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
