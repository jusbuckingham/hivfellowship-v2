// app/components/Alumni.tsx
import Accordion from "./Accordion";
import alumniData from "../../data/alumni.json";

export default function Alumni() {
  const list = Array.isArray(alumniData.alumniList) ? alumniData.alumniList : [];

  return (
    <Accordion title={alumniData.sectionTitle || "Alumni"}>
      {list.length === 0 ? (
        <p className="mt-4 text-base text-neutral-grayDark">No alumni listed yet.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {list.map((alum, idx) => (
            <li key={idx} className="space-y-1">
              <p className="text-lg font-semibold text-secondary">{alum.name}</p>
              <p className="text-base text-neutral-grayDark">{alum.currentPosition}</p>
              <p className="text-base text-neutral-grayDark">Class of {alum.graduationYear}</p>
            </li>
          ))}
        </ul>
      )}
    </Accordion>
  );
}