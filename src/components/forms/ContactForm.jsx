import { useState, useEffect } from "react";
import { Send, CheckCircle, AlertCircle, Mail, Sparkles, Check } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";

const projectTypes = [
  "Full-Stack Web Application",
  "SaaS Platform / MVP",
  "REST API / Backend Architecture",
  "AI API Integration",
  "Internal Tool / Dashboard",
  "Dedicated Engineering Retainer",
  "Database Design & Migration",
  "Performance Optimization",
  "Other Project",
];

const budgetRanges = [
  "Less than $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
  "Milestone / Fixed Contract",
  "Not sure yet",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [appliedScope, setAppliedScope] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Listen for auto-fill events from ProjectEstimator, EngagementModels, or Case Studies
  useEffect(() => {
    const handleScope = (e) => {
      if (e.detail) {
        setFormData((prev) => ({
          ...prev,
          projectType: e.detail.projectType || prev.projectType,
          message: e.detail.message || prev.message,
        }));
        setAppliedScope({
          title: e.detail.modelName || e.detail.projectType || "Configured Project",
          timeline: e.detail.timeline || "",
          stacks: e.detail.stacks || [],
        });
        setErrors((prev) => ({ ...prev, message: null }));
      }
    };
    window.addEventListener("apply-project-scope", handleScope);
    return () => window.removeEventListener("apply-project-scope", handleScope);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please describe what you are looking to build";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide a bit more detail (at least 10 characters)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    if (formspreeId) {
      try {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.error("Form submission error:", err);
      }
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const mailtoUrl = `mailto:abhisheksingh70224@gmail.com?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.projectType || "New Project"}`
  )}&body=${encodeURIComponent(
    `Hi Abhishek,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${
      formData.projectType || "Not specified"
    }\nBudget: ${formData.budget || "Not specified"}\n\nProject Scope & Requirements:\n${formData.message}\n`
  )}`;

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl bg-surface border border-border text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-text-primary">
          Inquiry Received!
        </h3>
        <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-text-primary">{formData.name}</strong>. I've received your requirements and will review the specifications and respond to{" "}
          <span className="text-accent underline">{formData.email}</span> within 24 hours.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={mailtoUrl}
            className="inline-flex items-center gap-2 text-xs font-medium text-accent bg-accent-light px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Send copy via Email Client
          </a>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setAppliedScope(null);
              setFormData({
                name: "",
                email: "",
                projectType: "",
                budget: "",
                message: "",
              });
            }}
            className="text-xs text-text-muted hover:text-text-primary transition-colors cursor-pointer py-2 px-3"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-bg border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-150";

  return (
    <div className="space-y-4">
      {/* Scope Auto-Populated Banner */}
      {appliedScope && (
        <div className="p-4 rounded-xl bg-accent-light border border-accent/30 space-y-2.5 transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono font-semibold text-accent uppercase tracking-wider text-[11px]">
                Project Scope & Stacks Auto-Populated
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setAppliedScope(null);
                setFormData((prev) => ({ ...prev, message: "" }));
              }}
              className="text-[11px] font-mono text-text-muted hover:text-rose-500 transition-colors cursor-pointer"
            >
              Clear / Reset
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-text-primary text-sm">
              {appliedScope.title}
            </span>
            {appliedScope.timeline && (
              <span className="px-2 py-0.5 rounded-full bg-bg border border-border text-[11px] font-mono text-text-secondary">
                ⏱️ {appliedScope.timeline}
              </span>
            )}
          </div>

          {appliedScope.stacks && appliedScope.stacks.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {appliedScope.stacks.map((stack, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-bg border border-border text-[10px] font-mono text-text-secondary"
                >
                  {typeof stack === "string" ? stack.split("(")[0].trim() : stack}
                </span>
              ))}
            </div>
          )}

          <p className="text-[11px] text-text-muted font-mono pt-0.5">
            ✓ Your requirements & stack are already formatted in the message box below. Simply enter your name and email to proceed!
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name */}
        <FormField label="Your Name" required error={errors.name}>
          <input
            type="text"
            name="name"
            id="contact-name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="e.g. Alex Founder"
            className={cn(inputClasses, errors.name && "border-rose-500")}
          />
        </FormField>

        {/* Email */}
        <FormField label="Work Email" required error={errors.email}>
          <input
            type="email"
            name="email"
            id="contact-email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="alex@company.com"
            className={cn(inputClasses, errors.email && "border-rose-500")}
          />
        </FormField>

        {/* Row: Project Type & Budget */}
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="Project Type">
            <select
              name="projectType"
              id="contact-type"
              value={formData.projectType}
              onChange={handleChange}
              className={cn(inputClasses, "cursor-pointer")}
            >
              <option value="">Select project scope</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Estimated Budget (Optional)">
            <select
              name="budget"
              id="contact-budget"
              value={formData.budget}
              onChange={handleChange}
              className={cn(inputClasses, "cursor-pointer")}
            >
              <option value="">Select estimated budget</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        {/* Message */}
        <FormField label="Project Details & Requirements" required error={errors.message}>
          <textarea
            name="message"
            id="contact-message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell me what you are building: goals, timelines, stack requirements, or features..."
            className={cn(
              inputClasses,
              "resize-y min-h-[140px] font-mono text-xs leading-relaxed",
              errors.message && "border-rose-500"
            )}
          />
        </FormField>

        {/* Submit button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={Send}
          iconPosition="right"
          className="w-full cursor-pointer shadow-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting Inquiry..." : "Send Project Inquiry"}
        </Button>

        <p className="text-center text-[11px] font-mono text-text-muted">
          ⚡ Guaranteed response within 24 hours • NDA friendly • 100% code ownership
        </p>
      </form>
    </div>
  );
}

function FormField({ label, required, error, children }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-mono font-medium text-text-secondary">
          {label} {required && <span className="text-accent">*</span>}
        </label>
        {error && (
          <span className="flex items-center gap-1 text-[11px] font-mono text-rose-500">
            <AlertCircle className="w-3 h-3" /> {error}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
