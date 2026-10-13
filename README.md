<div align="center">

# Abhishek Ranjan — Full-Stack Developer Portfolio
**Production-Grade Web Application & Freelance Engineering Platform**

[![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

<br />

[Live Demo](https://github.com/abhi-2029/Freelancing_Portfolio) · [View Case Studies](#-featured-case-studies) · [Collaboration Models](#-collaboration-models) · [Scope Calculator](#-scope--tech-stack-estimator) · [Contact](#-direct-contact--inquiries)

</div>

---

## 📌 Overview

This repository contains the production source code for **Abhishek Ranjan’s personal freelance engineering portfolio**. 

Engineered specifically to convert startup founders, entrepreneurs, small businesses, and agencies, this platform communicates technical depth, architectural rigor, and end-to-end delivery capability without artificial gimmicks, unverified testimonials, or percentage-based skill meters.

---

## 🌟 Key Engineering & Conversion Highlights

### 1. ⚡ Interactive Scope, Tech Stack & Timeline Estimator
* **Client-First Transparency**: Prospective clients can select their desired application type (*Full-Stack SaaS/MVP, Custom Web App, REST API, AI SaaS, or Business Dashboard*), customize their expected stacks across Frontend, Backend, Database, and DevOps, and pick their delivery velocity (*Fast-Track MVP Sprint vs. Standard Phased Pace*).
* **Zero-Typing Auto-Fill Flow**: Clicking **"Apply Scope to Contact Form"** packages the exact chosen stacks and timeline into a clean specification and pre-populates the contact form automatically.

### 2. 💼 Transparent Engagement Models
Clearly structured working agreements designed for founders and product teams:
* **Full MVP Development Sprint (2–4 Weeks)**: Rapid concept-to-deployment execution for startups launching a new product.
* **Feature & API Integration (1–2 Weeks)**: Adding multi-provider AI APIs, authentication migrations, or custom backend services to existing systems.
* **Dedicated Engineering Retainer (Monthly Ongoing)**: Consistent 10–20 hrs/week engineering capacity for continuous feature velocity without full-time hiring overhead.

### 3. 📊 "Why Hire Me Over Other Options" Comparison Matrix
An honest, side-by-side comparison matrix evaluating **Abhishek Ranjan vs. Traditional Agencies ($20k–$60k overhead, slow account managers) vs. Budget Freelancers (ghosting, spaghetti code)** across 6 key factors: delivery speed, direct communication, code standards, billing transparency, IP ownership, and post-launch support.

### 4. 🏗️ Deep Case Studies with 4-Tier Architecture
Showcases real, verifiable production applications:
* **Quick.AI** — Multi-Model AI SaaS Platform (*React 19, Express.js, PostgreSQL/Neon, Clerk Auth, Groq Llama 3.1, OpenRouter, Cloudinary, Docker Compose*).
* **HospCare** — Healthcare & Appointment Management System (*React SPA, Node.js, Express.js, MongoDB, JWT + bcrypt, 4 Indexed Collections, Role-Based Access Control*).
* Includes interactive case study modals featuring **4-Tier System Architecture & Data Flow** (*Client Layer → Gateway/Auth → Service Mesh → Data & Media CDN*).

### 5. 🛡️ Concrete Client Standards & Risk Mitigation
* **100% Code & IP Handover**: Full repository and intellectual property transferred upon milestone completion.
* **14-Day Post-Launch Bug Warranty**: Prompt resolution of edge cases within agreed scope at zero extra cost.
* **Milestone Protection**: Work is verified on staging deployments before milestone release.
* **Zero Vendor Lock-In**: Deployed with standard Docker containers and standard cloud providers (Vercel, Railway, AWS).

---

## 🛠️ Complete Technical Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React 19, JavaScript (ESNext), Tailwind CSS v4, Framer Motion, Lucide Icons |
| **Backend & APIs** | Node.js, Express.js, RESTful Architecture, Clerk Auth SDK, JWT, bcrypt |
| **Databases** | PostgreSQL (Neon Serverless), MongoDB (Mongoose), MySQL, Database Indexing |
| **DevOps & Cloud** | Docker, Docker Compose, Git, Vercel, Railway, Cloudinary Media CDN |
| **AI Integrations** | Groq Llama 3.1, OpenRouter Mistral 7B, Clipdrop API Pipelines |
| **Problem Solving** | 450+ LeetCode Solved, 200+ Active Days, 5★ HackerRank (C++ & SQL) |

---

## 📁 Repository Architecture

```
Freelancing_Portfolio/
├── public/
│   ├── Abhishek_Ranjan_CV.pdf    # Direct downloadable resume
│   ├── favicon.svg               # Vector brand badge
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # Complete semantic sitemap
├── src/
│   ├── assets/                   # Static media assets
│   ├── components/
│   │   ├── cards/                # ProjectCard, ProjectModal, ServiceCard, ProcessStep
│   │   ├── forms/                # ContactForm with auto-fill & scope alert banner
│   │   ├── layout/               # Navbar, MobileMenu, Footer
│   │   └── ui/                   # Button, TechTag, BrandIcons, SectionHeader, ThemeToggle
│   ├── data/                     # Single source-of-truth data models
│   │   ├── engagementModels.js   # Collaboration sprint models
│   │   ├── faq.js                # Client FAQ questions & answers
│   │   ├── navigation.js         # Nav links & actions
│   │   ├── personal.js           # Bio, stats, education, and credentials
│   │   ├── process.js            # 6-step freelance development process
│   │   ├── projects.js           # Deep case study data & specs
│   │   ├── services.js           # Service offerings & deliverables
│   │   └── skills.js             # Categorized skill taxonomy
│   ├── hooks/                    # useTheme, useReducedMotion, useScrollspy
│   ├── sections/                 # Main page sections (Hero, Services, Work, Estimator, Models, FAQ, etc.)
│   ├── utils/                    # Utility helpers (cn class merger)
│   ├── App.jsx                   # Application layout shell
│   ├── index.css                 # Tailwind v4 theme variables & typography
│   └── main.jsx                  # React application entry point
├── index.html                    # SEO meta tags, Open Graph, Twitter Cards, Google Fonts
├── package.json                  # Dependencies & scripts
└── vite.config.js                # Vite build configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18 or higher)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/abhi-2029/Freelancing_Portfolio.git

# 2. Navigate to directory
cd Freelancing_Portfolio

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build & Validation

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Production Deployment

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New..."** → **"Project"**.
3. Import `Freelancing_Portfolio`.
4. Framework Preset: **Vite**.
5. Click **Deploy**.

### Formspree Connection (Optional)
If you wish to receive form submissions via Formspree, create a form at [formspree.io](https://formspree.io) and configure your environment variable:
```env
VITE_FORMSPREE_ID=your_formspree_id_here
```
*(Note: If left unconfigured, the contact form automatically provides a direct 1-click email client fallback).*

---

## 📬 Direct Contact & Inquiries

* **Developer**: Abhishek Ranjan
* **Role**: Full-Stack Software Engineer
* **Email**: [abhisheksingh70224@gmail.com](mailto:abhisheksingh70224@gmail.com)
* **GitHub**: [@abhi-2029](https://github.com/abhi-2029)
* **LinkedIn**: [/in/abhishekranjan20](https://linkedin.com/in/abhishekranjan20)
* **Location**: India *(Available for Worldwide Remote Contracts)*
* **Turnaround Guarantee**: Inquiries answered within **24 hours**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
