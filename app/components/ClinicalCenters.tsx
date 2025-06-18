// app/components/ClinicalCenters.tsx
import Accordion from "./Accordion";
import clinicalData from "../../data/clinicalCenters.json";

export default function ClinicalCenters() {
  return (
    <Accordion title={clinicalData.sectionTitle}>
      <div className="px-4 sm:px-6 lg:px-8">
        <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700 leading-relaxed">
          {Array.isArray(clinicalData.bullets) &&
            clinicalData.bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
        </ul>
      </div>
    </Accordion>
  );
}