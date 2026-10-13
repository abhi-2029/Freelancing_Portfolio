import { useState } from "react";
import { Mail, MapPin, Check, Copy, Clock, ShieldCheck, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";
import { personal } from "../data/personal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ContactForm } from "../components/forms/ContactForm";
import { AnimatedSection } from "../components/ui/AnimatedSection";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            label="Inquiries & Contracts"
            title="Let's Build Your Project"
            subtitle="Have an application requirement, SaaS idea, or backend system to build? Drop your project details below or reach out directly."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection>
            <div className="p-6 md:p-8 rounded-2xl bg-bg border border-border shadow-sm">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-5">
                Send A Project Brief
              </h3>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Contact Details & Client Info */}
          <AnimatedSection delay={0.12}>
            <div className="space-y-6">
              {/* Direct channels */}
              <div>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                  Direct Channels
                </h3>
                <div className="space-y-3">
                  {/* Email with 1-click copy */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-bg border border-border group">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono text-text-muted">Direct Email</p>
                        <a
                          href={`mailto:${personal.email}`}
                          className="text-xs sm:text-sm font-medium text-text-primary group-hover:text-accent transition-colors"
                        >
                          {personal.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={copyEmail}
                      className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors cursor-pointer text-xs flex items-center gap-1 font-mono"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500 text-[11px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <ContactLink
                    icon={GithubIcon}
                    label="GitHub Profile"
                    value="github.com/abhi-2029"
                    href={personal.github}
                    external
                  />
                  <ContactLink
                    icon={LinkedinIcon}
                    label="LinkedIn Profile"
                    value="linkedin.com/in/abhishekranjan20"
                    href={personal.linkedin}
                    external
                  />
                  <ContactLink
                    icon={MapPin}
                    label="Location"
                    value="India (Open to Global Remote Contracts)"
                  />
                </div>
              </div>

              {/* Freelance Engagement & Collaboration Standards */}
              <div className="p-5 rounded-xl bg-bg border border-border space-y-3.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-text-primary font-mono">
                    Currently Accepting New Freelance Projects
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-border/70 text-text-secondary">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-primary block">Response Time</strong>
                      <span>Within 24 hours guaranteed</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-primary block">Timezone</strong>
                      <span>IST (UTC+5:30) • US & EU overlap</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:col-span-2">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-primary block">Engagement Model</strong>
                      <span>Fixed-price milestones, milestone sprints, or direct contract roles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon: Icon, label, value, href, external }) {
  const content = (
    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-bg border border-border hover:border-accent/30 transition-colors duration-150 group">
      <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-accent" />
      </div>
      <div>
        <p className="text-[11px] font-mono text-text-muted">{label}</p>
        <p className="text-xs sm:text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        aria-label={`${label}: ${value}`}
      >
        {content}
      </a>
    );
  }

  return content;
}
