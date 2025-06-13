// app/components/Faculty.tsx
"use client";

import Accordion from "./Accordion";
import Image from "next/image";
import facultyData from "../../data/faculty.json";

export default function Faculty() {
  return (
    <Accordion title={facultyData.sectionTitle}>
      <div className="px-6 space-y-12">
        {/* Leadership Team */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {facultyData.leadershipTeam.map((f, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center max-w-xs"
              >
                {f.photo && (
                  <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                )}
                <p className="text-xl font-semibold text-secondary mb-0.5">{f.name}</p>
                <p className="text-base font-medium text-secondary mb-1.5">{f.role}</p>
                <p className="text-base text-neutral-grayDark leading-relaxed mb-2">{f.bio}</p>
                {f.pronouns && (
                  <p className="text-sm italic text-neutral-grayDark">({f.pronouns})</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Team */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Clinical Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {facultyData.clinicalTeam.map((f, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center max-w-xs"
              >
                {f.photo && (
                  <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                )}
                <p className="text-xl font-semibold text-secondary mb-0.5">{f.name}</p>
                <p className="text-base font-medium text-secondary mb-1.5">{f.role}</p>
                <p className="text-base text-neutral-grayDark leading-relaxed mb-2">{f.bio}</p>
                {f.pronouns && (
                  <p className="text-sm italic text-neutral-grayDark">({f.pronouns})</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Accordion>
  );
}