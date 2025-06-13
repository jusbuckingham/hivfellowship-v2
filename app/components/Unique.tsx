// app/components/Unique.tsx
import Accordion from "./Accordion";
import uniqueData from "../../data/unique.json";

export default function Unique() {
  return (
    <Accordion title={uniqueData.sectionTitle}>
      <ul className="list-disc pl-5 mt-6 space-y-3 text-base text-neutral-grayDark leading-relaxed">
        {uniqueData.bullets.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </Accordion>
  );
}