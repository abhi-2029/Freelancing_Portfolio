import {
  Code2,
  Target,
  Zap,
  GraduationCap,
  Award,
  CheckCircle2,
  Cpu,
  Mail,
} from "lucide-react";
import { personal } from "../data/personal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { cn } from "../utils/cn";

export function About() {
  const highlights = [
    {
      icon: Code2,
      label: "450+",
      sublabel: "Problems Solved",
      description: "Data structures, algorithms & dynamic programming on LeetCode",
    },
    {
      icon: Target,
      label: "200+",
      sublabel: "Active Days",
      description: "Consistent coding practice and problem-solving discipline",
    },
    {
      icon: Zap,
      label: "5★",
      sublabel: "HackerRank Rated",
      description: "Top-tier proficiency ratings in both C++ and SQL queries",
    },
    {
      icon: GraduationCap,
      label: "B.Tech",
      sublabel: "Computer Science",
      description: "Formal engineering education at Lovely Professional University",
    },
  ];

  const coreFoundations = [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Operating Systems & Networking",
    "System Design & RESTful APIs",
  ];

  const certifications = [
    { name: "GfG 160 — 160 Days of Problem Solving", date: "May 2025" },
    { name: "Data Structures & Algorithms", date: "Jul 2024" },
    { name: "Programming in C++: Hands-on", date: "Feb 2024" },
  ];

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            label="Engineering Background"
            title="About Me & Delivery Philosophy"
            subtitle="Bridging strong computer science fundamentals, full-stack architecture, and disciplined problem solving to ship reliable client software."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start mt-8">
          {/* Left Column — Detailed Bio, Foundation & Certifications */}
          <AnimatedSection>
            <div className="space-y-6">
              {/* Narrative Paragraphs */}
              <div className="space-y-4 text-text-secondary leading-relaxed text-[0.95rem]">
                <p>
                  I'm a <strong className="text-text-primary">Full-Stack Software Engineer</strong> with a formal background in Computer Science & Engineering from Lovely Professional University. I specialize in building complete, production-ready web applications using modern web technologies—including <strong className="text-text-primary">React, Node.js, Express, PostgreSQL, MongoDB, and Docker</strong>.
                </p>
                <p>
                  My engineering journey is defined by end-to-end execution. I've engineered multi-tenant SaaS platforms integrating multi-provider AI APIs with Clerk authentication, as well as complex healthcare management systems featuring role-based authorization (Doctor/Patient/Admin) and indexed databases. Every application I deliver follows clean architecture patterns, secure authentication, and robust REST APIs.
                </p>
                <p>
                  Beyond frameworks, I have a deep algorithmic foundation with <strong className="text-text-primary">450+ solved LeetCode problems</strong> across 200+ active practice days. This foundation allows me to write code that isn't just functional, but optimized for speed, low latency, and efficient database indexing.
                </p>
              </div>

              {/* Formal Education Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-bg border border-border space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-text-primary">
                      {personal.education.degree}
                    </h3>
                    <p className="text-xs text-text-secondary">
                      {personal.education.university} — {personal.education.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-text-muted pt-2 border-t border-border/70">
                  <span>Duration: {personal.education.period}</span>
                  <span className="font-semibold text-accent">CGPA: {personal.education.cgpa}</span>
                </div>

                {/* Core CS Foundations */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block mb-2 font-medium">
                    Core CS Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {coreFoundations.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-surface border border-border text-[11px] font-mono text-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Technical Certifications */}
              <div className="p-5 rounded-2xl bg-bg border border-border space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                    Verified Problem-Solving Credentials
                  </h4>
                </div>
                <div className="grid sm:grid-cols-3 gap-2.5 pt-1">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-surface border border-border flex flex-col justify-between"
                    >
                      <span className="text-xs font-semibold text-text-primary leading-snug">
                        {cert.name}
                      </span>
                      <span className="text-[10px] font-mono text-text-muted mt-2">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column — 4 Stat Cards & Client Guarantees Box */}
          <AnimatedSection delay={0.15}>
            <div className="space-y-6">
              {/* 4 Core Stat Cards */}
              <div className="grid grid-cols-2 gap-3.5">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={cn(
                        "p-5 rounded-2xl",
                        "bg-bg border border-border",
                        "hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-200",
                        "text-left flex flex-col justify-between"
                      )}
                    >
                      <div className="w-9 h-9 rounded-xl bg-accent-light flex items-center justify-center text-accent mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-text-primary font-mono tracking-tight">
                          {item.label}
                        </div>
                        <div className="text-xs font-semibold text-accent font-mono mt-0.5">
                          {item.sublabel}
                        </div>
                        <p className="text-[11px] text-text-secondary leading-snug mt-1.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Engineering Standards Checklist */}
              <div className="p-6 rounded-2xl bg-bg border border-border space-y-3.5">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-accent" />
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                    How I Deliver Client Software
                  </h4>
                </div>

                <ul className="space-y-2.5 text-xs text-text-secondary">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-text-primary">Direct Engineer Accountability:</strong> You work directly with me — no account managers or outsourced junior developers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-text-primary">Clean, Maintainable Code:</strong> Built to standard conventions with clean Git commits, environment variables, and zero technical debt.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-text-primary">Containerized & Documented:</strong> Shipped with Docker setup, API endpoint documentation, and clear deployment instructions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-text-primary">Milestone-Protected:</strong> Staging builds are provided for your review prior to milestone sign-offs.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Developer Credentials & Contract Card */}
              <div className="p-6 rounded-2xl bg-bg border border-accent/30 shadow-md flex flex-col justify-between">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center font-bold text-lg font-mono shadow-md shadow-accent/20">
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
                      India · Available for Worldwide Remote Contracts
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-text-secondary">Open to New Contracts</span>
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-accent hover:underline flex items-center gap-1 font-medium"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {personal.email}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
