import React from 'react';
import Badge from '../../components/common/Badge/Badge';
import Button from '../../components/common/Button/Button';
import { Sparkles, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import useScrollReveal from '../../utils/useScrollReveal';

export function ProductsPage() {
  useScrollReveal();

  return (
    <div className="products-page" style={{ padding: 'var(--space-16) 0 var(--space-24)' }}>
      <div className="container">
        <div className="reveal-on-scroll" style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <Badge variant="ocean" icon={<Sparkles size={14} />}>
            Product Incubator
          </Badge>
          <h1 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
            Proprietary SaaS in Flight
          </h1>
          <p className="lead">
            We are engineering a suite of focused SaaS solutions crafted from the ground up to solve
            friction points in educational administration and modern digital workflows.
          </p>
        </div>

        <div className="reveal-on-scroll reveal-delay-2" style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="glass-panel" style={{ padding: 'var(--space-8)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
            <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-full)', background: 'rgba(2, 132, 199, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-sky-500)' }}>
              <Clock size={24} />
            </div>
            <h2>Phase 1 Architecture & Incubation</h2>
            <p>
              Our flagship software products are actively undergoing architectural design, UI prototyping,
              and security hardening. We build with deliberation, ensuring that every product release meets
              uncompromising standards of speed, reliability, and user delight.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
              <ShieldCheck size={16} color="var(--color-sky-400)" />
              <span>Built on modern cloud primitives</span>
            </div>
            <div style={{ marginTop: 'var(--space-4)' }}>
              <Button href="/contact" variant="primary" size="md" iconRight={<ArrowRight size={16} />}>
                Inquire About Early Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
