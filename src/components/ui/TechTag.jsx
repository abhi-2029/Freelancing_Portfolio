import { cn } from "../../utils/cn";

export function TechTag({ name, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md",
        "font-mono text-xs font-medium",
        "bg-accent-light text-accent border border-accent/10",
        "transition-colors duration-200",
        className
      )}
    >
      {name}
    </span>
  );
}
