import { Activity, Database, Gauge, GitFork, GitPullRequest, Package, ShieldCheck, Users } from "lucide-react";

export const ProofMetrics = () => {
  const metrics = [
    { value: "97.7%", label: "SENTINEL threat detection", icon: ShieldCheck, color: "text-primary" },
    { value: "94.7%", label: "Counterfactual damage prevented", icon: Activity, color: "text-secondary" },
    { value: "100/100", label: "Orchestrate scorecard", icon: Gauge, color: "text-accent" },
    { value: "669", label: "GraphMind SAP O2C graph nodes", icon: Database, color: "text-primary" },
    { value: "76", label: "TaskFlow REST endpoints", icon: GitFork, color: "text-accent" },
    { value: "60+", label: "Evently backend endpoints", icon: Database, color: "text-primary" },
    { value: "64", label: "GitHub repositories", icon: GitFork, color: "text-secondary" },
    { value: "25K+", label: "Artgram customers on live client platform", icon: Users, color: "text-accent" },
    { value: "PWA", label: "FinBoard installable offline finance dashboard", icon: Activity, color: "text-primary" },
    { value: "253", label: "ContextWeaver package tests", icon: Gauge, color: "text-secondary" },
    { value: "0", label: "Prompt-injection failures", icon: ShieldCheck, color: "text-primary" },
    { value: "50K+", label: "Users served through MetLife AI work", icon: Users, color: "text-secondary" },
    { value: "45%", label: "Backend latency reduction at Outbox", icon: GitPullRequest, color: "text-accent" },
    { value: "40%", label: "Release-cycle reduction at MetLife", icon: Activity, color: "text-primary" },
    { value: "1,500+", label: "Open-source package downloads", icon: Package, color: "text-secondary" },
  ];

  return (
    <section id="proof" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 border-l-4 border-accent rounded-r-lg mb-6">
            <span className="text-sm font-bold text-accent">MEASURED IMPACT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-normal">
            Impact You Can <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Verify</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={`${metric.value}-${metric.label}`}
                className="bg-card p-6 rounded-lg border-2 border-border hover:border-primary/60 transition-all animate-pop-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Icon className={`h-8 w-8 ${metric.color} mb-5`} />
                <div className={`text-4xl font-black mb-2 ${metric.color}`}>{metric.value}</div>
                <div className="text-sm text-muted-foreground font-semibold leading-relaxed">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
