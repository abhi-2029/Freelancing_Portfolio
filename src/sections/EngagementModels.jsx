import { CheckCircle2, ArrowRight } from "lucide-react";
import { engagementModels } from "../data/engagementModels";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { Button } from "../components/ui/Button";
import { cn } from "../utils/cn";

export function EngagementModels() {
  const handleInquireModel = (pkg) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    const projectType =
      pkg.id === "mvp-sprint"
        ? "SaaS Platform / MVP"
        : pkg.id === "feature-integration"
        ? "REST API / Backend Architecture"
        : "Dedicated Engineering Retainer";

    const formattedMessage = `I am interested in collaborating under the ${pkg.name}.\n\nTarget Timeline: ${pkg.timeline}\nContract Structure: ${pkg.model}\nBest Suited For: ${pkg.idealFor}\n\nIncluded Deliverables I need:\n${pkg.deliverables.map((item) => `• ${item}`).join("\n")}\n\nPlease let me know your earliest availability for a quick scoping conversation.`;

    window.dispatchEvent(
      new CustomEvent("apply-project-scope", {
        detail: {
          projectType,
          modelName: pkg.name,
          timeline: pkg.timeline,
          stacks: pkg.deliverables,
          message: formattedMessage,
        },
      })
    );
  };

  return (
    <section id="engagement" className="section-padding bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            label="Collaboration Models"
            title="How We Can Work Together"
            subtitle="Clear, predictable working arrangements tailored to your product stage — with zero surprise bills or hidden fees."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {engagementModels.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <AnimatedSection key={pkg.id} delay={index * 0.1}>
                <div
                  className={cn(
                    "h-full p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative transition-all duration-300",
                    "bg-surface border",
                    pkg.popular
                      ? "border-accent shadow-xl shadow-accent/10 ring-1 ring-accent/20"
                      : "border-border hover:border-accent/40 hover:shadow-lg"
                  )}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-accent text-white shadow-md whitespace-nowrap">
                        MOST POPULAR FOR STARTUPS
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center text-accent">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-accent uppercase tracking-wider font-semibold block">
                          {pkg.timeline}
                        </span>
                        <h3 className="text-lg font-bold text-text-primary leading-tight">
                          {pkg.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                      {pkg.tagline}
                    </p>

                    {/* Ideal For Note */}
                    <div className="p-3 rounded-lg bg-bg border border-border text-xs mb-6">
                      <span className="text-text-muted font-mono block text-[10px] uppercase mb-0.5">
                        Best suited for
                      </span>
                      <span className="text-text-primary font-medium">
                        {pkg.idealFor}
                      </span>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2.5 mb-8">
                      <span className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold block">
                        Included Deliverables
                      </span>
                      {pkg.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-border">
                    <Button
                      onClick={() => handleInquireModel(pkg)}
                      variant={pkg.popular ? "primary" : "secondary"}
                      size="md"
                      icon={ArrowRight}
                      iconPosition="right"
                      className="w-full cursor-pointer"
                    >
                      Inquire About This Model
                    </Button>
                    <span className="text-[10px] font-mono text-text-muted block text-center mt-2">
                      {pkg.model}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
