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
        <div className="space-y-12">
          {cohorts.map((cohort) => (
            <div key={cohort.year}>
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Class of {cohort.year}
              </h3>
              <div className="space-y-6">
                {cohort.alumni.map((a, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-2 text-center">
                    {a.photo && (
                      <div className="w-24 h-24 relative rounded-full overflow-hidden mx-auto">
                        <Image
                          src={a.photo}
                          alt={a.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-full"
                          priority
                        />
                      </div>
                    )}
                    <p className="text-lg font-semibold text-secondary">
                      {a.name}
                    </p>
                    {a.title && (
                      <p className="italic text-base text-neutral-grayDark">
                        {a.title}
                      </p>
                    )}
                    {a.institution && (
                      <p className="text-base text-neutral-grayDark">
                        {a.institution}
                      </p>
                    )}
                    {a.location && (
                      <p className="text-base text-neutral-grayDark">
                        {a.location}
                      </p>
                    )}
                    {a.pronouns && (
                      <p className="text-base text-neutral-grayDark">
                        {a.pronouns}
                      </p>
                    )}
                    {a.link && (
                      <a
                        href={a.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-colors"
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