import { processSteps } from "../data/process";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ProcessStep } from "../components/cards/ProcessStep";
import { AnimatedSection } from "../components/ui/AnimatedSection";

export function HowIWork() {
  return (
    <section id="process" className="section-padding bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How I Work"
            subtitle="A structured development process that keeps your project on track — from initial requirement to deployed application."
          />
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          {processSteps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.08}>
              <ProcessStep
                step={step}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
