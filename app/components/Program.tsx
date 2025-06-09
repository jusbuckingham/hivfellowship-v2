// app/components/Program.tsx
import Accordion from "./Accordion";
import programData from "../../data/program.json";

export default function Program() {
  return (
    <Accordion title={programData.sectionTitle}>
      <ul className="list-disc list-inside space-y-2 text-neutral-grayDark">
        {programData.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Accordion>
  );
}