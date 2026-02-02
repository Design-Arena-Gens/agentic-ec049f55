type InsightCardProps = {
  title: string;
  metric: string;
  description: string;
  trend: "up" | "steady" | "down";
};

export function InsightCard({
  title,
  metric,
  description,
  trend,
}: InsightCardProps) {
  const trendLabel =
    trend === "up" ? "Improving" : trend === "down" ? "Needs attention" : "Stable";

  return (
    <article className={`insight-card insight-trend-${trend}`}>
      <header>
        <p className="insight-label">{trendLabel}</p>
        <h3>{title}</h3>
      </header>
      <p className="insight-metric">{metric}</p>
      <p className="insight-description">{description}</p>
    </article>
  );
}
