import { useState } from "react";
import {
  Calculator,
  Check,
  ArrowRight,
  Clock,
  Layers,
  ShieldCheck,
  Sparkles,
  Server,
  Database,
  Cpu,
} from "lucide-react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { Button } from "../components/ui/Button";
import { cn } from "../utils/cn";

const projectTypes = [
  {
    id: "saas",
    name: "Full-Stack SaaS Platform / MVP",
    formType: "SaaS Platform / MVP",
    baseWeeks: 3,
    description: "Multi-tenant SaaS with user management, credits/billing, and responsive studio.",
    recommendedStack: "React 19 + Node.js + PostgreSQL + Clerk + Docker",
  },
  {
    id: "webapp",
    name: "Custom Web Application",
    formType: "Full-Stack Web Application",
    baseWeeks: 3,
    description: "Complete full-stack business web app with custom workflow and portal.",
    recommendedStack: "React + Node.js + Express + MongoDB + JWT",
  },
  {
    id: "backend",
    name: "REST API & Backend Architecture",
    formType: "REST API / Backend Architecture",
    baseWeeks: 2,
    description: "Robust REST API backend with authentication, database models, and documentation.",
    recommendedStack: "Node.js + Express + PostgreSQL / MongoDB + JWT",
  },
  {
    id: "ai",
    name: "AI-Powered SaaS & API Integration",
    formType: "AI API Integration",
    baseWeeks: 2,
    description: "Multi-provider AI application (LLMs, image generation, content pipeline).",
    recommendedStack: "Groq Llama 3.1 + OpenRouter + Express + Cloudinary",
  },
  {
    id: "dashboard",
    name: "Internal Business Dashboard & Portal",
    formType: "Internal Tool / Dashboard",
    baseWeeks: 2,
    description: "Role-based operations dashboard, analytics views, and database admin.",
    recommendedStack: "React + Express + PostgreSQL + Role Permissions",
  },
];

const stackCategories = [
  {
    id: "frontend",
    title: "1. Frontend & UI Stack",
    icon: Layers,
    items: [
      { id: "fe_react", label: "React.js (SPA / Vite Component Architecture)", days: 0 },
      { id: "fe_tailwind", label: "Tailwind CSS & Modern Responsive Design", days: 1 },
      { id: "fe_charts", label: "Interactive Analytics & Data Visualizations", days: 2 },
    ],
  },
  {
    id: "backend",
    title: "2. Backend & Security Stack",
    icon: Server,
    items: [
      { id: "be_node", label: "Node.js & Express.js REST API Architecture", days: 0 },
      { id: "auth_clerk", label: "Clerk Multi-Session Auth & User Profiles", days: 2 },
      { id: "auth_jwt", label: "JWT + bcrypt Role-Based Authorization (RBAC)", days: 2 },
      { id: "be_val", label: "Secure Input Validation & Error Handling", days: 1 },
    ],
  },
  {
    id: "database",
    title: "3. Database & Media Storage Stack",
    icon: Database,
    items: [
      { id: "db_postgres", label: "PostgreSQL (Neon Relational SQL Database)", days: 2 },
      { id: "db_mongo", label: "MongoDB (Mongoose NoSQL Document Store)", days: 2 },
      { id: "media_cdn", label: "Cloudinary Media CDN & Asset Uploads", days: 2 },
    ],
  },
  {
    id: "devops_ai",
    title: "4. AI Integration & Cloud DevOps",
    icon: Cpu,
    items: [
      { id: "ai_groq", label: "Groq Llama 3.1 & OpenRouter Multi-LLM APIs", days: 3 },
      { id: "devops_docker", label: "Docker & Docker Compose Containerization", days: 2 },
      { id: "devops_cloud", label: "Production Cloud Deployment (Vercel, Railway, AWS)", days: 2 },
      { id: "warranty", label: "14-Day Post-Launch Bug Warranty Included", days: 0 },
    ],
  },
];

