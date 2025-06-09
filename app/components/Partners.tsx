// app/components/Partners.tsx
"use client";

import Accordion from "./Accordion";
import partnersData from "../../data/partners.json";

export default function Partners() {
  const list = Array.isArray(partnersData) ? partnersData : [];

  return (
    <Accordion title="Partners">
      {list.length === 0 ? (
        <p className="mt-4 text-base text-neutral-grayDark">
          No partners listed yet.
        </p>
      ) : (
        <ul className="mt-6 space-y-4">
          {list.map((p, idx) => (
            <li key={idx} className="space-y-1">
              <p className="text-lg font-semibold text-secondary">
                {p.name}
              </p>
              <p className="text-base text-neutral-grayDark">
                {p.description}
              </p>
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