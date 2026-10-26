# M.S Tidalyn Corporate Website

> **“Powering Businesses Through Technology.”**

Welcome to the official web platform repository for **M.S Tidalyn**. This project establishes a modern, responsive, and scalable frontend architecture designed to support the company's proprietary SaaS products, edtech tools for small schools, and solutions for software businesses.

---

## Brand Identity & Design System

- **Company Name:** M.S Tidalyn
- **Slogan:** *“Powering Businesses Through Technology.”*
- **Visual Aesthetic:** Dreamy, oceanic, premium, innovative, and trustworthy.
- **Color Palette:**
  - **Deep Ocean Navy:** `#020712`, `#051124`, `#091A36`, `#0E2447`
  - **Soft White / Slate:** `#F8FAFC`, `#94A3B8`, `#64748B`
  - **Sky Blue & Oceanic Accents:** `#38BDF8`, `#7DD3FC`, `#0284C7`, `#0EA5E9`
- **Typography:**
  - Headings & Display: `Outfit` (Aerodynamic, visionary, modern)
  - Body & User Interface: `Plus Jakarta Sans` (Crisp, highly legible, accessible)
- **Motifs & Motion:** Subtle oceanic wing geometry, restrained ocean wave horizon lines, and ambient oceanic lighting gradients.

---

## Phase 1 Deliverables & Architecture

- **Clean Component Architecture:** Reusable atoms (`Button`, `Badge`), structural layouts (`Header`, `Footer`, `Layout`), and section modules (`Hero`).
- **Design Token Engine:** Modular CSS variables (`variables.css`, `typography.css`, `reset.css`, `animations.css`, `index.css`).
- **Responsive Layout:** Adaptive across mobile devices, tablets, laptops, and ultra-wide screens.
- **Routing Ready:** Configured with `react-router-dom` with accessible skip links and scroll-to-top behavior.
- **Accessible & SEO-Optimized:** Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), Open Graph tags, Twitter cards, meta descriptions, and ARIA labels.

---

## Directory Structure

```text
MS-TIDALYN/
├── public/
│   └── favicon.svg               # Stylized brand & wave icon
├── src/
│   ├── assets/
│   │   └── icons/
│   │       ├── Logo.jsx          # Dynamic brand logo component
│   │       └── WaveDecor.jsx     # Restrained ocean wave SVG divider
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge/            # Oceanic pill & status badges
│   │   │   ├── Button/           # Multi-variant, accessible button component
│   │   │   └── ScrollToTop.jsx   # Route transition scroll manager
│   │   ├── layout/
│   │   │   ├── Footer/           # 4-pillar corporate footer with wave accent
│   │   │   ├── Header/           # Glassmorphic navbar & responsive mobile drawer
│   │   │   ├── Layout.jsx        # Master layout with ambient oceanic glow
│   │   │   └── Layout.css
│   │   └── sections/
│   │       └── Hero/             # Hero banner featuring slogan, CTAs & blueprint
│   ├── pages/
│   │   ├── About/                # Company philosophy & mission
│   │   ├── Contact/              # Inquiries for schools & software businesses
│   │   ├── Home/                 # Homepage shell with hero & strategic pillars
│   │   ├── NotFound/             # 404 fallback page
│   │   ├── Products/             # Proprietary SaaS incubator page
│   │   └── Solutions/            # Small schools & software business solutions
│   ├── styles/
│   │   ├── animations.css        # Subtle GPU-accelerated motion tokens
│   │   ├── index.css             # Main stylesheet combining tokens & layout
│   │   ├── reset.css             # Resilient modern CSS reset
│   │   ├── typography.css        # Responsive type scale and gradient utilities
│   │   └── variables.css         # Oceanic palette, spacing, and elevation tokens
│   ├── utils/
│   │   └── navigation.js         # Navigation links, metadata & brand constants
│   ├── App.jsx                   # Route definition & application tree
│   └── main.jsx                  # React DOM mount point
├── .gitignore
├── index.html                    # SEO metadata, Open Graph & Google Fonts
├── package.json                  # Dependencies & build scripts
├── vite.config.js                # Vite build configuration
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (version 18+ recommended)
- npm, pnpm, or yarn

### Installation & Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

### Production Build

To test and compile the production bundle:
```bash
npm run build
npm run preview
```

---

## Phase 1 Scope & Constraints

As per Phase 1 architectural requirements:
- No database, backend API, or authentication mechanisms have been introduced.
- No fabricated client logos, testimonials, or simulated user statistics were added.
- Focus is entirely on high-fidelity design foundations, responsive design tokens, and modular components ready for future feature phases.
