import { skillCategories } from "../data/skills";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { cn } from "../utils/cn";

export function TechnicalExpertise() {
  return (
    <section id="skills" className="section-padding bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            label="Technical Expertise"
            title="Technologies I Work With"
            subtitle="The tools and technologies I use to build production-ready applications."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.06}>
              <SkillCategory category={category} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ category }) {
  return (
    <div
      className={cn(
        "p-5 rounded-xl",
        "bg-surface border border-border",
        "hover:border-accent/20 transition-colors duration-200"
      )}
    >
      <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-4">
        {category.title}
      </h3>
      <div className="space-y-2">
        {category.skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2.5 text-sm text-text-secondary"
          >
            <span className="w-1 h-1 rounded-full bg-text-muted shrink-0" />
            {skill}
          </div>
        ))}
      </div>
      {category.note && (
        <p className="mt-3 pt-3 border-t border-border-subtle text-xs text-text-muted italic">
          {category.note}
        </p>
      )}
    </div>
  );
}
