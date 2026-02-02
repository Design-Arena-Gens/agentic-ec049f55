export const features = [
  {
    title: "Autonomous Planning",
    description:
      "Generates actionable tasks, tracks state, and adapts based on feedback loops without manual oversight.",
    highlights: [
      "Stateful execution model",
      "Task prioritization engine",
      "Scenario-based branching",
    ],
    icon: "🧭",
  },
  {
    title: "Human-Readable Output",
    description:
      "Produces concise status reports, clearly explaining what changed with every iteration.",
    highlights: ["Diff-aware summaries", "Documentation sync", "Testing insights"],
    icon: "📝",
  },
  {
    title: "Deployment Ready",
    description:
      "Bundles tested artifacts, configures environments, and verifies production endpoints automatically.",
    highlights: ["CI friendly", "Observability hooks", "Rollout safeguards"],
    icon: "🚀",
  },
];

export const workflow = [
  {
    title: "Understand the Requirement",
    description:
      "Parse objectives, detect dependencies, and create a traceable scope aligned with constraints.",
    deliverables: [
      "Context summary",
      "Risk and assumption log",
      "Initial action plan",
    ],
  },
  {
    title: "Plan the Solution",
    description:
      "Break work into atomic steps, sequence them, and determine validation criteria for each.",
    deliverables: ["Task graph", "Validation checklist", "Ownership map"],
  },
  {
    title: "Implement the Code",
    description:
      "Write modular, maintainable code while keeping the changelog fully transparent for reviewers.",
    deliverables: ["Structured commits", "Inline rationale", "Updated references"],
  },
  {
    title: "Test the Output",
    description:
      "Run automated checks and bespoke validations to guarantee behaviour matches expectations.",
    deliverables: ["Test report", "Performance snapshot", "Regression guardrails"],
  },
  {
    title: "Improve and Finalize",
    description:
      "Polish UX, update docs, and confirm deployment health before marking the iteration complete.",
    deliverables: ["UX refinements", "Documentation updates", "Deployment verification"],
  },
];

export const insights = [
  {
    title: "Deployment Reliability",
    metric: "99.3% success rate",
    description:
      "Automated rollbacks and health checks ensure production deploys stay within tolerance.",
    trend: "up" as const,
  },
  {
    title: "Test Coverage",
    metric: "87% automated coverage",
    description:
      "Targeted scenarios and synthetic monitoring keep critical paths under continuous watch.",
    trend: "steady" as const,
  },
  {
    title: "Iteration Velocity",
    metric: "4.2 cycles/day",
    description:
      "Parallel task execution and real-time feedback loops compress the delivery timeline.",
    trend: "up" as const,
  },
];
