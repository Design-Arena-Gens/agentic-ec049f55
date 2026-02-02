import { FeatureCard } from "@/components/FeatureCard";
import { InsightCard } from "@/components/InsightCard";
import { WorkflowStep } from "@/components/WorkflowStep";
import { features, insights, workflow } from "@/lib/data";

export default function HomePage() {
  return (
    <div id="start" className="page-content">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-eyebrow">Agent-in-the-loop toolkit</p>
            <h1>
              Plan, build, test, and deploy without leaving the command line.
            </h1>
            <p>
              This interactive workspace highlights how an autonomous CLI agent
              shepherds a project from an initial prompt to a production-ready
              release, staying transparent about every decision.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#workflow">
                View workflow map
              </a>
              <a className="secondary-action" href="#capabilities">
                Explore capabilities
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-widget">
              <p className="widget-label">Current Status</p>
              <p className="widget-value">Implementation · On Track</p>
              <div className="widget-steps">
                {workflow.slice(0, 5).map((step, index) => (
                  <div key={step.title} className="widget-step">
                    <span
                      aria-hidden
                      className={`widget-dot ${index <= 2 ? "is-complete" : ""}`}
                    />
                    <div>
                      <p>{step.title}</p>
                      <span>{step.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="section section-workflow">
        <div className="section-heading">
          <h2>Workflow overview</h2>
          <p>
            Each milestone keeps scope, validation, and results aligned. Hover a
            step to see what the agent is accountable for delivering.
          </p>
        </div>
        <ol className="workflow-grid">
          {workflow.map((step, index) => (
            <WorkflowStep key={step.title} index={index} {...step} />
          ))}
        </ol>
      </section>

      <section id="capabilities" className="section section-features">
        <div className="section-heading">
          <h2>Capabilities unlocked</h2>
          <p>
            Practical automation primitives that keep human collaborators in the
            loop without slowing them down.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              highlights={feature.highlights}
              icon={<span aria-hidden>{feature.icon}</span>}
            />
          ))}
        </div>
      </section>

      <section id="insights" className="section section-insights">
        <div className="section-heading">
          <h2>Operational insights</h2>
          <p>
            Observability surfaces the state of deliveries in real time so you can
            make confident calls around release readiness.
          </p>
        </div>
        <div className="insight-grid">
          {insights.map((insight) => (
            <InsightCard key={insight.title} {...insight} />
          ))}
        </div>
      </section>
    </div>
  );
}
