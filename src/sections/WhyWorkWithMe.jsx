import { Layers, Shield, Cpu, Brain, Award, Lock, FileCheck, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { cn } from "../utils/cn";

const reasons = [
  {
    icon: Layers,
    title: "End-to-End Ownership",
    description:
      "I handle the frontend, backend, database modeling, and deployment. One accountable engineer from start to finish — avoiding the friction of coordinating multiple disjointed freelancers.",
  },
  {
    icon: Shield,
    title: "Security-First Architecture",
    description:
      "JWT authentication, bcrypt hashing, role-based authorization, and input sanitization are engineered in from day one, not patched on as an afterthought.",
  },
  {
    icon: Cpu,
    title: "Battle-Tested Modern Stack",
    description:
      "React 19, Node.js, Express, PostgreSQL, MongoDB, Docker Compose — standard open-source tools trusted by top startups to ship fast and scale reliably.",
  },
  {
    icon: Brain,
    title: "AI Integration Expertise",
    description:
      "Hands-on experience orchestrating multi-provider AI APIs (Groq, OpenRouter, Clipdrop, LLMs) with token rate limiting, media CDNs, and error fallbacks.",
  },
];

const guarantees = [
  {
    icon: Lock,
    title: "100% Code & IP Ownership",
    description: "Complete intellectual property and repository rights transfer directly to you upon milestone approval.",
  },
  {
    icon: FileCheck,
    title: "14-Day Post-Launch Warranty",
    description: "Any bugs or edge cases within the agreed scope are resolved promptly at zero additional cost.",
  },
  {
    icon: Award,
    title: "Milestone-Protected Delivery",
    description: "Transparent, deliverable-based milestones. You review working staging builds before releasing payments.",
  },
  {
    icon: CheckCircle2,
    title: "Zero Vendor Lock-In",
    description: "Clean code written to industry standards. Deployed on standard cloud infrastructure (Vercel, Railway, AWS).",
  },
];

export function WhyWorkWithMe() {
  return (
    <section id="why-me" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            label="Why Me"
            title="Why Work With Me"
            subtitle="Concrete, evidence-based capabilities backed by actual code — not empty agency buzzwords."
          />
        </AnimatedSection>

        {/* 4 Core Pillars */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div
                  className={cn(
                    "p-6 rounded-2xl h-full",
                    "bg-bg border border-border",
                    "hover:border-accent/30 transition-all duration-200"
                  )}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Client Guarantees Box */}
        <AnimatedSection delay={0.25}>
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-bg border border-accent/20 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                Client Standards & Guarantees
              </span>
              <span className="w-px h-3 bg-border" />
              <span className="text-xs font-mono text-text-muted">Built for Peace of Mind</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {guarantees.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-text-primary">
                        {item.title}
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
