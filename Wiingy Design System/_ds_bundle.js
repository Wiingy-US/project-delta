/* @ds-bundle: {"format":3,"namespace":"WiingyDesignSystem_d9960c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"2b5537f26bc0","components/core/Button.jsx":"9aa110f980f9","components/core/Tag.jsx":"94b48168a187"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WiingyDesignSystem_d9960c = window.WiingyDesignSystem_d9960c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — Small status dot or count indicator.
 */
function Badge({
  children,
  variant = 'default',
  style,
  ...rest
}) {
  const variants = {
    default: {
      background: 'var(--grey-5)',
      color: 'var(--grey-2)'
    },
    brand: {
      background: 'var(--blue-600)',
      color: '#FFFFFF'
    },
    success: {
      background: 'var(--color-success)',
      color: '#FFFFFF'
    },
    warning: {
      background: 'var(--color-warning)',
      color: '#92400E'
    },
    accent: {
      background: 'var(--purple-500)',
      color: '#FFFFFF'
    }
  };
  const v = variants[variant] || variants.default;
  const isCount = children !== undefined && children !== null;
  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: isCount ? 20 : 8,
    height: isCount ? 20 : 8,
    padding: isCount ? '0 6px' : 0,
    borderRadius: 'var(--radius-pill)',
    background: v.background,
    color: v.color,
    fontFamily: 'var(--font-primary)',
    fontWeight: 700,
    fontSize: 11,
    lineHeight: '12px',
    ...style
  };
  return React.createElement('span', {
    style: badgeStyle,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Button — Wiingy's primary interactive element.
 * Supports four variants (primary, secondary, tertiary, quaternary) and two sizes (lg=48px, sm=34px).
 */
function Button({
  children = 'Button',
  variant = 'primary',
  size = 'lg',
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const isLg = size === 'lg';
  const height = isLg ? 48 : 34;
  const paddingY = isLg ? 14 : 7;
  const fontSize = 16;
  const variants = {
    primary: {
      background: 'var(--color-brand)',
      color: '#FFFFFF',
      border: 'none',
      hoverBg: 'var(--color-brand-hover)'
    },
    secondary: {
      background: 'var(--grey-1)',
      color: '#FFFFFF',
      border: 'none',
      hoverBg: 'var(--grey-2)'
    },
    tertiary: {
      background: 'transparent',
      color: 'var(--grey-1)',
      border: '1px solid var(--grey-1)',
      hoverBg: 'var(--surface-hover)'
    },
    quaternary: {
      background: '#FFFFFF',
      color: 'var(--grey-1)',
      border: '1px solid var(--grey-1)',
      hoverBg: 'var(--surface-hover)'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height,
    padding: `${paddingY}px 24px`,
    borderRadius: 'var(--radius-md)',
    border: v.border,
    background: hovered && !disabled ? v.hoverBg : v.background,
    color: v.color,
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--weight-medium)',
    fontSize,
    lineHeight: '20px',
    textAlign: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    width: fullWidth ? '100%' : 'auto',
    boxSizing: 'border-box',
    outline: focused && !disabled ? '2px solid var(--grey-1)' : 'none',
    outlineOffset: focused ? '0px' : undefined,
    transition: 'background 150ms ease, box-shadow 150ms ease',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    ...style
  };
  return React.createElement('button', {
    style: baseStyle,
    disabled,
    onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Tag — Pill-shaped label for tutor attributes and status indicators.
 * Uses the signature Wiingy "sheen" gradient.
 */
function Tag({
  children = 'Student favorite',
  size = 'md',
  variant = 'default',
  style,
  ...rest
}) {
  const isSm = size === 'sm';
  const fontSize = isSm ? 12 : 14;
  const padding = isSm ? '2px 8px' : '4px 10px';
  const variants = {
    default: {
      background: 'linear-gradient(12.78deg, #F1F1F1 3.63%, #FFF 13.83%, #FFF 68.55%, #EFEFEF 90.81%)',
      color: 'var(--grey-1)',
      shadow: '0 0 0 1px #fff, 0px 4px 10px 0px rgba(0,0,0,0.16)'
    },
    success: {
      background: '#E8F5E9',
      color: 'var(--color-success)',
      shadow: 'none'
    },
    warning: {
      background: '#FFF8E1',
      color: '#92400E',
      shadow: 'none'
    },
    accent: {
      background: 'var(--purple-50)',
      color: 'var(--purple-700)',
      shadow: 'none'
    },
    brand: {
      background: 'var(--blue-100)',
      color: 'var(--blue-700)',
      shadow: 'none'
    }
  };
  const v = variants[variant] || variants.default;
  const tagStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding,
    borderRadius: 'var(--radius-pill)',
    background: v.background,
    color: v.color,
    boxShadow: v.shadow,
    fontFamily: 'var(--font-primary)',
    fontWeight: 700,
    fontSize,
    lineHeight: isSm ? '14px' : '16px',
    whiteSpace: 'nowrap',
    ...style
  };
  return React.createElement('span', {
    style: tagStyle,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

})();
