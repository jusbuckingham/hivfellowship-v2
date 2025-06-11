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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-6">
          {list.map((p, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 text-center">
              {p.logo && (
                <div className="w-20 h-20 relative rounded-full overflow-hidden">
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
              <p className="text-lg font-semibold text-secondary hover:text-primary transition-colors">
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
            </div>
          ))}
        </div>
      )}
    </Accordion>
  );
}