// app/components/Fellows.tsx
import Accordion from "./Accordion";
import fellowsData from "../../data/fellows.json";

export default function Fellows() {
  const list = Array.isArray(fellowsData.fellowsList) ? fellowsData.fellowsList : [];

  return (
    <Accordion title={fellowsData.sectionTitle || "Fellows"}>
      {list.length === 0 ? (
        <p className="mt-4 text-base text-neutral-grayDark">No fellows listed yet.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {list.map((fellow, idx) => (
            <li key={idx} className="space-y-1">
              <p className="text-lg font-semibold text-secondary">{fellow.name}</p>
              <p className="text-base text-neutral-grayDark">{fellow.background}</p>
              <p className="text-base text-neutral-grayDark">Year: {fellow.year}</p>
            </li>
          ))}
        </ul>
      )}
    </Accordion>
  );
}