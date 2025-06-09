// app/components/Faculty.tsx
"use client";

import Accordion from "./Accordion";
import Image from "next/image";
import facultyData from "../../data/Faculty.json";

export default function Faculty() {
  return (
    <Accordion title={facultyData.sectionTitle}>
      <div className="space-y-12">
        {/* Leadership Team */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.leadershipTeam.map((f, idx) => (
              <div key={idx} className="flex space-x-4 items-start">
                {f.photo && (
                  <div className="flex-shrink-0 w-16 h-16 relative rounded-full overflow-hidden">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>
                )}
                <div className="space-y-1">
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
              <div key={idx} className="flex space-x-4 items-start">
                {f.photo && (
                  <div className="flex-shrink-0 w-16 h-16 relative rounded-full overflow-hidden">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>
                )}
                <div className="space-y-1">
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