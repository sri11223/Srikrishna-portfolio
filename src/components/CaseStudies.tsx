import { ArrowRight, ExternalLink, Github, GitBranch, Layers, Radar, ShieldCheck, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sentinelArchitectureLink = "https://excalidraw.com/#json=cz1k3Xt3lgb_DrK9QSKXD,FmcukSfNvC595sJ7bp09jQ";

const caseStudies = [
  {
    title: "SENTINEL AI Agent Safety Platform",
    eyebrow: "AI safety | Multi-agent oversight | OpenEnv finalist",
    problem:
      "As teams deploy fleets of AI agents, the hard problem becomes supervision: stopping hallucinated, over-confident, or unsafe agent actions before they execute.",
    build:
      "Built a trained oversight layer that intercepts worker proposals, checks evidence, applies constitutional safety rules, updates trust memory, and produces structured approve, block, redirect, reassign, or flag decisions.",
    architecture: [
      "Worker proposal enters the pre-execution gate",
      "Constitutional checks score blast radius, evidence, escalation, reversibility, and domain competence",
      "SENTINEL returns a structured oversight decision with required evidence and worker feedback",
      "Digital Twin replay measures counterfactual damage if the action bypassed oversight",
    ],
    metrics: ["97.7% threat detection", "94.7% damage prevention", "340 RL training steps", "REST, MCP, and A2A protocols"],
    tech: ["Python", "FastAPI", "RL", "GRPO", "HuggingFace", "Docker", "MCP", "A2A"],
    github: "https://github.com/sri11223/openEnv",
    live: "https://huggingface.co/spaces/srikrishna2005/openenv",
    architectureLink: sentinelArchitectureLink,
    icon: ShieldCheck,
    color: "border-primary",
    accent: "text-primary",
  },
  {
    title: "Orchestrate Support Triage Agent",
    eyebrow: "Agentic support | Hybrid RAG | Verifier-first automation",
    problem:
      "Support agents fail when they hallucinate answers, follow prompt injection, or respond without evidence. This system escalates when the corpus cannot safely support an answer.",
    build:
      "Built a deterministic 7-stage ticket pipeline: sanitize, classify traps, retrieve evidence, generate grounded replies, verify adversarially, normalize labels, and write traceable CSV output.",
    architecture: [
      "Sanitize input with Unicode cleanup, PII redaction, and language detection",
      "Classify traps before retrieval for prompt injection, system harm, fraud, outages, and unsupported tickets",
      "Fuse BM25 and BGE dense retrieval with reciprocal rank fusion and cross-encoder rerank",
      "Generate strict Pydantic JSON, verify with an adversarial critic, and self-heal once before escalation",
    ],
    metrics: ["100/100 scorecard", "0 prompt-injection failures", "29 tickets processed concurrently", "Exact-quote receipts on replies"],
    tech: ["Python", "FastAPI", "BM25", "BGE", "Cross-Encoder", "Pydantic", "AsyncIO"],
    github: "https://github.com/sri11223/triage-orchestrate",
    live: "",
    architectureLink: "",
    icon: Radar,
    color: "border-secondary",
    accent: "text-secondary",
  },
  {
    title: "GraphMind AI",
    eyebrow: "SAP O2C analytics | Knowledge graph | NL-to-SQL",
    problem:
      "SAP Order-to-Cash data is relational and hard to inspect quickly. Business users need to trace orders, deliveries, invoices, journal entries, and payments without writing SQL by hand.",
    build:
      "Built a live graph analytics app that ingests SAP O2C transactional data, creates a NetworkX knowledge graph, renders 2D/3D force layouts, and answers natural language questions with Groq-backed SQL generation plus guardrails.",
    architecture: [
      "React frontend renders 2D/3D force-directed graph views with node search, type filters, PathFinder tracing, and node inspection",
      "FastAPI exposes graph, chat, REST, and WebSocket endpoints for streamed query progress and markdown answers",
      "SQLite stores 19 tables, 4 analytics views, indexes, and WAL-mode reads for SAP O2C data exploration",
      "Groq LLM converts natural language to SQL, executes validated SELECT-only queries, interprets results, and auto-retries bad SQL",
    ],
    metrics: ["669 graph nodes", "19 tables + 4 views", "8 SAP entity types", "Vercel frontend + Render API"],
    tech: ["React", "TypeScript", "FastAPI", "NetworkX", "SQLite", "Groq", "WebSockets", "Three.js"],
    github: "https://github.com/sri11223/graphmind_ai",
    live: "https://graphmind-ai-sigma.vercel.app/",
    architectureLink: "https://github.com/sri11223/graphmind_ai/blob/main/docs/architecture.md",
    apiDocs: "https://graphmind-ai.onrender.com/docs",
    icon: Layers,
    color: "border-accent",
    accent: "text-accent",
  },
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-32 px-4 bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r-lg mb-6">
            <span className="text-sm font-bold text-primary">FEATURED DEEP DIVES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-normal">
            Projects Worth <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Opening</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Two public projects with real architecture, evaluation, and proof links instead of vague portfolio cards.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <article
                key={study.title}
                className={`bg-card rounded-lg border-2 ${study.color} overflow-hidden animate-pop-in`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="grid xl:grid-cols-[0.95fr_1.05fr]">
                  <div className="p-8 lg:p-10 border-b-2 xl:border-b-0 xl:border-r-2 border-border">
                    <div className="flex items-start justify-between gap-5 mb-6">
                      <div>
                        <Badge variant="outline" className={`${study.color} ${study.accent} mb-4`}>
                          {study.eyebrow}
                        </Badge>
                        <h3 className="text-3xl md:text-4xl font-black tracking-normal">{study.title}</h3>
                      </div>
                      <div className="p-4 bg-background rounded-lg border border-border">
                        <Icon className={`h-8 w-8 ${study.accent}`} />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Layers className={`h-5 w-5 ${study.accent}`} />
                          <h4 className="font-black">Problem</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Workflow className={`h-5 w-5 ${study.accent}`} />
                          <h4 className="font-black">What I Built</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{study.build}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-8">
                      {study.tech.map((tech) => (
                        <Badge key={tech} className="bg-background border border-border text-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <GitBranch className={`h-5 w-5 ${study.accent}`} />
                        <h4 className="font-black">Architecture Flow</h4>
                      </div>
                      <div className="grid gap-3">
                        {study.architecture.map((step, stepIndex) => (
                          <div key={step} className="flex gap-3">
                            <div className={`w-8 h-8 rounded-lg border-2 ${study.color} ${study.accent} font-black flex items-center justify-center flex-shrink-0`}>
                              {stepIndex + 1}
                            </div>
                            <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {study.metrics.map((metric) => (
                        <div key={metric} className="p-4 bg-background rounded-lg border border-border">
                          <div className={`font-black ${study.accent}`}>{metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                        onClick={() => window.open(study.github, "_blank", "noopener,noreferrer")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      {study.live && (
                        <Button
                          variant="outline"
                          className="border-secondary hover:bg-secondary hover:text-secondary-foreground font-bold"
                          onClick={() => window.open(study.live, "_blank", "noopener,noreferrer")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {study.architectureLink && (
                        <Button
                          variant="outline"
                          className="border-accent hover:bg-accent hover:text-accent-foreground font-bold"
                          onClick={() => window.open(study.architectureLink, "_blank", "noopener,noreferrer")}
                        >
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Architecture
                        </Button>
                      )}
                      {study.apiDocs && (
                        <Button
                          variant="outline"
                          className="border-primary hover:bg-primary hover:text-primary-foreground font-bold"
                          onClick={() => window.open(study.apiDocs, "_blank", "noopener,noreferrer")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          API Docs
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
