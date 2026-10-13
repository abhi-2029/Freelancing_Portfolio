import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ProjectCard } from "../components/cards/ProjectCard";
import { ProjectModal } from "../components/cards/ProjectModal";
import { AnimatedSection } from "../components/ui/AnimatedSection";

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="work" className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <SectionHeader
              label="Selected Work"
              title="Projects I've Built"
              subtitle="Real applications with authentication, REST APIs, database design, and third-party integrations — not tutorials or todo apps."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.12}>
                <ProjectCard
                  project={project}
                  onSelect={setSelectedProject}
                  index={index}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
