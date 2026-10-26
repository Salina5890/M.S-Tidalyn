import React from 'react';
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Cloud,
  CheckCircle2,
  Sparkles,
  Terminal,
  Shield,
  Layers,
  Cpu,
} from 'lucide-react';
import Hero from '../../components/sections/Hero/Hero';
import ServicesPreview from '../../components/sections/ServicesPreview/ServicesPreview';
import CapabilitiesSection from '../../components/sections/Capabilities/CapabilitiesSection';
import HowWeWork from '../../components/sections/HowWeWork/HowWeWork';
import Button from '../../components/common/Button/Button';
import Badge from '../../components/common/Badge/Badge';
import { BRAND } from '../../utils/navigation';
import useScrollReveal from '../../utils/useScrollReveal';
import './HomePage.css';

export function HomePage() {
  useScrollReveal();

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Startup Mission & Engineering Pillars */}
      <section
        className="mission-section reveal-on-scroll"
        aria-labelledby="mission-title"
      >
        <div className="container">
          <div className="mission-section__header">
            <Badge variant="ocean" icon={<Sparkles size={14} />}>
              Our Engineering Mission
            </Badge>

            <h2 id="mission-title" className="mission-section__title">
              Powering Modern Businesses with Precision
            </h2>

            <p className="mission-section__lead">
              {BRAND.name} is an emerging technology startup architecting purposeful
              software. We combine rigorous engineering discipline with modern cloud
              primitives to build high-performance web applications, mobile tools, and
              scalable SaaS products.
            </p>
          </div>

          <div className="mission-cards-grid">
            <div className="mission-card reveal-on-scroll reveal-delay-1">
              <div className="mission-card__icon-wrap">
                <Code2 size={24} className="mission-card__icon" />
              </div>
              <h3 className="mission-card__title">Modern Full-Stack Architecture</h3>
              <p className="mission-card__desc">
                We engineer scalable web and mobile solutions utilizing Angular, C# / ASP.NET Core,
                and Flutter. Clean architecture and type safety ensure your codebase remains agile and
                maintainable as your operations expand.
              </p>
              <span className="mission-card__tag">Clean Code Standards</span>
            </div>

            <div className="mission-card reveal-on-scroll reveal-delay-2">
              <div className="mission-card__icon-wrap">
                <GraduationCap size={24} className="mission-card__icon" />
              </div>
              <h3 className="mission-card__title">Small Schools & Education Tech</h3>
              <p className="mission-card__desc">
                We are passionate about bringing modern, accessible digital portals and mobile
                companions to small educational institutions—simplifying school administration,
                admissions, and guardian communications.
              </p>
              <span className="mission-card__tag">Institutional Tools</span>
            </div>

            <div className="mission-card reveal-on-scroll reveal-delay-3">
              <div className="mission-card__icon-wrap">
                <Cloud size={24} className="mission-card__icon" />
              </div>
              <h3 className="mission-card__title">Cloud & SaaS Engineering</h3>
              <p className="mission-card__desc">
                From multi-tenant data partitioning to subscription lifecycle orchestration,
                we design software products with cloud resilience, zero legacy baggage, and
                rock-solid security from day one.
              </p>
              <span className="mission-card__tag">Cloud-Native Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services (The 5 Real Services) */}
      <ServicesPreview />

      {/* 4. Capabilities & Conceptual Architecture Blueprints */}
      <CapabilitiesSection />

      {/* 5. 6-Step Engineering Methodology */}
      <HowWeWork />

      {/* 6. Technology Stacks & Standards */}
      <section className="tech-standards-section" aria-labelledby="tech-standards-heading">
        <div className="container">
          <div className="tech-standards-header reveal-on-scroll">
            <Badge variant="ocean" icon={<Terminal size={14} />}>
              Technology & Discipline
            </Badge>
            <h2 id="tech-standards-heading" className="tech-standards-title">
              Our Technology <span className="text-gradient">Foundation</span>
            </h2>
            <p className="tech-standards-lead">
              We choose industry-proven, high-performance technologies that enable fast iteration,
              type safety, and long-term maintainability for every product we engineer.
            </p>
          </div>

          <div className="tech-standards-grid">
            <div className="tech-item-card reveal-on-scroll reveal-delay-1">
              <div className="tech-item-badge">Frontend</div>
              <h3 className="tech-item-title">Angular & TypeScript</h3>
              <p className="tech-item-desc">
                Enterprise-grade client applications with structured dependency injection,
                modular components, and strict type safety.
              </p>
            </div>

            <div className="tech-item-card reveal-on-scroll reveal-delay-2">
              <div className="tech-item-badge">Backend</div>
              <h3 className="tech-item-title">C# & ASP.NET Core</h3>
              <p className="tech-item-desc">
                High-throughput, asynchronous web APIs, robust authentication layers, and reliable
                database ORM integration.
              </p>
            </div>

            <div className="tech-item-card reveal-on-scroll reveal-delay-3">
              <div className="tech-item-badge">Mobile</div>
              <h3 className="tech-item-title">Flutter & Dart</h3>
              <p className="tech-item-desc">
                High-performance, 60fps native-compiled applications for Android with fluid gestures,
                offline caching, and Firebase integrations.
              </p>
            </div>

            <div className="tech-item-card reveal-on-scroll reveal-delay-4">
              <div className="tech-item-badge">Infrastructure</div>
              <h3 className="tech-item-title">Cloud & Modern Databases</h3>
              <p className="tech-item-desc">
                PostgreSQL, SQL Server, Redis, and Docker containerization ensuring reproducible
                deployments and reliable data persistence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Start Your Project / Invitation Section */}
      <section
        className="invitation-section reveal-on-scroll"
        aria-labelledby="invitation-title"
      >
        <div className="container">
          <div className="invitation-card">
            <div className="invitation-card__content">
              <span className="eyebrow">
                Start Your Project
              </span>

              <h2
                id="invitation-title"
                className="invitation-card__title"
              >
                Ready to engineer your next software solution?
              </h2>

              <p className="invitation-card__desc">
                Whether you represent an educational institution looking for a modern digital presence,
                an entrepreneur building a SaaS product, or a business in need of reliable software
                maintenance, we are here to collaborate with you directly.
              </p>
            </div>

            <div className="invitation-card__actions">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight size={18} />}
              >
                Start a Conversation
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="lg"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;