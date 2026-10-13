import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { AnimatedSection } from "../components/ui/AnimatedSection";

export function FreelanceCTA() {
  return (
    <section className="section-padding bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden p-8 md:p-12 lg:p-16 text-center bg-surface border border-border">
            {/* Subtle gradient accent */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, var(--color-accent), transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-4">
                Have a project in mind?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Whether you need a new web application, a SaaS platform, a
                REST API, or AI functionality integrated into your product
                — let's talk about how I can help.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button
                  href="#contact"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Start a Project
                </Button>
                <Button
                  href={`mailto:abhisheksingh70224@gmail.com`}
                  variant="secondary"
                  size="lg"
                >
                  Email Me Directly
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
