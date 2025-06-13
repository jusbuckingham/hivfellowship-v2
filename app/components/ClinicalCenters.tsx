// app/components/ClinicalCenters.tsx
import Accordion from "./Accordion";
import clinicalData from "../../data/clinicalCenters.json";

export default function ClinicalCenters() {
  return (
    <Accordion title={clinicalData.sectionTitle}>
      <ul className="list-disc pl-4 space-y-3 text-base text-neutral-grayDark leading-relaxed">
        {Array.isArray(clinicalData.bullets) &&
          clinicalData.bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
      </ul>
    </Accordion>
  );
}