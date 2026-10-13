import { cn } from "../../utils/cn";

export function ProcessStep({ step, index, isLast }) {
  const Icon = step.icon;

  return (
    <div className="relative flex gap-5">
      {/* Vertical line connector (hidden for last item) */}
      {!isLast && (
        <div
          className="absolute left-[1.375rem] top-14 bottom-0 w-px bg-border"
          aria-hidden="true"
        />
      )}

      {/* Step number circle */}
      <div className="shrink-0">
        <div
          className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center",
            "bg-accent-light border border-accent/10",
            "text-accent font-mono text-sm font-bold"
          )}
        >
          {step.number}
        </div>
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex items-center gap-2 mb-1.5">
          <h3 className="text-base font-semibold text-text-primary">
            {step.title}
          </h3>
          <Icon className="w-4 h-4 text-text-muted" />
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
