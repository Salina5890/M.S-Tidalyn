import React from 'react';
import Button from '../../components/common/Button/Button';
import Badge from '../../components/common/Badge/Badge';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div style={{ padding: 'var(--space-20) 0', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <Badge variant="subtle">404 Error</Badge>
        <h1 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
          Navigating Uncharted Waters
        </h1>
        <p style={{ marginBottom: 'var(--space-8)' }}>
          The page you are looking for does not exist or has been shifted in flight.
        </p>
        <Button href="/" variant="primary" size="md" iconLeft={<Home size={16} />}>
          Return to Shore (Home)
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
