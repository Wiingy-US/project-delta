const stats = [
  { value: '98%', label: 'Parent satisfaction' },
  { value: '4.9★', label: 'Average tutor rating' },
  { value: '15 min', label: 'Avg. match time' },
  { value: '40+', label: 'Math topics covered' },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-surface-muted px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-semibold tracking-tight text-primary lg:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
