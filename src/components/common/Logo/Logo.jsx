import React from 'react';
import logoImage from '../../../../assets/logo.png';
import './Logo.css';

/**
 * M.S TIDALYN Official Brand Logo Component
 * Renders the official brand logo from the project's assets folder (assets/logo.png).
 */
export function Logo({
  variant = 'full', // 'icon' | 'full' | 'badge'
  size = 74,
  width,
  height,
  className = '',
  alt = 'M.S TIDALYN - Powering Businesses Through Technology.',
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
