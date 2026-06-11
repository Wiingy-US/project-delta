export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary font-display text-sm font-semibold text-text-on-primary">
            π
          </span>
          <span className="font-display font-semibold text-text">Delta Math</span>
        </div>

        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Delta Math Tutoring. All rights reserved.
        </p>

        <nav className="flex gap-6 text-sm text-text-muted">
          <a href="#" className="hover:text-text">
            Privacy
          </a>
          <a href="#" className="hover:text-text">
            Terms
          </a>
          <a href="#" className="hover:text-text">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
