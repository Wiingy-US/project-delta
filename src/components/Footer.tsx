function IconGlobe() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.7 2.6 4.1 5.6 4.1 9s-1.4 6.4-4.1 9c-2.7-2.6-4.1-5.6-4.1-9S9.3 5.6 12 3z" />
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.39.58A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.86.58 9.39.58 9.39.58s7.53 0 9.39-.58a3 3 0 0 0 2.11-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.6 15.6V8.4l6.27 3.6L9.6 15.6z"
      />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__legal">
          <span>© 2026 Wiingy, Inc</span>
          <span className="site-footer__dot" aria-hidden>
            •
          </span>
          <a href="#" className="site-footer__link">
            Privacy
          </a>
          <span className="site-footer__dot" aria-hidden>
            •
          </span>
          <a href="#" className="site-footer__link">
            Terms
          </a>
          <span className="site-footer__dot" aria-hidden>
            •
          </span>
          <a href="#" className="site-footer__link">
            Sitemap
          </a>
        </div>

        <div className="site-footer__meta">
          <button type="button" className="site-footer__lang">
            <IconGlobe />
            English (US)
          </button>
          <div className="site-footer__social" aria-label="Wiingy on social media">
            <a href="#" className="site-footer__social-link" aria-label="YouTube">
              <IconYouTube />
            </a>
            <a href="#" className="site-footer__social-link" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="#" className="site-footer__social-link" aria-label="LinkedIn">
              <IconLinkedIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
