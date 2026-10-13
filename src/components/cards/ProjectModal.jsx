import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  X,
  ExternalLink,
  ChevronRight,
  Database,
  Lock,
  Layers,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";
import { TechTag } from "../ui/TechTag";
import { Button } from "../ui/Button";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function ProjectModal({ project, onClose }) {
  const prefersReduced = useReducedMotion();

  // Lock body scroll and handle ESC key
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  const cs = project.caseStudy;
  const isQuickAi = project.id === "quickai";

  const handleBuildSimilar = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }

      const projectType = isQuickAi
        ? "SaaS Platform / MVP"
        : "Full-Stack Web Application";
      const modelName = isQuickAi
        ? "AI SaaS Platform (similar to Quick.AI)"
        : "Management & Portal System (similar to HospCare)";
      const stacks = isQuickAi
        ? [
            "React.js",
            "Node.js & Express",
            "PostgreSQL (Neon)",
            "Clerk Auth",
            "Groq Llama 3.1",
            "Cloudinary CDN",
            "Docker Compose",
          ]
        : [
            "React.js",
            "Node.js & Express",
            "MongoDB (Mongoose)",
            "JWT + bcrypt Auth",
            "Role-Based Access (RBAC)",
            "12+ REST Endpoints",
          ];
      const message = isQuickAi
        ? "I reviewed your Quick.AI project and want to build a similar AI SaaS application with multi-model AI integrations, user credits, Clerk authentication, PostgreSQL database, and Cloudinary media processing."
        : "I reviewed your HospCare project and want to build a similar management portal / web application with role-based authentication (Doctor/Patient/Admin), appointment workflows, and secure REST APIs.";

      window.dispatchEvent(
        new CustomEvent("apply-project-scope", {
          detail: {
            projectType,
            modelName,
            timeline: "2 – 4 Weeks",
            stacks,
            message,
          },
        })
      );
    }, 150);
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={prefersReduced ? {} : { opacity: 0, y: 40, scale: 0.98 }}
        animate={prefersReduced ? {} : { opacity: 1, y: 0, scale: 1 }}
        exit={prefersReduced ? {} : { opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed inset-4 md:inset-8 lg:inset-y-10 lg:inset-x-[12%] z-50 bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} case study`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-border bg-surface-elevated shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                Case Study
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted" />
              <span className="font-mono text-xs text-text-muted">
                {project.category}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-text-primary">
              {project.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-8">
          {/* Quick Technical Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <SpecCard
              icon={Database}
              title="Database"
              value={isQuickAi ? "PostgreSQL (Neon)" : "MongoDB (Mongoose)"}
              subtitle={isQuickAi ? "Relational & Serverless" : "4 Indexed Collections"}
            />
            <SpecCard
              icon={Lock}
              title="Authentication"
              value={isQuickAi ? "Clerk Multi-Session" : "JWT + bcrypt"}
              subtitle={isQuickAi ? "User Profiles & Credits" : "Role-Based Access"}
            />
            <SpecCard
              icon={Cpu}
              title="Architecture"
              value={isQuickAi ? "AI Mesh REST API" : "MERN Architecture"}
              subtitle={isQuickAi ? "Docker Containerized" : "12+ REST Endpoints"}
            />
            <SpecCard
              icon={Layers}
              title="Frontend"
              value="React.js SPA"
              subtitle="Component Driven"
            />
          </div>

          {/* System Architecture Flow Diagram */}
          <div className="p-5 rounded-xl bg-surface-elevated border border-border">
            <h3 className="text-xs font-semibold font-mono uppercase tracking-wider text-accent mb-4">
              System Architecture & Data Flow
            </h3>
            {isQuickAi ? (
              <QuickAiArchitectureFlow />
            ) : (
              <HospCareArchitectureFlow />
            )}
          </div>

          {/* Overview */}
          <CaseStudySection title="Overview">
            <p className="text-text-secondary leading-relaxed">
              {cs.overview}
            </p>
          </CaseStudySection>

          {/* The Problem & The Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <CaseStudySection title="The Problem">
              <p className="text-text-secondary leading-relaxed">
                {cs.problem}
              </p>
            </CaseStudySection>
            <CaseStudySection title="Engineering Solution">
              <p className="text-text-secondary leading-relaxed">
                {cs.solution}
              </p>
            </CaseStudySection>
          </div>

          {/* Architecture Breakdown */}
          <CaseStudySection title="Architectural Breakdown">
            <ul className="space-y-2.5">
              {cs.architecture.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          {/* Key Features */}
          <CaseStudySection title="Implemented Features">
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-elevated border border-border/60 text-sm text-text-secondary"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </CaseStudySection>

          {/* Technology Stack */}
          <CaseStudySection title="Technology Stack">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
          </CaseStudySection>

          {/* Engineering Highlights */}
          <CaseStudySection title="Engineering Highlights">
            <ul className="space-y-3">
              {cs.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>

          {/* Actions Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-border">
            <div className="flex flex-wrap items-center gap-3">
              {project.github && (
                <Button
                  href={project.github}
                  variant="secondary"
                  size="md"
                  icon={GithubIcon}
                >
                  View Code
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  variant="secondary"
                  size="md"
                  icon={ExternalLink}
                >
                  Live Demo
                </Button>
              )}
            </div>

            <Button
              onClick={handleBuildSimilar}
              variant="primary"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="cursor-pointer shadow-md"
            >
              Build an App Like This
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function SpecCard({ icon: Icon, title, value, subtitle }) {
  return (
    <div className="p-3.5 rounded-xl bg-surface-elevated border border-border">
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className="w-4 h-4 text-accent" />
        <span className="text-[11px] font-mono uppercase text-text-muted font-medium">
          {title}
        </span>
      </div>
      <p className="text-xs sm:text-sm font-semibold text-text-primary truncate">
        {value}
      </p>
      <p className="text-[11px] text-text-muted mt-0.5 truncate">
        {subtitle}
      </p>
    </div>
  );
}

function CaseStudySection({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-semibold font-mono uppercase tracking-wider text-accent mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

function QuickAiArchitectureFlow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs font-mono">
      <div className="p-3 rounded-lg bg-bg border border-border flex flex-col justify-between">
        <span className="text-accent font-semibold mb-1">1. Client Layer</span>
        <span className="text-text-primary text-[11px]">React 19 + Tailwind</span>
        <span className="text-[10px] text-text-muted mt-1">Responsive tools UI & prompt console</span>
      </div>
      <div className="p-3 rounded-lg bg-bg border border-border flex flex-col justify-between">
        <span className="text-accent font-semibold mb-1">2. Gateway & Auth</span>
        <span className="text-text-primary text-[11px]">Clerk + Express.js</span>
        <span className="text-[10px] text-text-muted mt-1">Multi-session tokens & credit verification</span>
      </div>
      <div className="p-3 rounded-lg bg-bg border border-border flex flex-col justify-between">
        <span className="text-accent font-semibold mb-1">3. AI Service Mesh</span>
        <span className="text-text-primary text-[11px]">Groq, OpenRouter, Clipdrop</span>
        <span className="text-[10px] text-text-muted mt-1">Llama 3.1 & Mistral 7B orchestration</span>
      </div>
      <div className="p-3 rounded-lg bg-bg border border-border flex flex-col justify-between">
        <span className="text-accent font-semibold mb-1">4. Data & Media CDN</span>
        <span className="text-text-primary text-[11px]">Neon PostgreSQL + Cloudinary</span>
        <span className="text-[10px] text-text-muted mt-1">Generation history & asset hosting</span>
      </div>
    </div>
  );
}

function HospCareArchitectureFlow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs font-mono">
      <div className="p-3 rounded-lg bg-bg border border-border flex flex-col justify-between">
        <span className="text-accent font-semibold mb-1">1. Frontend Layer</span>
        <span className="text-text-primary text-[11px]">React SPA</span>
        <span className="text-[10px] text-text-muted mt-1">Role-based dashboard & scheduling views</span>
      </div>
      <div className="p-3 rounded-lg bg-bg border border-border flex flex-col justify-between">
        <span className="text-accent font-semibold mb-1">2. Security & Auth</span>
        <span className="text-text-primary text-[11px]">JWT + bcrypt Hash</span>
        <span className="text-[10px] text-text-muted mt-1">Authorization middleware per role</span>
      </div>
      <div className="p-3 rounded-lg bg-bg border border-border flex flex-col justify-between">
        <span className="text-accent font-semibold mb-1">3. REST API Layer</span>
        <span className="text-text-primary text-[11px]">Node.js + Express.js</span>
        <span className="text-[10px] text-text-muted mt-1">12+ endpoints with input validation</span>
      </div>
      <div className="p-3 rounded-lg bg-bg border border-border flex flex-col justify-between">
        <span className="text-accent font-semibold mb-1">4. Database Layer</span>
        <span className="text-text-primary text-[11px]">MongoDB (Mongoose)</span>
        <span className="text-[10px] text-text-muted mt-1">4 Indexed collections for rapid query</span>
      </div>
    </div>
  );
}
