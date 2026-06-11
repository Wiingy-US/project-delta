import { useState } from 'react'
import { SectionHeader } from './ui/SectionHeader'

const faqs = [
  {
    q: 'Is the trial really free?',
    a: "Yes — your first 45-minute session is completely free. We don't ask for a credit card until you decide to continue with a paid plan.",
  },
  {
    q: 'How quickly can I get matched with a tutor?',
    a: "Most students are matched within 15 minutes during business hours. You'll receive 2–3 tutor profiles to choose from based on your subject and schedule.",
  },
  {
    q: "What if my child doesn't connect with their tutor?",
    a: 'No problem. You can request a different tutor at any time, free of charge. We want the right fit, not just any fit.',
  },
  {
    q: 'Do you offer group sessions?',
    a: 'Our trial and standard plans are 1-on-1. We also offer small group sessions (2–4 students) at a reduced rate for siblings or study partners.',
  },
  {
    q: 'What technology do we need?',
    a: 'Any laptop, tablet, or desktop with a webcam and stable internet. Sessions run in your browser — no downloads required.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border bg-surface-muted ds-section">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Common questions" align="center" />

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-surface">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-text">{faq.q}</span>
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-text-muted transition-transform"
                  style={{ transform: openIndex === i ? 'rotate(45deg)' : undefined }}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <p className="px-6 pb-5 text-sm leading-relaxed text-text-muted">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
