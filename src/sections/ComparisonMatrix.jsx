import { Check, X, Sparkles } from "lucide-react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { cn } from "../utils/cn";

const comparisons = [
  {
    feature: "Delivery Speed & Focus",
    agency: "3 – 6 Months (Complex overhead)",
    freelancer: "Unpredictable delays & missed deadlines",
    abhishek: "2 – 4 Weeks Focused MVP Sprint",
    winner: true,
  },
  {
    feature: "Direct Communication",
    agency: "Account managers / Slow middlemen",
    freelancer: "Timezone friction & ghosting risks",
    abhishek: "Direct 1-on-1 access with daily/weekly demos",
    winner: true,
  },
  {
    feature: "Architecture & Code Standards",
    agency: "Often delegated to junior associates",
    freelancer: "Spaghetti code with no documentation",
    abhishek: "Production-grade, modular, Dockerized, clean Git",
    winner: true,
  },
  {
    feature: "Cost & Billing Model",
    agency: "$20,000 – $60,000+ with bloated retainers",
    freelancer: "Low initial quote, costly fixes later",
    abhishek: "Fair, transparent fixed-price milestones",
    winner: true,
  },
  {
    feature: "100% Code & IP Ownership",
    agency: "Complex licensing or shared ownership clauses",
    freelancer: "Unclear intellectual property rights",
    abhishek: "Full repository & IP transferred on day one",
    winner: true,
  },
  {
    feature: "Post-Launch Warranty",
    agency: "Expensive separate maintenance contract",
    freelancer: "Vanishes after final payment",
    abhishek: "14-Day post-deployment bug warranty included",
    winner: true,
  },
];

export function ComparisonMatrix() {
  return (
    <section id="comparison" className="section-padding bg-bg border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeader
            label="The Advantage"
            title="Why Hire Me Over Other Options"
            subtitle="How working directly with a dedicated full-stack engineer compares to expensive agencies or unpredictable low-bid freelancers."
          />
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection delay={0.12}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-surface shadow-md">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-border bg-surface-elevated text-xs font-mono">
                  <th className="p-4 sm:p-5 text-text-muted uppercase tracking-wider font-semibold w-1/4">
                    Comparison Factor
                  </th>
                  <th className="p-4 sm:p-5 text-text-muted uppercase tracking-wider font-semibold w-1/4">
                    Traditional Agency
                  </th>
                  <th className="p-4 sm:p-5 text-text-muted uppercase tracking-wider font-semibold w-1/4">
                    Budget Freelancer
                  </th>
                  <th className="p-4 sm:p-5 text-accent uppercase tracking-wider font-bold w-1/4 bg-accent/5 border-l border-r border-accent/20">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Abhishek Ranjan
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm">
                {comparisons.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-bg/50 transition-colors duration-150"
                  >
                    {/* Factor */}
                    <td className="p-4 sm:p-5 font-semibold text-text-primary">
                      {row.feature}
                    </td>

                    {/* Agency */}
                    <td className="p-4 sm:p-5 text-text-secondary">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.agency}</span>
                      </div>
                    </td>

                    {/* Low-cost freelancer */}
                    <td className="p-4 sm:p-5 text-text-secondary">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.freelancer}</span>
                      </div>
                    </td>

                    {/* Abhishek */}
                    <td className="p-4 sm:p-5 bg-accent/5 border-l border-r border-accent/20 font-medium text-text-primary">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{row.abhishek}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
