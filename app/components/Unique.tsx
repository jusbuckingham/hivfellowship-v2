// app/components/Unique.tsx
import Accordion from "./Accordion";
import uniqueData from "../../data/unique.json";

export default function Unique() {
  return (
    <Accordion title={uniqueData.sectionTitle}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mt-6">
        <ul className="list-disc pl-5 space-y-3 text-base text-neutral-grayDark leading-relaxed">
          {uniqueData.bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </Accordion>
  );
}