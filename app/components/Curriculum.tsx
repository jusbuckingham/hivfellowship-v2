// app/components/Curriculum.tsx
import Accordion from "./Accordion";
import curriculumData from "../../data/curriculum.json";

export default function Curriculum() {
  return (
    <Accordion title={curriculumData.sectionTitle}>
      <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-neutral-grayDark leading-relaxed">
        {curriculumData.bullets.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </Accordion>
  );
}