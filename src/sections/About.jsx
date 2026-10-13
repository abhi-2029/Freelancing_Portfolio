import { Code2, Target, Zap, GraduationCap } from "lucide-react";
import { personal } from "../data/personal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { cn } from "../utils/cn";

export function About() {
  const highlights = [
    {
      icon: Code2,
      label: "450+",
      description: "Algorithmic problems solved on LeetCode",
    },
    {
      icon: Target,
      label: "200+",
      description: "Active days of consistent coding practice",
    },
    {
      icon: Zap,
      label: "5★",
      description: "HackerRank ratings in C++ and SQL",
    },
    {
      icon: GraduationCap,
      label: "B.Tech",
      description: "Computer Science & Engineering",
    },
  ];

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            label="About"
            title="A Bit About Me"
            subtitle=""
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <AnimatedSection>
            <div className="space-y-4">
              {personal.bio.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-text-secondary leading-relaxed text-[0.95rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Education */}
            <div className="mt-8 p-5 rounded-xl bg-bg border border-border">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                Education
              </h3>
              <p className="text-sm font-semibold text-text-primary">
                {personal.education.degree}
              </p>
              <p className="text-sm text-text-secondary mt-0.5">
                {personal.education.university} — {personal.education.location}
              </p>
              <p className="text-xs text-text-muted mt-1 font-mono">
                {personal.education.period} · CGPA: {personal.education.cgpa}
              </p>
            </div>
          </AnimatedSection>

          {/* Highlights Grid */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={cn(
                      "p-5 rounded-xl",
                      "bg-bg border border-border",
                      "hover:border-accent/20 transition-colors duration-200",
                      "text-center"
                    )}
                  >
                    <Icon className="w-5 h-5 text-accent mx-auto mb-2.5" />
                    <div className="text-2xl font-bold text-text-primary font-mono mb-1">
                      {item.label}
                    </div>
                    <p className="text-xs text-text-secondary leading-snug">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Developer Credentials Card */}
            <div className="mt-5 p-6 rounded-xl bg-bg border border-border flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center font-bold text-xl font-mono shadow-md shadow-accent/20">
                  AR
                </div>
                <div>
                  <h4 className="font-bold text-base text-text-primary">
                    {personal.name}
                  </h4>
                  <p className="text-xs font-mono text-accent">
                    Full-Stack Software Engineer
                  </p>
                  <p className="text-[11px] text-text-muted mt-0.5">
                    India · Available for Worldwide Remote Work
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-text-secondary">Open to Contracts</span>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-accent hover:underline text-xs"
                >
                  {personal.email}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
