import { cn } from "../../utils/cn";

export function SectionHeader({ label, title, subtitle, align = "center", className }) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {label && (
        <span className="inline-block font-mono text-xs font-medium uppercase tracking-widest text-accent mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
