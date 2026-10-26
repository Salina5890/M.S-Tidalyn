import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.css';

/**
 * Master App Layout
 * Encapsulates Header, ambient oceanic atmosphere, semantic <main>, and Footer.
 */
export function Layout({ children }) {
  return (
    <div className="app-shell">
      {/* Accessible skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Ambient Ocean Lighting Atmosphere */}
      <div className="ocean-atmosphere" aria-hidden="true">
        <div className="ocean-atmosphere__glow ocean-atmosphere__glow--top" />
        <div className="ocean-atmosphere__glow ocean-atmosphere__glow--center" />
        <div className="ocean-atmosphere__grid" />
      </div>

      {/* Reusable Header */}
      <Header />

      {/* Semantic Main Content Shell */}
      <main id="main-content" className="app-shell__main">
        {children}
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
