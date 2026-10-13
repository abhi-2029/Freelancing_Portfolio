# Abhishek Ranjan — Full-Stack Developer Portfolio

A modern, high-performance freelance portfolio built to present full-stack engineering capabilities to startup founders, entrepreneurs, agencies, and businesses.

Built with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Highlights

- **Conversion-Oriented Hero**: Value proposition targeted at freelance clients, code terminal preview, quick social links, and primary CTA.
- **Freelance Services Breakdown**: 5 targeted service offerings (Full-Stack Development, SaaS & MVP Development, Backend & Database Architecture, API & Third-Party Integration, Performance & Code Optimization).
- **In-Depth Case Studies**: Real project showcases (**Quick.AI** and **HospCare**) featuring problem-solution framing, system architecture, database design, tech decisions, and GitHub source links.
- **Technical Expertise**: Honest, categorized breakdown of skills without artificial percentage bars (Frontend, Backend, Databases, Tools & DevOps, Core Competencies).
- **Engineering Philosophy & Bio**: Clear narrative on problem solving, LeetCode (450+ solved, 200+ active days, 5★ HackerRank), education (B.Tech CSE), and approach to software delivery.
- **Client Collaboration Process**: 6-step roadmap detailing the freelance lifecycle from discovery to post-launch handover.
- **Dark / Light Theme**: Seamless theme toggling with persistent state and reduced-motion accessibility support (`prefers-reduced-motion`).
- **Interactive Contact Form**: In-app validation, budget and project type selectors, direct contact details, and response time expectations.

---

## 📁 Project Structure

```
src/
├── assets/             # Static visual assets
├── components/
│   ├── cards/          # ServiceCard, ProjectCard, ProjectModal, ProcessStep
│   ├── forms/          # ContactForm
│   ├── layout/         # Navbar, MobileMenu, Footer
│   └── ui/             # Button, TechTag, BrandIcons, SectionHeader, ThemeToggle
├── data/               # Single source of truth data files
│   ├── engagementModels.js # Collaboration models & sprint packages
│   ├── faq.js          # Frequently asked freelance questions
│   ├── navigation.js   # Nav links
│   ├── personal.js     # Bio, contact, social, and education details
│   ├── process.js      # How I Work timeline steps
│   ├── projects.js     # Selected work & deep case studies
│   ├── services.js     # Freelance service packages & deliverables
│   └── skills.js       # Technical skill categories
├── hooks/              # useTheme, useReducedMotion, useScrollspy
├── sections/           # Full-page sections (Hero, Services, SelectedWork, Models, FAQ, etc.)
├── utils/              # cn (Tailwind class merger)
├── App.jsx             # Shell assembly
├── index.css           # Tailwind v4 theme & typography styling
└── main.jsx            # Entry point
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/abhi-2029/Freelancing_portfolio.git

# Navigate into the project directory
cd Freelancing_portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be live at `http://localhost:5173`.

### Production Build

```bash
# Typecheck & bundle for production
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Customization & Updating Content

All portfolio content is decoupled from components into structured data files inside `src/data/`:

| File | What to edit |
| --- | --- |
| `src/data/personal.js` | Your name, email, phone, GitHub, LinkedIn, bio, stats, education |
| `src/data/projects.js` | Featured projects, case studies, architecture notes, repos, and live URLs |
| `src/data/services.js` | Freelance offerings and tech stacks |
| `src/data/skills.js` | Categories, skill lists, and contextual notes |
| `src/data/process.js` | Your freelance collaboration workflow |

### Connecting the Contact Form

The contact form in `src/components/forms/ContactForm.jsx` is structured for easy connection to any backend service:

- **Formspree**: Add `action="https://formspree.io/f/YOUR_FORM_ID"` to the `<form>` tag or use the Formspree React hook.
- **EmailJS**: Call `emailjs.send()` in the `handleSubmit` function.
- **Custom API / Webhook**: Point `fetch('/api/contact', ...)` to your own Node.js/Express endpoint.

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Framework Preset: `Vite`.
4. Deploy!

### Netlify
1. Connect your repository to [Netlify](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.

---

## 📄 License

MIT License — Feel free to customize and use this for your personal portfolio.
