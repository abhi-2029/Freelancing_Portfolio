export const projects = [
  {
    id: "hospcare",
    name: "HospCare",
    category: "Healthcare Management System",
    tagline:
      "Full-stack platform for managing patient-doctor appointments, medical records, and healthcare workflows.",
    description:
      "A comprehensive healthcare management system built with the MERN stack, enabling patients to book appointments and doctors to manage their schedules and patient records — all secured with role-based authentication.",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
    date: "May 2026",
    github: "https://github.com/abhi-2029/HospCare",
    liveUrl: null, // Add live demo URL when deployed
    image: null,
    features: [
      "Patient and Doctor role-based system",
      "Appointment booking and management",
      "Patient record management",
      "JWT authentication with bcrypt password hashing",
      "Role-based authorization across both user roles",
      "12+ REST API endpoints",
      "Doctor scheduling system",
      "MongoDB schema with 4 collections",
      "Field-level database indexing for efficient lookups",
    ],
    caseStudy: {
      overview:
        "HospCare is a full-stack healthcare management platform designed to streamline the interaction between patients and doctors. It handles the complete workflow — from patient registration and appointment booking to doctor scheduling and medical record management.",
      problem:
        "Healthcare facilities need digital systems to manage appointments, patient records, and doctor schedules efficiently. Manual processes lead to scheduling conflicts, lost records, and poor patient experience. A secure, role-based system is needed where patients and doctors have appropriate access to different functionality.",
      solution:
        "Built a complete MERN-stack application with separate Patient and Doctor interfaces, secured with JWT authentication and role-based authorization. The system handles appointment lifecycle management, patient records, and doctor availability — all through a well-structured REST API.",
      architecture: [
        "React.js frontend with role-based routing and protected pages",
        "Express.js/Node.js backend with middleware-based authentication",
        "MongoDB database with 4 collections: Users, Doctors, Patients, Appointments",
        "JWT token-based auth with bcrypt password hashing",
        "12+ RESTful API endpoints with proper validation",
      ],
      highlights: [
        "Designed a role-based system handling two distinct user journeys (Patient and Doctor) within a single application",
        "Implemented field-level indexing on MongoDB collections to optimize appointment lookup queries",
        "Built a complete authentication flow with JWT tokens, bcrypt hashing, and middleware-based route protection",
        "Structured the API with clear separation: auth routes, appointment routes, doctor routes, and patient routes",
      ],
    },
  },
  {
    id: "quickai",
    name: "Quick.AI",
    category: "AI SaaS Platform",
    tagline:
      "AI-powered SaaS platform delivering image generation, content creation, and media processing through integrated third-party AI APIs.",
    description:
      "A multi-feature AI SaaS platform that integrates multiple third-party AI services to deliver image generation, background removal, object removal, content generation, and PDF processing — complete with user authentication, credit management, and generation history.",
    technologies: [
      "PostgreSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "Clerk",
      "Neon",
      "Docker",
    ],
    date: "Apr 2026",
    github: "https://github.com/abhi-2029/QuickAI-Full-Stack",
    liveUrl: null, // Add live demo URL when deployed
    image: null,
    features: [
      "Image generation via AI APIs",
      "Background removal processing",
      "Object removal from images",
      "AI-powered content generation",
      "PDF processing and extraction",
      "Clerk-based user authentication",
      "User profiles and credit system",
      "Generation history tracking",
      "Groq-hosted Llama 3.1 integration",
      "OpenRouter-hosted Mistral 7B integration",
      "Clipdrop API integration",
      "Cloudinary media management",
      "Docker Compose containerization",
    ],
    caseStudy: {
      overview:
        "Quick.AI is a SaaS platform that brings multiple AI capabilities under one roof — image generation, background removal, object removal, content generation, and PDF processing. Users authenticate, receive credits, and can track their generation history across all features.",
      problem:
        "Businesses and individuals need access to multiple AI tools for content and media processing, but managing separate services with different APIs, accounts, and billing is fragmented and time-consuming. A unified platform with usage tracking and credit management can simplify this.",
      solution:
        "Built a full-stack AI SaaS platform integrating 4+ third-party AI APIs behind a unified React frontend and Express backend. Implemented a credit-based usage system, generation history, and user management with Clerk authentication — all containerized with Docker Compose for consistent deployment.",
      architecture: [
        "React.js frontend with feature-specific interfaces for each AI tool",
        "Express.js/Node.js backend orchestrating multiple third-party API calls",
        "PostgreSQL (Neon) database for user profiles, credits, and generation history",
        "Clerk authentication for secure user management",
        "Docker Compose for multi-service containerization",
      ],
      highlights: [
        "Integrated 4 distinct third-party AI APIs (Groq, OpenRouter, Clipdrop, Cloudinary) into a single cohesive platform",
        "Designed a credit-based usage system that tracks consumption across 5 different AI features",
        "Implemented Docker Compose configuration to standardize development and production environments",
        "Built on PostgreSQL (Neon) for structured data modeling of user profiles, credits, and generation history",
      ],
    },
  },
];
