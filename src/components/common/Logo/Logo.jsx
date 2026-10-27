import React from 'react';
import logoImage from '../../../../assets/M.S Solutions logo.png';
import './Logo.css';

/**
 * M.S SOLUTIONS Official Brand Logo Component
 * Renders the official brand logo from the assets folder.
 */
export function Logo({
  variant = 'full', // 'icon' | 'full' | 'badge'
  size = 76,
  width,
  height,
  className = '',
  alt = 'M.S Solutions | Powering Businesses Through Technology',
}) {
  const finalHeight = height || size || 74;
  const finalWidth = width || (height ? 'auto' : `${finalHeight}px`);

  return (
    <div
      className={`brand-logo brand-logo--${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      <img
        src={logoImage}
        alt={alt}
        style={{
          height: typeof finalHeight === 'number' ? `${finalHeight}px` : finalHeight,
          width: typeof finalWidth === 'number' ? `${finalWidth}px` : finalWidth,
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}

export default Logo;
