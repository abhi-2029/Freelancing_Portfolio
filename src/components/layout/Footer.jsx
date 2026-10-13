import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { personal } from "../../data/personal";
import { navLinks } from "../../data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-surface" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main footer */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">
                AR
              </div>
              <span className="font-semibold text-text-primary">
                {personal.name.split(" ")[0]}
                <span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Full-Stack Developer building modern web applications with React,
              Node.js, and everything in between.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                >
                  <Mail className="w-4 h-4" />
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex items-center justify-between">
          <p className="text-xs text-text-muted">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
