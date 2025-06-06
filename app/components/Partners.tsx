// app/components/Partners.tsx
import Accordion from "./Accordion";
import partnersData from "../../data/partners.json";

export default function Partners() {
  const list = Array.isArray(partnersData.partnersList) ? partnersData.partnersList : [];

  return (
    <Accordion title={partnersData.sectionTitle || "Partners"}>
      {list.length === 0 ? (
        <p className="mt-4 text-base text-neutral-grayDark">No partners listed yet.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {list.map((p, idx) => (
            <li key={idx} className="space-y-1">
              {p.organization && (
                <p className="text-lg font-semibold text-secondary">{p.organization}</p>
              )}
              {p.description && (
                <p className="text-base text-neutral-grayDark">{p.description}</p>
              )}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  {p.link}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </Accordion>
  );
}