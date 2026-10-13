import { Sun, Moon } from "lucide-react";
import { cn } from "../../utils/cn";

export function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-lg",
        "text-text-secondary hover:text-text-primary",
        "hover:bg-surface-elevated",
        "transition-colors duration-200",
        "cursor-pointer"
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
