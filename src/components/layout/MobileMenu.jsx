import { motion, AnimatePresence } from "framer-motion";
import { navLinks, ctaLink } from "../../data/navigation";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function MobileMenu({ isOpen, onClose, activeId }) {
  const prefersReduced = useReducedMotion();

  const menuVariants = prefersReduced
    ? { closed: {}, open: {} }
    : {
        closed: { opacity: 0, y: -8 },
        open: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.2, ease: "easeOut" },
        },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-16 left-4 right-4 z-50 md:hidden bg-surface border border-border rounded-xl shadow-2xl p-4"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150",
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

            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2.5">
              <a
                href="/Abhishek_Ranjan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full py-2.5 rounded-lg text-xs font-mono font-medium text-center text-text-primary bg-surface-elevated border border-border hover:border-accent transition-colors"
              >
                Download Resume (PDF) ↗
              </a>
              <Button
                href={ctaLink.href}
                size="lg"
                className="w-full"
                onClick={onClose}
              >
                {ctaLink.label}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
