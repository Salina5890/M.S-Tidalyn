import React from 'react';
import {
  GraduationCap,
  Cloud,
  Smartphone,
  Monitor,
  CheckCircle2,
  Layers,
  ArrowRight,
  Info,
  ShieldCheck,
} from 'lucide-react';
import Badge from '../../common/Badge/Badge';
import Button from '../../common/Button/Button';
import { CAPABILITIES } from '../../../data/capabilitiesData';
import './CapabilitiesSection.css';

const ICON_MAP = {
  GraduationCap,
  Cloud,
  Smartphone,
  Monitor,
};

export function CapabilitiesSection() {
  return (
    <section
      className="capabilities-section"
      aria-labelledby="capabilities-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="capabilities-header reveal-on-scroll">
          <Badge variant="ocean" icon={<Layers size={14} />}>
            Engineering Capabilities
          </Badge>
          <h2 id="capabilities-heading" className="capabilities-title">
            Architectures We <span className="text-gradient">Engineer</span>
          </h2>
          <p className="capabilities-lead">
            Explore our foundational capability blueprints. As an emerging software startup,
            we design and build reliable digital platforms with rigorous architectural discipline
            tailored to small educational institutions and modern software businesses.
          </p>

          {/* Transparent Honest Disclosure Pill */}
          <div className="capabilities-transparency-notice" role="note">
            <Info size={16} className="notice-icon" aria-hidden="true" />
            <span>
              <strong>Full Transparency:</strong> The solutions below showcase our internal architectural
              models, system designs, and technical competencies. We do not claim past client deliveries.
            </span>
          </div>
        </div>

        {/* Blueprint Grid */}
        <div className="capabilities-grid">
          {CAPABILITIES.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || Layers;
            const delayClass = `reveal-delay-${(index % 4) + 1}`;

            return (
              <article
                key={item.id}
                className={`capability-card reveal-on-scroll ${delayClass}`}
              >
                {/* Top Accent Line */}
                <div className="capability-card__accent" />

                {/* Card Header & Badges */}
                <div className="capability-card__top">
                  <div className="capability-card__icon-wrap">
                    <IconComponent size={24} className="capability-card__icon" />
                  </div>
                  <div className="capability-card__badges">
                    <span className="capability-card__status-pill">
                      <span className="capability-card__dot" />
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="capability-card__domain">{item.domain}</div>

                <h3 className="capability-card__title">{item.title}</h3>
                <p className="capability-card__tagline">{item.tagline}</p>

                <p className="capability-card__summary">{item.summary}</p>

                {/* Problem Solved Callout */}
                <div className="capability-card__problem-box">
                  <span className="problem-box__label">Core Objective</span>
                  <p className="problem-box__text">{item.problemSolved}</p>
                </div>

                {/* Key Architecture Highlights */}
                <div className="capability-card__highlights-section">
                  <span className="highlights-title">Key Architectural Pillars</span>
                  <ul className="capability-card__highlights">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="capability-highlight">
                        <CheckCircle2 size={15} className="highlight-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="capability-card__footer">
                  <span className="tech-stack-label">Target Stack</span>
                  <div className="capability-card__tech-tags">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="capability-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Capabilities CTA Callout */}
        <div className="capabilities-cta reveal-on-scroll">
          <div className="capabilities-cta__content">
            <div className="capabilities-cta__icon">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="capabilities-cta__title">
                Have a specialized system requirement in mind?
              </h3>
              <p className="capabilities-cta__desc">
                From custom administrative web tools to native-feel mobile companion apps,
                we can review your specifications and engineer an architectural plan tailored to your budget.
              </p>
            </div>
          </div>
          <Button
            href="/contact"
            variant="primary"
            size="md"
            iconRight={<ArrowRight size={16} />}
          >
            Discuss Your System
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;