export function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedStacks, setSelectedStacks] = useState([
    "fe_react",
    "fe_tailwind",
    "be_node",
    "auth_clerk",
    "db_postgres",
    "devops_docker",
    "devops_cloud",
    "warranty",
  ]);
  const [velocity, setVelocity] = useState("sprint"); // sprint or standard

  const toggleStack = (id) => {
    setSelectedStacks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Find all all selected items
  const allItems = stackCategories.flatMap((cat) => cat.items);
  const activeItems = allItems.filter((item) => selectedStacks.includes(item.id));

  // Calculate estimated timeline
  const additionalDays = activeItems.reduce((acc, item) => acc + item.days, 0);

  const totalWeeks = Math.max(
    2,
    Math.round((selectedType.baseWeeks + additionalDays / 7) * 10) / 10
  );

  const displayTimeline =
    velocity === "sprint"
      ? `${Math.max(2, Math.floor(totalWeeks))} – ${Math.ceil(totalWeeks + 1)} Weeks`
      : `${Math.ceil(totalWeeks)} – ${Math.ceil(totalWeeks + 2)} Weeks`;

  const handleApplyToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    const selectedStackLabels = activeItems.map((item) => item.label);

    const formattedMessage = `I am looking to build a ${selectedType.name}.\n\nPreferred Tech Stacks & Modules:\n${selectedStackLabels
      .map((label) => `• ${label}`)
      .join("\n")}\n\nDelivery Velocity: ${
      velocity === "sprint" ? "Fast-Track MVP Sprint" : "Standard Iterative Pace"
    } (~${displayTimeline})\nRecommended Architecture: ${selectedType.recommendedStack}\n\nIncluded Guarantees: 100% IP & Git Handover, Dockerized Build, 14-Day Bug Warranty.`;

    window.dispatchEvent(
      new CustomEvent("apply-project-scope", {
        detail: {
          projectType: selectedType.formType,
          modelName: selectedType.name,
          timeline: displayTimeline,
          stacks: selectedStackLabels,
          message: formattedMessage,
        },
      })
    );
  };

  return (
    <section id="estimator" className="section-padding bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            label="Interactive Scope & Tech Configurator"
            title="Scope, Tech Stack & Timeline Estimator"
            subtitle="Select the exact tech stacks, databases, and capabilities you need for your application to view instant delivery timeline and auto-populate your inquiry."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8 lg:gap-10 items-start mt-10">
          {/* Left Column: Stack & Scope Selection */}
          <AnimatedSection>
            <div className="p-6 sm:p-8 rounded-2xl bg-bg border border-border shadow-sm space-y-7">
              {/* 1. Project Type Selector */}
              <div>
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-accent block mb-3">
                  1. Select Application Scope
                </label>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={cn(
                        "p-3 rounded-xl border text-left text-xs font-medium transition-all duration-150 cursor-pointer",
                        selectedType.id === type.id
                          ? "bg-accent text-white border-accent shadow-sm"
                          : "bg-surface border-border text-text-secondary hover:text-text-primary hover:border-accent/40"
                      )}
                    >
                      <span className="block font-bold">{type.name}</span>
                      <span
                        className={cn(
                          "text-[10px] block mt-0.5 font-mono",
                          selectedType.id === type.id
                            ? "text-white/80"
                            : "text-text-muted"
                        )}
                      >
                        Base timeline: ~{type.baseWeeks} weeks
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Categorized Tech Stacks */}
              <div className="space-y-6 pt-2 border-t border-border/70">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-semibold uppercase tracking-wider text-accent block">
                    2. Select Expected Tech Stacks & Modules
                  </label>
                  <span className="text-[11px] font-mono text-text-muted">
                    {selectedStacks.length} stacks selected
                  </span>
                </div>

                {stackCategories.map((cat) => {
                  const CategoryIcon = cat.icon;
                  return (
                    <div key={cat.id} className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                        <CategoryIcon className="w-3.5 h-3.5 text-accent" />
                        <span>{cat.title}</span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-2">
                        {cat.items.map((item) => {
                          const isChecked = selectedStacks.includes(item.id);
                          return (
                            <button
                              key={item.id}
                              onClick={() => toggleStack(item.id)}
                              className={cn(
                                "p-2.5 rounded-lg border text-left text-xs flex items-center justify-between transition-colors cursor-pointer",
                                isChecked
                                  ? "bg-accent-light text-accent border-accent/40 font-medium"
                                  : "bg-surface border-border text-text-secondary hover:text-text-primary hover:border-accent/30"
                              )}
                            >
                              <span className="truncate pr-2">{item.label}</span>
                              <div
                                className={cn(
                                  "w-4 h-4 rounded flex items-center justify-center shrink-0 border",
                                  isChecked
                                    ? "bg-accent border-accent text-white"
                                    : "border-border bg-bg"
                                )}
                              >
                                {isChecked && <Check className="w-3 h-3" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 3. Delivery Velocity */}
              <div className="pt-2 border-t border-border/70">
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-accent block mb-3">
                  3. Delivery Velocity
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setVelocity("sprint")}
                    className={cn(
                      "p-3 rounded-xl border text-xs font-medium text-center cursor-pointer transition-colors",
                      velocity === "sprint"
                        ? "bg-accent text-white border-accent"
                        : "bg-surface border-border text-text-secondary hover:text-text-primary"
                    )}
                  >
                    <span className="font-bold block">Fast-Track MVP Sprint</span>
                    <span className="text-[10px] opacity-80 font-mono block mt-0.5">
                      High-velocity priority delivery
                    </span>
                  </button>
                  <button
                    onClick={() => setVelocity("standard")}
                    className={cn(
                      "p-3 rounded-xl border text-xs font-medium text-center cursor-pointer transition-colors",
                      velocity === "standard"
                        ? "bg-accent text-white border-accent"
                        : "bg-surface border-border text-text-secondary hover:text-text-primary"
                    )}
                  >
                    <span className="font-bold block">Standard Phased Pace</span>
                    <span className="text-[10px] opacity-80 font-mono block mt-0.5">
                      Weekly milestone reviews
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Real-Time Summary & Apply Button */}
          <AnimatedSection delay={0.12}>
            <div className="p-6 sm:p-7 rounded-2xl bg-surface border-2 border-accent/30 shadow-xl shadow-accent/5 sticky top-24 space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-border">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-accent" />
                  <h3 className="font-bold text-base text-text-primary">
                    Project Estimate
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-500">
                  Fixed Milestone
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-text-muted block">
                    Estimated Delivery Window
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-2xl font-bold font-mono text-text-primary">
                      {displayTimeline}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <span className="text-xs font-mono text-text-muted block mb-1">
                    Configured Architecture
                  </span>
                  <span className="text-xs font-semibold text-text-primary block">
                    {selectedType.recommendedStack}
                  </span>
                </div>

                {/* Selected Stack Badges */}
                <div className="pt-3 border-t border-border">
                  <span className="text-xs font-mono text-text-muted block mb-2">
                    Selected Stacks & Modules ({activeItems.length})
                  </span>
                  <div className="flex flex-wrap gap-1 max-h-40 overflow-y-auto pr-1">
                    {activeItems.map((item) => (
                      <span
                        key={item.id}
                        className="px-2 py-0.5 rounded bg-bg border border-border text-[10px] font-mono text-text-secondary"
                      >
                        {item.label.split("(")[0].trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Guaranteed Deliverables */}
                <div className="pt-3 border-t border-border">
                  <span className="text-xs font-mono text-text-muted block mb-1.5">
                    Included Guarantees
                  </span>
                  <ul className="space-y-1.5 text-xs text-text-secondary">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0" /> Full source code & 100% IP handover
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0" /> Docker container & deployment scripts
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0" /> 14-day post-launch bug warranty
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border">
                <Button
                  onClick={handleApplyToContact}
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full cursor-pointer shadow-md"
                >
                  Apply Scope to Contact Form
                </Button>
                <p className="text-center text-[10px] font-mono text-text-muted mt-2">
                  ⚡ Auto-fills your inquiry • You won't need to write anything
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
