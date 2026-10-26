/**
 * M.S TIDALYN - Engineering Methodology & Workflow
 * 
 * 6-step transparent development process detailing how our team
 * approaches every engineering engagement with rigor, agility, and clarity.
 */

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Understand',
    subtitle: 'Discovery & Requirement Analysis',
    icon: 'Search',
    description:
      'We begin by deeply understanding your operational model, user pain points, and specific technical requirements. We define clear scope boundaries to eliminate surprises later.',
    deliverables: [
      'Technical specification brief',
      'Feature priority matrix',
      'Target user persona mapping',
    ],
  },
  {
    step: '02',
    title: 'Plan',
    subtitle: 'Architecture & Technology Selection',
    icon: 'Layers',
    description:
      'We architect the database schemas, API contracts, hosting topology, and development timeline. Choosing the right stack early ensures scalable growth without costly rewrites.',
    deliverables: [
      'System architecture blueprint',
      'Database schema model',
      'Milestone-driven project roadmap',
    ],
  },
  {
    step: '03',
    title: 'Design',
    subtitle: 'User Interface & Interaction Prototyping',
    icon: 'Palette',
    description:
      'We craft modern, accessible, and intuitive UI designs. Every button, workflow, and viewport is planned for frictionless navigation and clarity before a single line of frontend code is written.',
    deliverables: [
      'Interactive wireframes & component systems',
      'Mobile & responsive layout previews',
      'Accessibility & contrast validation',
    ],
  },
  {
    step: '04',
    title: 'Develop',
    subtitle: 'Clean-Code Implementation',
    icon: 'Code',
    description:
      'We engineer your application with clean, modular, and maintainable code adhering to industry best practices in Angular, C# / ASP.NET Core, and Flutter. We maintain strict version control.',
    deliverables: [
      'Modular frontend & backend codebases',
      'Standardized RESTful API endpoints',
      'Git repository with structured commits',
    ],
  },
  {
    step: '05',
    title: 'Test',
    subtitle: 'Rigorous Verification & Security Checks',
    icon: 'ShieldCheck',
    description:
      'Quality is non-negotiable. We conduct thorough cross-browser compatibility tests, mobile device audits, security vulnerability checks, and edge-case boundary validations.',
    deliverables: [
      'Cross-browser and multi-screen testing',
      'API payload and error handling verification',
      'Performance and page speed optimization',
    ],
  },
  {
    step: '06',
    title: 'Deliver',
    subtitle: 'Deployment & Ongoing Continuity',
    icon: 'Rocket',
    description:
      'We handle deployment to your hosting environment or cloud provider, deliver full technical documentation, provide training, and ensure stable ongoing maintenance support.',
    deliverables: [
      'Live production deployment',
      'Comprehensive documentation & handover',
      'Ongoing maintenance & update support',
    ],
  },
];
