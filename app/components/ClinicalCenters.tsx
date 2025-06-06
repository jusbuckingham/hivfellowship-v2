// app/components/ClinicalCenters.tsx
import Accordion from "./Accordion";
import clinicalData from "../../data/clinicalCenters.json";

export default function ClinicalCenters() {
  return (
    <Accordion title={clinicalData.sectionTitle}>
      <div className="space-y-4 text-lg text-neutral-grayDark leading-relaxed">
        {clinicalData.paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </Accordion>
  );
}