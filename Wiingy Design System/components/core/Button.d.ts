import React from 'react';

export interface ButtonProps {
  /** Button label content */
  children?: React.ReactNode;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  /** Size — lg is 48px height, sm is 34px height */
  size?: 'lg' | 'sm';
  /** Disabled state */
  disabled?: boolean;
  /** Stretch to fill parent width */
  fullWidth?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

/**
 * Wiingy button — the primary interactive element across all surfaces.
 *
 * @startingPoint section="Components" subtitle="Primary interactive element" viewport="700x100"
 */
export function Button(props: ButtonProps): React.ReactElement;
