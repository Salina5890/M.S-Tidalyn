import React from 'react';
import Badge from '../../components/common/Badge/Badge';
import Button from '../../components/common/Button/Button';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Layers } from 'lucide-react';
import { BRAND } from '../../utils/navigation';
import useScrollReveal from '../../utils/useScrollReveal';

export function AboutPage() {
  useScrollReveal();

  return (
    <div className="about-page" style={{ padding: 'var(--space-16) 0 var(--space-24)' }}>
      <div className="container">
        <div className="reveal-on-scroll" style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center', marginBottom: 'var(--space-12)' }}>

          <h1 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
            Engineering with Purpose & Precision
          </h1>
          <p className="lead">
            At {BRAND.name}, we are committed to powering businesses through robust, human-centered technology.
            We architect purposeful digital platforms and resilient software engineered for long-term growth and agility.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
          <div className="glass-panel reveal-on-scroll reveal-delay-1" style={{ padding: 'var(--space-8)' }}>
            <div style={{ color: 'var(--color-sky-400)', marginBottom: 'var(--space-4)' }}>
              <Layers size={28} />
            </div>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>The Philosophy</h3>
            <p>
              Great software should operate with effortless efficiency, eliminating complexity and empowering
              organizations to focus on what matters most.
            </p>
          </div>

          <div className="glass-panel reveal-on-scroll reveal-delay-2" style={{ padding: 'var(--space-8)' }}>
            <div style={{ color: 'var(--color-sky-400)', marginBottom: 'var(--space-4)' }}>
              <HeartHandshake size={28} />
            </div>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>Our Dedication</h3>
            <p>
              We focus on serving small schools and emerging software businesses—organizations
              that need high-caliber engineering without bloated costs or needless overhead.
            </p>
          </div>

          <div className="glass-panel reveal-on-scroll reveal-delay-3" style={{ padding: 'var(--space-8)' }}>
            <div style={{ color: 'var(--color-sky-400)', marginBottom: 'var(--space-4)' }}>
              <ShieldCheck size={28} />
            </div>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>Integrity & Trust</h3>
            <p>
              We craft every line of code with longevity in mind, avoiding fragile shortcuts
              in favor of dependable, secure architectures.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
          <Button href="/contact" variant="primary" size="md" iconRight={<ArrowRight size={16} />}>
            Connect with Our Team
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
