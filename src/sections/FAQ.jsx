import { useState } from "react";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { faqs } from "../data/faq";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { cn } from "../utils/cn";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="section-padding bg-surface border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            label="Client FAQ"
            title="Frequently Asked Questions"
            subtitle="Straightforward answers about pricing, intellectual property, timelines, and how we work together."
          />
        </AnimatedSection>

        <div className="space-y-3.5 mt-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div
                  className={cn(
                    "rounded-xl border transition-colors duration-200 overflow-hidden",
                    isOpen
                      ? "bg-bg border-accent/40 shadow-sm"
                      : "bg-bg/60 border-border hover:border-accent/20"
                  )}
                >
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-text-primary">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-accent shrink-0 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Direct question prompt */}
        <AnimatedSection delay={0.3}>
          <div className="mt-8 p-4 rounded-xl bg-bg border border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-light text-accent flex items-center justify-center shrink-0">
                <HelpCircle className="w-4 h-4" />
              </div>
              <p className="text-xs text-text-secondary">
                Have a unique requirement or question not listed here?
              </p>
            </div>
            <a
              href="#contact"
              className="text-xs font-mono font-medium text-accent hover:underline flex items-center gap-1.5 shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              Ask directly via form
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
