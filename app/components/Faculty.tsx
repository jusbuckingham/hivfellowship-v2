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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.leadershipTeam.map((f, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center space-y-4">
                {f.photo && (
                  <div className="w-20 h-20 relative rounded-full overflow-hidden mb-2">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-secondary">
                    {f.name}
                  </p>
                  <p className="italic text-base text-neutral-grayDark">
                    {f.role}
                  </p>
                  <p className="text-base text-neutral-grayDark">
                    {f.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Team */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Clinical Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.clinicalTeam.map((f, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center space-y-4">
                {f.photo && (
                  <div className="w-20 h-20 relative rounded-full overflow-hidden mb-2">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-secondary">
                    {f.name}
                  </p>
                  <p className="italic text-base text-neutral-grayDark">
                    {f.role}
                  </p>
                  <p className="text-base text-neutral-grayDark">
                    {f.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Accordion>
  );
}