import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, ctaLink } from "../../data/navigation";
import { personal } from "../../data/personal";
import { useScrollspy } from "../../hooks/useScrollspy";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "../../utils/cn";

export function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
  const activeId = useScrollspy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              isScrolled ? "h-16" : "h-20"
            )}
          >
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 group"
              aria-label="Home"
            >
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm transition-transform duration-200 group-hover:scale-105">
                AR
              </div>
              <span className="font-semibold text-text-primary hidden sm:block">
                {personal.name.split(" ")[0]}
                <span className="text-accent">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-accent bg-accent-light"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="/Abhishek_Ranjan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors border border-border"
              >
                Resume ↗
              </a>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <Button href={ctaLink.href} size="sm">
                {ctaLink.label}
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors cursor-pointer"
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeId={activeId}
      />
    </>
  );
}
