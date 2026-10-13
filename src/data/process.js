import { Search, PenTool, Code2, TestTube2, Rocket, RefreshCw } from "lucide-react";

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business requirement, target users, and desired outcome. Define what success looks like before writing any code.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the scope, system architecture, technology stack, database schema, and development milestones.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the frontend, backend, database, and integrations — iterating in focused sprints with regular progress updates.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Test",
    description:
      "Test functionality, form validation, edge cases, API behavior, and authentication flows across devices.",
    icon: TestTube2,
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Prepare the production environment, configure hosting, and deploy the application with proper setup.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Iterate",
    description:
      "Incorporate your feedback, fix issues, add improvements, and refine the product based on real usage.",
    icon: RefreshCw,
  },
];
