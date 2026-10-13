import { useState } from "react";
import { ArrowDown, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";
import { TechTrustBanner } from "../components/ui/TechTrustBanner";
import { motion } from "framer-motion";
import { personal } from "../data/personal";
import { Button } from "../components/ui/Button";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Hero() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReduced ? 0 : 0.08 },
    },
  };

  const item = prefersReduced
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
        },
      };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-0 overflow-hidden"
    >
      {/* Ambient Radial Mesh Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex-1 flex items-center mb-12">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          {/* Left Column — Text & CTAs */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={item} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent-light text-accent border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                AVAILABLE FOR FREELANCE & CONTRACTS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-text-primary leading-[1.12]"
            >
              I design, build, and ship{" "}
              <span className="text-accent">modern web applications.</span>
            </motion.h1>

            {/* Subheadline / Value Proposition */}
            <motion.p
              variants={item}
              className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed"
            >
              {personal.heroDescription}
            </motion.p>

            {/* Tech Stack chips */}
            <motion.div
              variants={item}
              className="mt-6 flex flex-wrap gap-2"
            >
              {[
                "React",
                "Node.js",
                "Express",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "REST APIs",
                "Clerk Auth",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-surface border border-border text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href="#work" size="lg" icon={ArrowDown} iconPosition="right">
                View Selected Work
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Start a Project
              </Button>
              <Button
                href="/Abhishek_Ranjan_CV.pdf"
                variant="ghost"
                size="lg"
                icon={FileText}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume (PDF)
              </Button>
            </motion.div>

            {/* Social & Verification Links */}
            <motion.div
              variants={item}
              className="mt-6 flex items-center gap-4 text-xs font-mono"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors duration-200"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
                github.com/abhi-2029
              </a>
              <span className="w-px h-3.5 bg-border" aria-hidden="true" />
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors duration-200"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <span className="w-px h-3.5 bg-border hidden sm:block" aria-hidden="true" />
              <span className="text-text-muted hidden sm:inline-block">
                ⚡ 450+ LeetCode • 5★ HackerRank
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column — Interactive Multi-Tab Code Terminal Visual */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.96 }}
            animate={prefersReduced ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block"
          >
            <InteractiveHeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Tech & Cloud Infrastructure Trust Strip */}
      <TechTrustBanner />
    </section>
  );
}

/**
 * Interactive Code Terminal with 3 tabs:
 * 1. Express Backend (api/server.js)
 * 2. React Hook (client/useApi.js)
 * 3. PostgreSQL Schema (db/schema.sql)
 */
