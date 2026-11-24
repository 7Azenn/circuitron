# Circuitron — Official Digital Platform
### Electronics & IoT Club • R.V.S. College of Engineering and Technology (RVSCET), Jamshedpur

> **"WE DON'T JUST STUDY TECHNOLOGY. WE BUILD IT."**  
> *"From circuits to systems, from curiosity to creation."*

Official domain: [https://www.circuitron.in](https://www.circuitron.in)

---

## 1. Overview
This repository contains the permanent official digital platform of **Circuitron**, the premier hardware, electronics, and IoT society of **R.V.S. College of Engineering and Technology (RVSCET), Jamshedpur** (established in 2018).

The platform serves as:
- The authoritative institutional identity and digital hub of the club.
- A permanent engineering showcase of real student hardware, rovers, and sensor telemetry prototypes.
- The knowledge archive for technical workshops, laboratory clinics, and robotics competitions.
- The official onboarding gateway for RVSCET engineering students.

---

## 2. Visual Design System
- **Aesthetic**: Premium dark industrial & editorial engineering aesthetic.
- **Color Palette**:
  - **Graphite** (`#0B0F0E`): Deep industrial background.
  - **Off-white** (`#F2F2EA`): Primary crisp typography and contrast surfaces.
  - **Signal Lime** (`#C6F36B`): Precision accent, active states, key CTAs, and telemetry indicators.
  - **Steel Grey** (`#747C79`): Secondary technical labels, borders, and circuit traces.
- **Typography**:
  - Headings: `Space Grotesk`
  - Body: `Inter`
  - Technical Labels & Code: `IBM Plex Mono`

---

## 3. Architecture & Data Organization
Designed to be fully data-driven so future club committees can easily add new members, projects, workshops, or domains without editing core component code.

```text
src/
├── components/          # Reusable UI components
│   ├── Footer.jsx       # Institutional footer with verified contacts & links
│   ├── Layout.jsx       # Base layout with navbar, footer, and skip links
│   ├── LightboxModal.jsx# Accessible image lightbox with keyboard navigation
│   ├── Navbar.jsx       # Minimal sticky navigation with mobile drawer
│   ├── PageHeader.jsx   # Editorial page header with monospace breadcrumbs
│   ├── PageTitleManager.jsx # Dynamic SEO titles and canonical tags
│   └── ScrollToTop.jsx  # Instant window scroll reset on route changes
├── data/                # Structured, maintainable data layer
│   ├── activities.js    # Completed workshops & upcoming standing clinics
│   ├── clubInfo.js      # Official club metadata, contacts, campus coordinates
│   ├── domains.js       # 5 core engineering disciplines & curricula
│   ├── gallery.js       # Authentic photographic archive entries
│   ├── projects.js      # Documented hardware builds & tech specs
│   └── team.js          # Faculty advisors, executive leads, core committee
├── pages/               # Functional pages
│   ├── About.jsx        # Origin story, lab equipment, engineering philosophy
│   ├── Activities.jsx   # Activity log, workshops, competitions
│   ├── Domains.jsx      # Deep breakdown of the 5 technical disciplines
│   ├── Gallery.jsx      # Filterable photographic archive with lightbox
│   ├── Home.jsx         # Flagship homepage
│   ├── Join.jsx         # 3-step membership intake & direct contact desk
│   ├── NotFound.jsx     # Custom industrial 404 page
│   ├── PrivacyPolicy.jsx# Institutional data & media privacy notice
│   ├── Projects.jsx     # Filterable project showcase with spec sheets
│   └── Terms.jsx        # Terms of use & laboratory safety protocol
├── index.css            # Custom industrial styling & Tailwind directives
├── main.jsx             # React entrypoint
└── App.jsx              # Application router setup
```

---

## 4. Local Development

### Requirements
- **Node.js**: v18.x or later
- **npm** or **pnpm**

### Commands
```bash
# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Deployment
The project builds to standard static files in `dist/` and is ready for instant deployment to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

Canonical host: `https://www.circuitron.in`
