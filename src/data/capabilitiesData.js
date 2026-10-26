/**
 * M.S TIDALYN - Capabilities & Conceptual Architecture Data
 * 
 * IMPORTANT CONTENT RULE:
 * This data represents forward-looking architectural blueprints and technical
 * capabilities engineered by M.S TIDALYN. These are clearly designated as conceptual
 * models to demonstrate engineering patterns and technical competencies honestly
 * without claiming completed past client deliveries or fictitious case studies.
 */

export const CAPABILITIES = [
  {
    id: 'eduflow-central',
    title: 'EduFlow Portal Architecture',
    tagline: 'Modular School Management & Parent Companion Blueprint',
    domain: 'Education & Small Institutions',
    badge: 'Concept Architecture',
    icon: 'GraduationCap',
    summary:
      'A streamlined institutional platform concept unifying student record indices, parent communication channels, and administrative workflows into a high-security, responsive web application.',
    problemSolved:
      'Eliminating chaotic paperwork and fragmented spreadsheets for small educational institutions with an accessible, lightweight administrative system.',
    highlights: [
      'Role-based permissions for faculty, staff, and guardians',
      'Instant announcement distribution & digital calendar feeds',
      'Optimized lightweight database schema for quick indexing',
      'Mobile-responsive layout adhering to WCAG accessibility guidelines',
    ],
    techStack: ['Angular', 'C# / ASP.NET Core', 'SQL', 'RESTful API'],
    architectureStatus: 'Blueprint Ready & Prototyping',
  },
  {
    id: 'cloudnexus-saas',
    title: 'CloudNexus Multi-Tenant Core',
    tagline: 'High-Scalability Micro-SaaS Foundation & Billing Engine',
    domain: 'SaaS Product Development',
    badge: 'Capability Blueprint',
    icon: 'Cloud',
    summary:
      'An end-to-end multi-tenant backend foundation designed for modern cloud applications, featuring automated tenant schema isolation, token authentication, and subscription lifecycle hooks.',
    problemSolved:
      'Providing growing software businesses with a resilient architectural base that scales cleanly from tenant one to thousands without architectural debt.',
    highlights: [
      'Strict multi-tenant data partitioning & security isolation',
      'JWT/OAuth2 security layer with granular permission scopes',
      'Modular billing hooks for subscription tier orchestration',
      'Standardized REST endpoints with OpenAPI specifications',
    ],
    techStack: ['C#', 'ASP.NET Core', 'PostgreSQL', 'Docker'],
    architectureStatus: 'System Architecture Defined',
  },
  {
    id: 'campusconnect-mobile',
    title: 'CampusConnect Mobile App',
    tagline: 'Cross-Platform Student & Guardian Companion',
    domain: 'Mobile Application Development',
    badge: 'Design Prototype',
    icon: 'Smartphone',
    summary:
      'A native-quality mobile application engineered to keep students, teachers, and guardians in continuous sync with timely notifications, attendance updates, and academic progress.',
    problemSolved:
      'Ensuring immediate, reliable reach to parents on Android devices even in low-bandwidth network environments with offline-first caching.',
    highlights: [
      'Offline-first data caching for instant offline access',
      'Targeted push notifications via Firebase Cloud Messaging',
      'Biometric authentication (fingerprint / face ID unlock)',
      'Smooth 60fps interface with ergonomic touch targets',
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Local Storage'],
    architectureStatus: 'Interactive Prototype',
  },
  {
    id: 'opsdashboard-web',
    title: 'CorePulse Management Dashboard',
    tagline: 'Real-Time Enterprise Operations & Records Console',
    domain: 'Web Application Development',
    badge: 'Concept Architecture',
    icon: 'Monitor',
    summary:
      'A high-performance administrative console built for businesses needing clean data visualization, audit logs, user management, and seamless back-office record handling.',
    problemSolved:
      'Replacing sluggish legacy spreadsheets with responsive, searchable, and exportable business control panels.',
    highlights: [
      'Dynamic data tables with high-speed server-side filtering',
      'Granular audit logging tracking system interactions',
      'Automated PDF and spreadsheet export pipelines',
      'Consistent dark/light high-contrast visual ergonomics',
    ],
    techStack: ['Angular', 'TypeScript', 'ASP.NET Core', 'CSS3'],
    architectureStatus: 'Component System Defined',
  },
];
