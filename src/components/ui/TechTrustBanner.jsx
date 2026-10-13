import { cn } from "../../utils/cn";

const technologies = [
  { name: "React 19", role: "Frontend UI" },
  { name: "Node.js & Express", role: "REST Backend" },
  { name: "Python & Flask", role: "Backend Services" },
  { name: "Java", role: "Enterprise OOP" },
  { name: "PostgreSQL", role: "Relational DB" },
  { name: "MongoDB", role: "Document DB" },
  { name: "MySQL", role: "Relational DB" },
  { name: "Docker", role: "Containerization" },
  { name: "Tailwind & Bootstrap", role: "Responsive UI" },
  { name: "Clerk & JWT", role: "Authentication" },
  { name: "Groq & Llama", role: "AI Inference" },
  { name: "Git & Linux", role: "DevOps & Tools" },
];

export function TechTrustBanner() {
  return (
    <div className="border-y border-border bg-surface/50 backdrop-blur-sm py-8 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center font-mono text-[11px] uppercase tracking-widest text-text-muted mb-5">
          Engineered with Modern, Production-Tested Technologies & Cloud Services
        </p>

        {/* Responsive Grid of Tech Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={cn(
                "p-3 rounded-xl bg-bg border border-border/80 flex flex-col items-center justify-center text-center",
                "hover:border-accent/40 hover:bg-surface transition-all duration-200 group"
              )}
            >
              <span className="font-semibold text-xs sm:text-sm text-text-primary group-hover:text-accent transition-colors">
                {tech.name}
              </span>
              <span className="font-mono text-[10px] text-text-muted mt-0.5">
                {tech.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
