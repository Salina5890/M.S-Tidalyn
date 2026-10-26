import React from 'react';

/**
 * Reusable subtle ocean wave divider / decorative motif
 */
export function WaveDecor({ className = '', opacity = 0.4 }) {
  return (
    <div
      className={`wave-decor-wrapper ${className}`}
      style={{
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.05" />
            <stop offset="35%" stopColor="#38BDF8" stopOpacity={opacity} />
            <stop offset="70%" stopColor="#0EA5E9" stopOpacity={opacity * 0.7} />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d="M0,64 C240,110 480,20 720,64 C960,108 1200,30 1440,64 L1440,120 L0,120 Z"
          fill="url(#waveGrad)"
        />
        <path
          d="M0,64 C240,110 480,20 720,64 C960,108 1200,30 1440,64"
          stroke="#38BDF8"
          strokeWidth="1.2"
          strokeOpacity={opacity * 0.6}
          fill="none"
        />
      </svg>
    </div>
  );
}
export default WaveDecor;
