// app/components/ClinicalCenters.tsx
import Accordion from "./Accordion";
import clinicalData from "../../data/clinicalCenters.json";

export default function ClinicalCenters() {
  return (
    <Accordion title={clinicalData.sectionTitle}>
      <ul className="list-disc list-inside space-y-2 text-lg text-neutral-grayDark leading-relaxed">
        {Array.isArray(clinicalData.bullets) &&
          clinicalData.bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
      </ul>
    </Accordion>
  );
}