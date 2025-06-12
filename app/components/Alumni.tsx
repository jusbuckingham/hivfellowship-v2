// app/components/Alumni.tsx
"use client";

import Accordion from "./Accordion";
import Image from "next/image";
import alumniData from "../../data/alumni.json";

export default function Alumni() {
  const cohorts = Array.isArray(alumniData.cohorts) ? alumniData.cohorts : [];

  return (
    <Accordion title={alumniData.sectionTitle || "Alumni"}>
      {cohorts.length === 0 ? (
        <p className="mt-4 text-base text-neutral-grayDark">
          No alumni listed yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4 md:px-6">
          {cohorts.map((cohort) => (
            <div key={cohort.year}>
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Class of {cohort.year}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cohort.alumni.map((a, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center max-w-xs mx-auto space-y-1 hover:shadow-lg hover:-translate-y-1 transform transition-transform"
                  >
                    {a.photo && (
                      <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
                        <Image
                          src={a.photo}
                          alt={a.name}
                          width={64}
                          height={64}
                          className="rounded-full object-cover"
                          priority
                        />
                      </div>
                    )}
                    <p className="text-xl font-semibold text-secondary">{a.name}</p>
                    {a.title && (
                      <p className="italic text-sm text-neutral-grayDark">{a.title}</p>
                    )}
                    {a.institution && (
                      <p className="text-sm text-neutral-grayDark">{a.institution}</p>
                    )}
                    {a.location && (
                      <p className="text-sm text-neutral-grayDark">{a.location}</p>
                    )}
                    {a.pronouns && (
                      <p className="italic text-sm text-neutral-grayDark">{a.pronouns}</p>
                    )}
                    {a.link && (
                      <a
                        href={a.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition"
                      >
                        {a.link}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Accordion>
  );
}