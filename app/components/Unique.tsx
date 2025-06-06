// app/components/Unique.tsx
import Accordion from "./Accordion";
import uniqueData from "../../data/unique.json";

export default function Unique() {
  return (
    <Accordion title={uniqueData.sectionTitle}>
      <ul className="list-disc list-inside mt-6 space-y-2 text-base md:text-lg text-neutral-grayDark leading-relaxed">
        {uniqueData.bullets.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </Accordion>
  );
}