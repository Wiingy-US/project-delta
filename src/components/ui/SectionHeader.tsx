type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}
    >
      <p className="ds-eyebrow">{eyebrow}</p>
      <h2 className="ds-heading mt-3">{title}</h2>
      {description && <p className="ds-subheading">{description}</p>}
    </div>
  )
}