function InteractiveHeroVisual() {
  const [activeTab, setActiveTab] = useState("api");

  return (
    <div className="code-block shadow-2xl shadow-black/15 rounded-2xl overflow-hidden border border-border">
      {/* Window Chrome & Tab Selector */}
      <div className="code-block-header flex items-center justify-between px-4 py-3 bg-surface-elevated border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-bg p-1 rounded-lg border border-border text-xs font-mono">
          <button
            onClick={() => setActiveTab("api")}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeTab === "api"
                ? "bg-accent text-white font-medium shadow-sm"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            api/server.js
          </button>
          <button
            onClick={() => setActiveTab("client")}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeTab === "client"
                ? "bg-accent text-white font-medium shadow-sm"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            client/useAI.js
          </button>
          <button
            onClick={() => setActiveTab("schema")}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeTab === "schema"
                ? "bg-accent text-white font-medium shadow-sm"
                : "text-text-muted hover:text-text-primary"
            }`}
          >
            db/schema.sql
          </button>
        </div>
      </div>

      {/* Code Tab Content */}
      <div className="p-5 font-mono text-xs sm:text-sm leading-6 sm:leading-7 text-text-secondary bg-[#0d1117] min-h-[340px] overflow-x-auto">
        {activeTab === "api" && <ApiCodeSnippet />}
        {activeTab === "client" && <ClientCodeSnippet />}
        {activeTab === "schema" && <SchemaCodeSnippet />}
      </div>
    </div>
  );
}

function ApiCodeSnippet() {
  return (
    <>
      <CodeLine><Keyword>const</Keyword> express <Op>=</Op> <Func>require</Func>(<Str>'express'</Str>);</CodeLine>
      <CodeLine><Keyword>const</Keyword> app <Op>=</Op> <Func>express</Func>();</CodeLine>
      <CodeLine empty />
      <CodeLine><Comment>{"// Secure role-based JWT auth middleware"}</Comment></CodeLine>
      <CodeLine><Keyword>const</Keyword> {"{ "}<Var>requireAuth</Var>, <Var>hasRole</Var>{" }"} <Op>=</Op> <Func>require</Func>(<Str>'./middleware/auth'</Str>);</CodeLine>
      <CodeLine empty />
      <CodeLine><Comment>{"// Protected endpoint with validation"}</Comment></CodeLine>
      <CodeLine>app.<Func>post</Func>(<Str>'/api/v1/generate'</Str>, <Var>requireAuth</Var>, <Keyword>async</Keyword> (<Var>req</Var>, <Var>res</Var>) <Op>{"=>"}</Op> {"{"}</CodeLine>
      <CodeLine indent={1}><Keyword>const</Keyword> {"{ "}<Var>prompt</Var>, <Var>model</Var>{" }"} <Op>=</Op> req.<Var>body</Var>;</CodeLine>
      <CodeLine indent={1}><Keyword>const</Keyword> result <Op>=</Op> <Keyword>await</Keyword> aiService.<Func>generate</Func>({"{ "}<Var>prompt</Var>, <Var>model</Var>{" }"});</CodeLine>
      <CodeLine indent={1}>res.<Func>status</Func>(<Num>200</Num>).<Func>json</Func>({"{ "}<Var>success</Var>: <Bool>true</Bool>, <Var>data</Var>: result{" }"});</CodeLine>
      <CodeLine>{"}"});</CodeLine>
      <CodeLine empty />
      <CodeLine>app.<Func>listen</Func>(<Num>5000</Num>, () <Op>{"=>"}</Op> console.<Func>log</Func>(<Str>'API listening on port 5000'</Str>));</CodeLine>
    </>
  );
}

function ClientCodeSnippet() {
  return (
    <>
      <CodeLine><Keyword>import</Keyword> {"{ "}<Var>useState</Var>, <Var>useCallback</Var>{" }"} <Keyword>from</Keyword> <Str>'react'</Str>;</CodeLine>
      <CodeLine empty />
      <CodeLine><Comment>{"// Custom React hook for AI generation state"}</Comment></CodeLine>
      <CodeLine><Keyword>export function</Keyword> <Func>useAiGeneration</Func>() {"{"}</CodeLine>
      <CodeLine indent={1}><Keyword>const</Keyword> [<Var>loading</Var>, <Var>setLoading</Var>] <Op>=</Op> <Func>useState</Func>(<Bool>false</Bool>);</CodeLine>
      <CodeLine indent={1}><Keyword>const</Keyword> [<Var>output</Var>, <Var>setOutput</Var>] <Op>=</Op> <Func>useState</Func>(<Keyword>null</Keyword>);</CodeLine>
      <CodeLine empty />
      <CodeLine indent={1}><Keyword>const</Keyword> generate <Op>=</Op> <Func>useCallback</Func>(<Keyword>async</Keyword> (<Var>prompt</Var>) <Op>{"=>"}</Op> {"{"}</CodeLine>
      <CodeLine indent={2}><Func>setLoading</Func>(<Bool>true</Bool>);</CodeLine>
      <CodeLine indent={2}><Keyword>const</Keyword> res <Op>=</Op> <Keyword>await</Keyword> <Func>fetch</Func>(<Str>'/api/v1/generate'</Str>, {"{ "}<Var>method</Var>: <Str>'POST'</Str>, <Var>body</Var>: <Func>JSON.stringify</Func>({"{ "}<Var>prompt</Var>{" }"}){" }"});</CodeLine>
      <CodeLine indent={2}><Keyword>const</Keyword> data <Op>=</Op> <Keyword>await</Keyword> res.<Func>json</Func>();</CodeLine>
      <CodeLine indent={2}><Func>setOutput</Func>(data.<Var>data</Var>);</CodeLine>
      <CodeLine indent={2}><Func>setLoading</Func>(<Bool>false</Bool>);</CodeLine>
      <CodeLine indent={1}>{"}"}, []);</CodeLine>
      <CodeLine empty />
      <CodeLine indent={1}><Keyword>return</Keyword> {"{ "}<Var>generate</Var>, <Var>loading</Var>, <Var>output</Var>{" }"};</CodeLine>
      <CodeLine>{"}"}</CodeLine>
    </>
  );
}

function SchemaCodeSnippet() {
  return (
    <>
      <CodeLine><Comment>{"-- PostgreSQL (Neon) Relational Schema"}</Comment></CodeLine>
      <CodeLine><Keyword>CREATE TABLE</Keyword> <Var>users</Var> (</CodeLine>
      <CodeLine indent={1}><Var>id</Var> <Keyword>VARCHAR(64)</Keyword> <Keyword>PRIMARY KEY</Keyword>,</CodeLine>
      <CodeLine indent={1}><Var>email</Var> <Keyword>VARCHAR(255)</Keyword> <Keyword>UNIQUE NOT NULL</Keyword>,</CodeLine>
      <CodeLine indent={1}><Var>credits</Var> <Keyword>INTEGER</Keyword> <Keyword>DEFAULT</Keyword> <Num>250</Num>,</CodeLine>
      <CodeLine indent={1}><Var>created_at</Var> <Keyword>TIMESTAMPTZ DEFAULT NOW()</Keyword></CodeLine>
      <CodeLine>);</CodeLine>
      <CodeLine empty />
      <CodeLine><Keyword>CREATE TABLE</Keyword> <Var>generation_history</Var> (</CodeLine>
      <CodeLine indent={1}><Var>id</Var> <Keyword>SERIAL PRIMARY KEY</Keyword>,</CodeLine>
      <CodeLine indent={1}><Var>user_id</Var> <Keyword>VARCHAR(64) REFERENCES</Keyword> users(id),</CodeLine>
      <CodeLine indent={1}><Var>model_used</Var> <Keyword>VARCHAR(64) NOT NULL</Keyword>,</CodeLine>
      <CodeLine indent={1}><Var>prompt</Var> <Keyword>TEXT NOT NULL</Keyword>,</CodeLine>
      <CodeLine indent={1}><Var>output_url</Var> <Keyword>TEXT</Keyword></CodeLine>
      <CodeLine>);</CodeLine>
      <CodeLine empty />
      <CodeLine><Keyword>CREATE INDEX</Keyword> idx_user_history <Keyword>ON</Keyword> generation_history(user_id);</CodeLine>
    </>
  );
}

/* ===== Syntax highlighting helper components ===== */

function CodeLine({ children, indent = 0, empty }) {
  if (empty) return <div className="h-5 sm:h-6" />;
  return (
    <div style={{ paddingLeft: `${indent * 1.25}rem` }} className="whitespace-nowrap font-mono text-zinc-300">
      {children}
    </div>
  );
}

function Keyword({ children }) {
  return <span className="text-[#c678dd] font-medium">{children}</span>;
}

function Func({ children }) {
  return <span className="text-[#61afef] font-medium">{children}</span>;
}

function Str({ children }) {
  return <span className="text-[#98c379]">{children}</span>;
}

function Var({ children }) {
  return <span className="text-[#e5c07b]">{children}</span>;
}

function Op({ children }) {
  return <span className="text-[#56b6c2]">{children}</span>;
}

function Num({ children }) {
  return <span className="text-[#d19a66]">{children}</span>;
}

function Bool({ children }) {
  return <span className="text-[#d19a66]">{children}</span>;
}

function Comment({ children }) {
  return <span className="text-zinc-500 italic">{children}</span>;
}
