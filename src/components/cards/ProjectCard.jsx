import { ExternalLink, ShieldCheck, Sparkles, Activity, Clock, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";
import { TechTag } from "../ui/TechTag";
import { cn } from "../../utils/cn";

export function ProjectCard({ project, onSelect, index }) {
  const isQuickAi = project.id === "quickai";

  const handleDirectInquire = () => {
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
          "React 19",
          "Node.js & Express",
          "PostgreSQL (Neon)",
          "Clerk Auth",
          "Groq Llama 3.1",
          "Cloudinary CDN",
          "Docker Compose",
        ]
      : [
          "React SPA",
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
  };

  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "bg-surface border border-border",
        "hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5",
        "transition-all duration-300 ease-out flex flex-col justify-between"
      )}
    >
      <div>
        {/* Project Interactive Preview Mockup Header */}
        <div className="relative h-60 sm:h-64 bg-surface-elevated border-b border-border overflow-hidden select-none">
          {project.id === "quickai" ? (
            <QuickAiPreview />
          ) : (
            <HospCarePreview />
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title Row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[11px] font-semibold text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-text-muted">•</span>
                <span className="text-xs font-mono text-text-muted">
                  {project.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-200">
                {project.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors"
                  aria-label={`View ${project.name} on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent-light transition-colors"
                  aria-label={`View ${project.name} live demo`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            {project.tagline}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 grid grid-cols-2 gap-2.5">
        <button
          onClick={() => onSelect(project)}
          className="py-2.5 px-3 rounded-lg text-xs font-semibold text-text-primary bg-surface-elevated hover:bg-surface border border-border hover:border-accent/30 transition-all duration-200 cursor-pointer text-center"
        >
          View Case Study
        </button>
        <button
          onClick={handleDirectInquire}
          className="py-2.5 px-3 rounded-lg text-xs font-semibold text-accent bg-accent-light hover:bg-accent hover:text-white border border-accent/20 hover:border-accent transition-all duration-200 cursor-pointer text-center truncate"
        >
          Inquire Similar →
        </button>
      </div>
    </div>
  );
}

/**
 * High-fidelity preview mockup for Quick.AI
 */
function QuickAiPreview() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-xs text-text-secondary">
      {/* Browser Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-border/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[11px] text-text-muted truncate">quickai.app/studio</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] bg-accent-light text-accent px-2 py-0.5 rounded-full font-medium">
          <Sparkles className="w-3 h-3" />
          <span>250 Credits</span>
        </div>
      </div>

      {/* Main SaaS Dashboard UI Preview */}
      <div className="my-auto space-y-2.5 py-2">
        {/* Active Model / Tool selector tabs */}
        <div className="flex items-center gap-2 text-[11px] overflow-hidden">
          <span className="px-2 py-1 rounded bg-accent text-white font-medium">
            Llama 3.1 70B (Groq)
          </span>
          <span className="px-2 py-1 rounded bg-bg text-text-muted border border-border">
            Mistral 7B
          </span>
          <span className="px-2 py-1 rounded bg-bg text-text-muted border border-border">
            Clipdrop
          </span>
        </div>

        {/* Prompt Input Preview */}
        <div className="p-2.5 rounded-lg bg-bg border border-border text-[11px] text-text-secondary">
          <span className="text-text-muted">&gt; </span>
          <span className="text-text-primary">Generate high-converting SaaS landing copy & media assets...</span>
        </div>

        {/* Output & Pipeline Status */}
        <div className="flex items-center justify-between text-[10px] text-text-muted bg-surface/50 p-2 rounded-lg border border-border/60">
          <span className="flex items-center gap-1 text-emerald-500 font-medium">
            <CheckCircle2 className="w-3 h-3" /> 200 OK (1.2s)
          </span>
          <span>Cloudinary Media CDN</span>
          <span className="text-accent font-medium">Dockerized</span>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[10px] text-text-muted">
        <span>Auth: Clerk Multi-Session</span>
        <span>DB: PostgreSQL (Neon)</span>
      </div>
    </div>
  );
}

/**
 * High-fidelity preview mockup for HospCare
 */
function HospCarePreview() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-xs text-text-secondary">
      {/* Browser Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-border/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[11px] text-text-muted truncate">hospcare.internal/portal</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-medium">
          <Activity className="w-3 h-3" />
          <span>System Online</span>
        </div>
      </div>

      {/* Patient & Doctor Appointment Queue Mockup */}
      <div className="my-auto space-y-2 py-2">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-text-primary font-semibold flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-accent" />
            Today's Schedule
          </span>
          <span className="text-[10px] text-text-muted bg-bg px-2 py-0.5 rounded border border-border">
            Role: DOCTOR_ADMIN
          </span>
        </div>

        {/* Appointment Row 1 */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-bg border border-border text-[11px]">
          <div>
            <span className="text-text-primary font-medium">Rahul Verma</span>
            <span className="text-text-muted text-[10px] ml-2">Cardiology</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold">
            Confirmed 10:30 AM
          </span>
        </div>

        {/* Appointment Row 2 */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-bg border border-border text-[11px]">
          <div>
            <span className="text-text-primary font-medium">Ananya Sen</span>
            <span className="text-text-muted text-[10px] ml-2">OPD / Records</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-semibold">
            In Review 11:15 AM
          </span>
        </div>
      </div>

      {/* Security & Database Status Footer */}
      <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[10px] text-text-muted">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-accent" /> JWT + bcrypt
        </span>
        <span>MongoDB: 4 Indexed Collections</span>
      </div>
    </div>
  );
}
