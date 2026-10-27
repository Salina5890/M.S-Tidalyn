import React from 'react';
import { ArrowRight, Compass, Layers, Sparkles, Feather } from 'lucide-react';
import Button from '../../common/Button/Button';
import Badge from '../../common/Badge/Badge';
import { BRAND } from '../../../utils/navigation';
import './Hero.css';

/**
 * Hero Section for M.S Solutions Homepage
 * Highlights Company Name, Exact Slogan, Primary CTA, and Strategic Focus Areas.
 */
export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-section__inner">
        {/* Main Content Column */}
        <div className="hero-section__content">
          {/* Slogan Pill Badge */}
          <div className="hero-section__badge-wrap animate-soar-1">
            <Badge
              variant="ocean"
              icon={<Sparkles size={14} className="hero-section__badge-icon" />}
            >
              Emerging Technology Startup &bull; Software Engineering
            </Badge>
          </div>

          {/* Primary Heading */}
          <h1 id="hero-title" className="hero-section__title animate-soar-2">
            <span className="hero-section__company-name">{BRAND.name}</span>
            <span className="text-gradient">{BRAND.slogan}</span>
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="hero-section__lead animate-soar-3">
            We are a modern software company architecting purposeful SaaS products.
            From streamlined digital platforms for small schools to resilient cloud
            foundations for growing software businesses, we build technology with precision and poise.
          </p>

          {/* Call to Actions */}
          <div className="hero-section__actions animate-soar-3">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              iconRight={<ArrowRight size={18} />}
            >
              Start a Conversation
            </Button>
            <Button
              href="/products"
              variant="secondary"
              size="lg"
            >
              Explore Products
            </Button>
          </div>

          {/* Strategic Focus Pillars (Transparent, without fake stats/clients) */}
          <div className="hero-section__pillars animate-soar-4">
            <div className="hero-pillar">
              <span className="hero-pillar__dot" />
              <div>
                <strong className="hero-pillar__title">Proprietary SaaS</strong>
                <p className="hero-pillar__desc">Purpose-built software products in active development</p>
              </div>
            </div>

            <div className="hero-pillar">
              <span className="hero-pillar__dot" />
              <div>
                <strong className="hero-pillar__title">Small Schools</strong>
                <p className="hero-pillar__desc">Tailored, accessible tools designed for modern learning</p>
              </div>
            </div>

            <div className="hero-pillar">
              <span className="hero-pillar__dot" />
              <div>
                <strong className="hero-pillar__title">Software Businesses</strong>
                <p className="hero-pillar__desc">Clean architecture & high-reliability engineering</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Presentation (Subtle M.S Solutions Aerodynamics & Oceanic Atmosphere) */}
        <div className="hero-section__visual animate-float" aria-hidden="true">
          <div className="hero-visual-card">
            {/* Ambient Card Header */}
            <div className="hero-visual-card__header">
              <div className="hero-visual-card__dots">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-visual-card__title">
                <Layers size={13} className="hero-visual-card__icon" />
                <span>Architecture Blueprint &bull; Phase 1</span>
              </div>
            </div>

            {/* Visual Architecture Representation */}
            <div className="hero-visual-card__body">
              <div className="blueprint-node blueprint-node--primary">
                <div className="blueprint-node__indicator" />
                <div className="blueprint-node__content">
                  <span className="blueprint-node__category">Foundational SaaS Core</span>
                  <span className="blueprint-node__label">M.S Solutions Cloud Framework</span>
                </div>
              </div>

              <div className="blueprint-connector">
                <div className="blueprint-connector__line" />
              </div>

              <div className="blueprint-dual-grid">
                <div className="blueprint-node blueprint-node--branch">
                  <Compass size={16} className="blueprint-branch-icon" />
                  <div>
                    <span className="blueprint-node__category">Education Tech</span>
                    <span className="blueprint-node__label">Small Schools Suite</span>
                  </div>
                </div>

                <div className="blueprint-node blueprint-node--branch">
                  <Sparkles size={16} className="blueprint-branch-icon" />
                  <div>
                    <span className="blueprint-node__category">Scale & Tools</span>
                    <span className="blueprint-node__label">Software Business Tools</span>
                  </div>
                </div>
              </div>

              {/* Oceanic flight vector graphic */}
              <div className="hero-visual-flight-motif">
                <svg viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 10 65 Q 100 15, 200 50 T 310 20"
                    stroke="url(#flightGrad)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <defs>
                    <linearGradient id="flightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0284C7" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#BAE6FD" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flight-marker">
                  <Sparkles size={14} className="flight-feather-icon" />
                  <span>Ascent Trajectory</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Metric/Badge */}
            <div className="hero-visual-card__footer">
              <span className="hero-visual-status-pill">
                <span className="status-ping" />
                Systems Online &bull; Scalable Foundation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
