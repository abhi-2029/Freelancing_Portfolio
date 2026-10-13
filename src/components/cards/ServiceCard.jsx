import { TechTag } from "../ui/TechTag";
import { cn } from "../../utils/cn";

export function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <div
      className={cn(
        "group relative p-6 md:p-8 rounded-xl",
        "bg-surface border border-border",
        "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
        "transition-all duration-300 ease-out"
      )}
    >
      {/* Icon */}
      <div className="w-11 h-11 rounded-lg bg-accent-light flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-5 h-5 text-accent" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-text-primary mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {service.technologies.map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>

      {/* Deliverables */}
      {service.deliverables && (
        <div className="pt-3 border-t border-border">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent block mb-1">
            Deliverables
          </span>
          <p className="text-xs text-text-secondary leading-relaxed">
            {service.deliverables}
          </p>
        </div>
      )}
    </div>
  );
}
