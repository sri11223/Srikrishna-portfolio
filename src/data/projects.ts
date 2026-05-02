export interface PortfolioProject {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  impact: string;
  github?: string;
  demo?: string;
  color?: string;
  featured?: boolean;
}

export const allProjects: PortfolioProject[] = [
  {
    title: "SENTINEL AI Agent Safety Platform",
    description:
      "RL-trained oversight system that intercepts unsafe AI-agent actions before they execute in production-like environments.",
    longDescription:
      "Built a FastAPI and Hugging Face Spaces platform for supervising multi-agent systems. SENTINEL evaluates proposals with constitutional safety checks, worker trust memory, counterfactual damage replay, and REST, MCP, and A2A interfaces.",
    tech: ["Python", "FastAPI", "Reinforcement Learning", "HuggingFace", "Docker", "MCP", "A2A"],
    category: "AI Safety",
    impact: "97.7% threat detection, 94.7% damage prevention",
    github: "https://github.com/sri11223/openEnv",
    demo: "https://huggingface.co/spaces/srikrishna2005/openenv",
    color: "from-primary to-accent",
    featured: true,
  },
  {
    title: "Orchestrate Support Triage Agent",
    description:
      "Deterministic 7-stage support-triage agent with hybrid retrieval, grounded generation, adversarial verification, and audit traces.",
    longDescription:
      "Engineered a production-style ticket pipeline that sanitizes input, classifies traps, retrieves evidence with BM25 plus BGE embeddings, generates Pydantic-strict answers, verifies them adversarially, and writes traceable CSV output.",
    tech: ["Python", "FastAPI", "BM25", "BGE Embeddings", "Cross-Encoder", "Pydantic", "AsyncIO"],
    category: "Agentic AI",
    impact: "100/100 scorecard, 0 prompt-injection failures",
    github: "https://github.com/sri11223/triage-orchestrate",
    color: "from-secondary to-primary",
    featured: true,
  },
  {
    title: "GraphMind AI",
    description:
      "Graph-based SAP Order-to-Cash analytics platform with interactive 2D/3D graph exploration and LLM-powered natural language SQL queries.",
    longDescription:
      "Built a React + TypeScript frontend with react-force-graph 2D/3D visualizations, node inspection, PathFinder shortest-path tracing, entity filters, and WebSocket chat. The FastAPI backend ingests SAP O2C JSONL data into SQLite, constructs a NetworkX knowledge graph, and uses Groq LLM with guardrails for NL-to-SQL analytics.",
    tech: ["React", "TypeScript", "FastAPI", "NetworkX", "SQLite", "Groq", "WebSockets", "Three.js"],
    category: "Data + AI",
    impact: "669 graph nodes, 19 tables, 4 views, live Vercel + Render deployment",
    github: "https://github.com/sri11223/graphmind_ai",
    demo: "https://graphmind-ai-sigma.vercel.app/",
    color: "from-accent to-primary",
    featured: true,
  },
  {
    title: "Artgram Creative Studio Platform",
    description:
      "Freelance full-stack platform for Artgram's art studio brand, including public marketing pages, booking CTAs, dashboard flows, SEO, analytics, and payment-ready customer journeys.",
    longDescription:
      "Built and shipped the live Artgram web platform for a multi-location creative studio. The app presents workshops and activities, supports dashboard/customer flows, includes Razorpay checkout integration, Google Analytics and Meta Pixel tracking, rich local-business SEO schema, and location-focused pages for Hyderabad, Bengaluru, Vijayawada, and Gurugram.",
    tech: ["React", "Vite", "SEO", "Analytics", "Razorpay", "Dashboard", "Full Stack"],
    category: "Freelance",
    impact: "Live client platform, 25K+ customers, 30+ activities, 5 studio locations",
    demo: "https://artgram.in/",
    color: "from-primary to-secondary",
    featured: true,
  },
  {
    title: "Evently Event Booking System",
    description:
      "Production-grade event booking backend with sharded PostgreSQL, Redis caching, JWT RBAC, analytics, waitlists, and 60+ APIs.",
    longDescription:
      "Built an enterprise-style Node.js + TypeScript backend for event management, bookings, capacity tracking, waitlists, dynamic pricing, notifications, analytics, tracing, and load testing. The system uses PostgreSQL with 4-shard architecture, Redis caching, Docker Compose, PM2-ready production setup, and role-based JWT security.",
    tech: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Redis", "Docker", "JWT", "Jest"],
    category: "Backend Systems",
    impact: "60+ endpoints, 4-shard PostgreSQL, sub-400ms responses, zero failures in concurrent tests",
    github: "https://github.com/sri11223/Evently-app",
    demo: "https://evently-app-7hx2.onrender.com",
    color: "from-secondary to-primary",
  },
  {
    title: "TaskFlow Collaboration Platform",
    description:
      "Real-time Kanban and workspace collaboration platform with boards, messaging, docs, AI assistance, and live Socket.IO sync.",
    longDescription:
      "Built a full-stack project-management app with React, Vite, Tailwind, Zustand, Socket.IO, Prisma, JWT auth, workspaces, Kanban boards, task assignments, comments, invitations, notifications, direct messages, TipTap documents, planner views, Swagger docs, and Gemini AI assistance.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma", "Socket.IO", "Zustand", "TipTap", "Full Stack"],
    category: "Collaboration",
    impact: "76 REST endpoints, 17 Prisma models, 25 Jest/Supertest tests, live Vercel + Render deployment",
    github: "https://github.com/sri11223/Collaborative_platform",
    demo: "https://taskflow-collaborative-platform.vercel.app",
    color: "from-primary to-accent",
  },
  {
    title: "FinBoard Pro",
    description:
      "AI-powered financial analytics dashboard for stocks, crypto, Indian markets, watchlists, voice commands, and customizable trading workspaces.",
    longDescription:
      "Built a high-performance Next.js 14 PWA for market analysis with smart free-data routing across FMP, AlphaVantage, NSE/BSE, CoinGecko, forex, and index fallbacks. It supports voice commands, AI-generated layouts, persisted Zustand workspaces, React Query data fetching, WebSocket/simulation fallback, offline mode, and installable mobile/desktop PWA behavior.",
    tech: ["Next.js", "TypeScript", "PWA", "Zustand", "React Query", "Tailwind CSS", "Shadcn UI", "WebSockets"],
    category: "FinTech",
    impact: "US stocks, Indian markets, crypto, forex, PWA offline mode, AI layouts",
    github: "https://github.com/sri11223/Finboard",
    color: "from-secondary to-primary",
  },
  {
    title: "Deploy Genie Autonomous Releases",
    description:
      "Micro-frontend and Node.js orchestration system that lets teams ship independently while agentic workflows validate deployments.",
    longDescription:
      "At Techolution, split a monolith into independently deployable React micro-apps with Webpack Module Federation and built the Node.js + Express backend for automated release orchestration, readiness checks, rollback handling, and stakeholder notifications.",
    tech: ["React", "Webpack Module Federation", "Node.js", "Express", "Agentic Workflows"],
    category: "Work Project",
    impact: "Autonomous deployment flow for independently shipped micro-apps",
    color: "from-accent to-secondary",
  },
  {
    title: "MetLife Cloud AI RAG Platform",
    description:
      "RAG pipeline and async inference layer for a cloud AI platform used by a 50K+ user insurance audience.",
    longDescription:
      "Built retrieval and async inference paths that reduced query resolution time by 20% while scaling without infrastructure changes. Also shipped supporting Node.js microservices and TypeScript Backstage plugins.",
    tech: ["Node.js", "RAG", "TypeScript", "Backstage", "Docker", "CI/CD"],
    category: "Work Project",
    impact: "50K+ users, 20% faster query resolution",
    color: "from-primary to-secondary",
  },
  {
    title: "Outbox LLM Email Automation",
    description:
      "Production email automation and inbox-sync features wired directly into user-facing Next.js workflows.",
    longDescription:
      "Built full-stack features across Next.js, Node.js, and PostgreSQL, shipped LLM-powered email automation from scratch, and cut backend latency by 45% through caching and query-level fixes.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "LLM Systems", "Caching"],
    category: "Work Project",
    impact: "45% latency reduction, zero-rollback production releases",
    color: "from-secondary to-accent",
  },
  {
    title: "ContextWeaver",
    description:
      "Production-ready TypeScript package that prevents AI chatbot token-limit crashes with smart conversation context management.",
    longDescription:
      "Built a zero-dependency npm package for AI developers that handles token budgeting, pinned messages, conversation-pair preservation, smart importance, summaries, streaming responses, and pluggable storage adapters for Redis, Postgres, or in-memory usage.",
    tech: ["TypeScript", "NPM Package", "LLM Tooling", "Storage Adapters", "Testing"],
    category: "Open Source",
    impact: "v1.0.0, zero dependencies, 253 tests, 347 KB package",
    github: "https://github.com/sri11223/ContextWeaver",
    demo: "https://www.npmjs.com/package/context-weaver",
    color: "from-primary to-secondary",
  },
  {
    title: "TypeWeaver",
    description:
      "CLI tool that auto-generates TypeScript interfaces from ORM schemas so backend and frontend types stay in sync.",
    longDescription:
      "Built a developer tool with init, generate, watch, verify, info, and clean commands. Supports Prisma and Mongoose, safe writes, backups, multi-output paths, watch mode under 500ms, and flexible single-file or per-model generated type outputs.",
    tech: ["TypeScript", "CLI", "Prisma", "Mongoose", "Code Generation", "NPM Package"],
    category: "Open Source",
    impact: "Prisma + Mongoose ready, watch mode, verify command for CI",
    demo: "https://www.npmjs.com/package/typeweaver",
    color: "from-secondary to-accent",
  },
  {
    title: "Text Verification API",
    description:
      "FastAPI service for text validation and verification workflows with a backend-first architecture.",
    longDescription:
      "A Python API project focused on validating submitted text and exposing verification logic through clean service endpoints.",
    tech: ["Python", "FastAPI", "API Design"],
    category: "Backend",
    impact: "Reusable verification service",
    github: "https://github.com/sri11223/textverfication",
  },
  {
    title: "Weekend Manager",
    description:
      "Smart weekend-planning web app for organizing activities, preferences, and personal productivity flows.",
    longDescription:
      "A full-stack planning application built around everyday productivity and weekend scheduling workflows.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Web App",
    impact: "Personal productivity tool",
    github: "https://github.com/sri11223/weekend-manager-app",
  },
  {
    title: "HackPrix Theme",
    description:
      "Responsive hackathon website theme with a modern React and Tailwind interface.",
    longDescription:
      "A frontend theme for hackathon websites, including event-focused sections and responsive UI patterns.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    category: "Frontend",
    impact: "Reusable hackathon site template",
    github: "https://github.com/sri11223/hackprix-theme",
  },
  {
    title: "Bus Reservation System",
    description:
      "Full-stack bus booking platform with authentication, seat selection, and booking management flows.",
    longDescription:
      "A learning project from the MetLife period, built to practice full-stack data modeling and reservation workflows.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    category: "Full Stack",
    impact: "End-to-end booking workflow",
    github: "https://github.com/sri11223/busreservation_Metlife",
  },
  {
    title: "Money Manager",
    description:
      "Personal finance tracker for expenses, budgets, and categorized money-management workflows.",
    longDescription:
      "A React and Redux application for tracking daily expenses and organizing personal finance data.",
    tech: ["React", "Redux", "LocalStorage"],
    category: "Web App",
    impact: "Personal finance workflow",
    github: "https://github.com/sri11223/moneymanger",
  },
  {
    title: "Twitter API Clone",
    description:
      "Backend API clone for social posting, profile interactions, and relational data modeling.",
    longDescription:
      "A Node.js and PostgreSQL backend project focused on API design, relational schema modeling, and social-network endpoints.",
    tech: ["Node.js", "PostgreSQL", "REST APIs"],
    category: "Backend",
    impact: "API design and SQL practice",
    github: "https://github.com/sri11223/twitter-api",
  },
];

export const featuredProjects = allProjects.filter((project) => project.featured);

export const projectFilters = [
  "All",
  "AI Safety",
  "Agentic AI",
  "Data + AI",
  "Freelance",
  "FinTech",
  "Open Source",
  "Backend Systems",
  "Work Project",
  "Collaboration",
  "Full Stack",
  "Frontend",
  "Backend",
  "Web App",
  "React",
  "Node.js",
  "Python",
];
