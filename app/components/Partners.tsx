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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-6 md:px-12">
          {list.map((p, idx) => (
            <div key={idx} className="border-b border-neutral-300 pb-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center space-y-2 hover:shadow-lg transition duration-300">
                {p.logo && (
                  <div className="w-24 h-24 relative overflow-hidden rounded-md border border-neutral-200">
                    <Image
                      src={p.logo}
                      alt={`${p.name} logo`}
                      width={96}
                      height={96}
                      className="rounded object-contain mb-2"
                      priority
                    />
                  </div>
                )}
                <p className="text-lg font-bold text-secondary">{p.name}</p>
                <p className="text-sm text-neutral-grayDark">{p.description}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Accordion>
  );
}