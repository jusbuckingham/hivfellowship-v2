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
                className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm flex flex-col items-center text-center space-y-2 hover:shadow-md transition-shadow duration-300 w-full max-w-sm"
              >
                {f.photo && (
                  <div className="w-28 h-28 relative rounded-full overflow-hidden">
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
                <p className="text-lg font-semibold text-secondary">{f.name}</p>
                <p className="text-sm font-medium text-neutral-700">{f.role}</p>
                <p className="text-sm text-neutral-600">{f.bio}</p>
                {f.pronouns && (
                  <p className="text-xs italic text-neutral-500">({f.pronouns})</p>
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
                className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm flex flex-col items-center text-center space-y-2 hover:shadow-md transition-shadow duration-300 w-full max-w-sm"
              >
                {f.photo && (
                  <div className="w-28 h-28 relative rounded-full overflow-hidden">
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
                <p className="text-lg font-semibold text-secondary">{f.name}</p>
                <p className="text-sm font-medium text-neutral-700">{f.role}</p>
                <p className="text-sm text-neutral-600">{f.bio}</p>
                {f.pronouns && (
                  <p className="text-xs italic text-neutral-500">({f.pronouns})</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Accordion>
  );
}