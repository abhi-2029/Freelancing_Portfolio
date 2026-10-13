import { services } from "../data/services";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ServiceCard } from "../components/cards/ServiceCard";
import { AnimatedSection } from "../components/ui/AnimatedSection";

export function Services() {
  return (
    <section id="services" className="section-padding bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            label="Services"
            title="What I Can Build For You"
            subtitle="End-to-end development services focused on delivering working software — not just designs or prototypes."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.08}>
              <ServiceCard service={service} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
