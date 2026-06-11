import { useState } from 'react'

const navLinks = [
  { label: 'Levels', href: '#math-levels' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary font-display text-lg font-semibold text-text-on-primary">
            π
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-text">
            Delta Math
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#trial" className="ds-btn-accent">
            Start free trial
          </a>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-sm font-medium text-text-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#trial"
              className="ds-btn-accent mt-2 justify-center"
              onClick={() => setOpen(false)}
            >
              Start free trial
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
