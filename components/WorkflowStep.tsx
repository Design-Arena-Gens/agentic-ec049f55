type WorkflowStepProps = {
  index: number;
  title: string;
  description: string;
  deliverables: string[];
};

export function WorkflowStep({
  index,
  title,
  description,
  deliverables,
}: WorkflowStepProps) {
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <li className="workflow-step">
      <div className="workflow-badge">{stepNumber}</div>
      <div className="workflow-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {deliverables.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
