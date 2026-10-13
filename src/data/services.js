import { Layers, Server, LayoutDashboard, Database, Sparkles } from "lucide-react";

export const services = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with modern, responsive frontends and robust backend systems. From user interfaces to server logic to database — delivered as a complete, working product.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    deliverables:
      "Production-ready codebase, clean Git history, environment configuration, responsive UI, REST API, and deployment setup.",
    icon: Layers,
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    description:
      "Scalable REST APIs with secure authentication, role-based authorization, and well-structured database integration. Built to be consumed by web apps, mobile apps, or third-party services.",
    technologies: ["Node.js", "Express", "JWT", "REST APIs", "bcrypt"],
    deliverables:
      "Documented REST endpoints, JWT authentication & role middleware, input validation, error handling, and API documentation.",
    icon: Server,
  },
  {
    id: "saas",
    title: "SaaS & Business Applications",
    description:
      "Multi-user platforms with user management, dashboards, role-based access, credit systems, and workflow automation — the kind of applications that power real businesses.",
    technologies: ["React", "PostgreSQL", "Clerk", "Docker"],
    deliverables:
      "Multi-tenant schemas, Clerk/JWT user management, credit/usage tracking, Dockerized environment, and analytics dashboard.",
    icon: LayoutDashboard,
  },
  {
    id: "database",
    title: "Database Design & Integration",
    description:
      "Schema design, data modeling, indexing strategies, and query optimization across both SQL and NoSQL databases. Structured to scale with your application.",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Indexing"],
    deliverables:
      "Normalized relational or document schemas, query indexing, migration scripts, connection pooling, and seed data.",
    icon: Database,
  },
  {
    id: "ai-integration",
    title: "AI API Integration",
    description:
      "Integrating third-party AI services — language models, image generation, content processing — into new or existing web applications with proper API management and error handling.",
    technologies: ["LLM APIs", "Cloudinary", "REST", "Groq", "OpenRouter"],
    deliverables:
      "Multi-provider orchestration (Groq, OpenRouter), token rate limiting, media storage pipelines (Cloudinary), and error fallbacks.",
    icon: Sparkles,
  },
];
