import { Logo } from './Logo'

export function Header() {
  return (
    <header className="hero-header">
      <a href="/" className="hero-header__logo" aria-label="Wiingy">
        <Logo decorative />
      </a>
    </header>
  )
}
