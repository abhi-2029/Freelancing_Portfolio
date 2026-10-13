import { useState } from "react";
import {
  Mail,
  ArrowUp,
  ArrowRight,
  FileText,
  CheckCircle2,
  Copy,
  Check,
  Globe,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { personal } from "../../data/personal";
import { navLinks } from "../../data/navigation";
import { Button } from "../ui/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="relative border-t border-border bg-surface overflow-hidden" role="contentinfo">
      {/* Subtle Ambient Background Mesh */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Feature Strip: Final Call to Action */}
        <div className="py-12 md:py-16 border-b border-border">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent-light text-accent border border-accent/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                AVAILABLE FOR FREELANCE & MVP SPRINTS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight tracking-tight">
                Have a project or product idea?{" "}
                <span className="text-accent">Let's build it together.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-text-secondary max-w-xl leading-relaxed">
                Whether you need a full-stack SaaS MVP built from scratch, custom REST APIs, or AI integrations into your existing web app — I deliver production-ready software with 100% code ownership.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 lg:justify-end">
              <Button
                href="#contact"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="cursor-pointer shadow-lg shadow-accent/10"
              >
                Start a Project
              </Button>
              <Button
                href={`mailto:${personal.email}`}
                variant="secondary"
                size="lg"
                icon={Mail}
                className="cursor-pointer"
              >
                Email Abhishek
              </Button>
              <Button
                href="/Abhishek_Ranjan_CV.pdf"
                variant="ghost"
                size="lg"
                icon={FileText}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume ↗
              </Button>
            </div>
          </div>
        </div>

        {/* Main 4-Column Directory */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Engineering Guarantees */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-white font-bold text-sm shadow-md shadow-accent/20">
                AR
              </div>
              <div>
                <span className="font-bold text-base text-text-primary block leading-tight">
                  {personal.name}
                </span>
                <span className="text-[11px] font-mono text-accent">
                  Full-Stack Software Engineer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Engineering modern web applications with React, Node.js, Express, PostgreSQL, MongoDB, and Docker.
            </p>

            <div className="space-y-2 pt-2 border-t border-border/60 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>100% IP & Git Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>14-Day Bug Warranty Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Guaranteed &lt; 24h Response</span>
              </div>
            </div>
          </div>

          {/* Column 2: Engineering Services */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
              <li>
                <a href="#services" className="hover:text-text-primary transition-colors">
                  Full-Stack Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-text-primary transition-colors">
                  SaaS Platform & MVP Sprints
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-text-primary transition-colors">
                  REST API & Backend Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-text-primary transition-colors">
                  AI Multi-Model Integration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-text-primary transition-colors">
                  Database Design & Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-text-primary transition-colors">
                  Docker Cloud Deployments
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Work & Tools */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Featured Work & Tools
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
              <li>
                <a href="#work" className="hover:text-text-primary transition-colors flex items-center justify-between group">
                  <span>Quick.AI (AI SaaS Studio)</span>
                  <span className="text-[10px] font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-text-primary transition-colors flex items-center justify-between group">
                  <span>HospCare (Management Portal)</span>
                  <span className="text-[10px] font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-text-primary transition-colors text-accent font-medium">
                  ⚡ Scope & Stack Calculator
                </a>
              </li>
              <li>
                <a href="#engagement" className="hover:text-text-primary transition-colors">
                  Collaboration Models (Sprint & Retainer)
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-text-primary transition-colors">
                  Why Hire Me Comparison Matrix
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-text-primary transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Channels & Credentials */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Direct Channels
            </h3>

            {/* Email with 1-click copy */}
            <div className="p-3 rounded-xl bg-bg border border-border group flex items-center justify-between">
              <div className="truncate mr-2">
                <span className="text-[10px] font-mono text-text-muted block">Direct Email</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs font-medium text-text-primary group-hover:text-accent transition-colors truncate block"
                >
                  {personal.email}
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors cursor-pointer shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg border border-transparent hover:border-border transition-all"
              >
                <GithubIcon className="w-4 h-4 text-accent" />
                <span className="font-mono">github.com/abhi-2029</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg border border-transparent hover:border-border transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-accent" />
                <span className="font-mono">linkedin.com/in/abhishekranjan20</span>
              </a>
            </div>

            <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-text-muted space-y-1">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>India · Global Remote Contracts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>IST (UTC+5:30) · US & EU Overlap</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Operational Status */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3 text-text-muted">
            <span>© {currentYear} {personal.name}. All rights reserved.</span>
            <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
            <span>Built with React 19, Tailwind CSS & Vite</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Work</span>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-mono font-medium text-text-secondary hover:text-text-primary bg-bg hover:bg-surface-elevated border border-border transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
