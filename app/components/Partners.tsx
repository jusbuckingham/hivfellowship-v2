// app/components/Partners.tsx
"use client";

import Accordion from "./Accordion";
import Image from "next/image";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4 md:px-6">
          {list.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-5 flex flex-col items-center text-center max-w-xs mx-auto space-y-2 hover:shadow-lg transform transition-transform duration-200"
            >
              {p.logo && (
                <div className="w-28 h-28 relative overflow-hidden mb-3 rounded border border-neutral-200">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    width={96}
                    height={96}
                    className="object-contain"
                    priority
                  />
                </div>
              )}
              <p className="text-xl font-semibold text-secondary mb-1">
                {p.name}
              </p>
              <p className="text-sm text-neutral-grayDark leading-relaxed mb-2">
                {p.description}
              </p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-xs hover:underline transition"
                >
                  {p.link}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </Accordion>
  );
}