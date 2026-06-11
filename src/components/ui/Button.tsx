import { useState, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary'
type ButtonSize = 'lg' | 'sm'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  children: ReactNode
  href?: string
}

const variants: Record<
  ButtonVariant,
  { background: string; color: string; border: string; hoverBg: string }
> = {
  primary: {
    background: 'var(--color-brand)',
    color: '#FFFFFF',
    border: 'none',
    hoverBg: 'var(--color-brand-hover)',
  },
  secondary: {
    background: 'var(--grey-1)',
    color: '#FFFFFF',
    border: 'none',
    hoverBg: 'var(--grey-2)',
  },
  tertiary: {
    background: 'transparent',
    color: 'var(--grey-1)',
    border: '1px solid var(--grey-1)',
    hoverBg: 'var(--surface-hover)',
  },
  quaternary: {
    background: '#FFFFFF',
    color: 'var(--grey-1)',
    border: '1px solid var(--grey-1)',
    hoverBg: 'var(--surface-hover)',
  },
}

export function Button({
  children,
  variant = 'primary',
  size = 'lg',
  disabled = false,
  fullWidth = false,
  href,
  className = '',
  style,
  ...rest
}: ButtonProps) {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  const isLg = size === 'lg'
  const v = variants[variant]

  const baseStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: isLg ? 48 : 34,
    padding: `${isLg ? 14 : 7}px 24px`,
    borderRadius: 'var(--radius-md)',
    border: v.border,
    background: hovered && !disabled ? v.hoverBg : v.background,
    color: v.color,
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--weight-medium)',
    fontSize: 16,
    lineHeight: '20px',
    textAlign: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    width: fullWidth ? '100%' : 'auto',
    boxSizing: 'border-box',
    outline: focused && !disabled ? '2px solid var(--grey-1)' : 'none',
    outlineOffset: focused ? 0 : undefined,
    transition: 'background 150ms ease, box-shadow 150ms ease',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    boxShadow: variant === 'primary' && !disabled ? '0 6px 18px rgba(38,85,163,0.35)' : undefined,
    ...style,
  }

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={className}
        style={baseStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={className}
      style={baseStyle}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...rest}
    >
      {children}
    </button>
  )
}
