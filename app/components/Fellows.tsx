// app/components/Fellows.tsx
import Accordion from "./Accordion";
import Image from "next/image";
import fellowsData from "../../data/fellows.json";

export default function Fellows() {
  const list = Array.isArray(fellowsData.fellowsList) ? fellowsData.fellowsList : [];

  return (
    <Accordion title={fellowsData.sectionTitle || "Fellows"}>
      {list.length === 0 ? (
        <p className="mt-4 text-base text-neutral-grayDark">No fellows listed yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {list.map((fellow, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2 text-center">
              {fellow.photo && (
                <div className="w-24 h-24 relative rounded-full overflow-hidden mx-auto">
                  <Image
                    src={fellow.photo}
                    alt={fellow.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              )}
              <p className="text-lg font-semibold text-secondary">{fellow.name}</p>
              <p className="text-base text-neutral-grayDark">{fellow.background}</p>
              <p className="text-base text-neutral-grayDark">Year: {fellow.year}</p>
            </div>
          ))}
        </div>
      )}
    </Accordion>
  );
}