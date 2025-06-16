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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 px-4 md:px-8">
          {list.map((fellow, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              {fellow.photo && (
                <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
                  <Image
                    src={fellow.photo}
                    alt={fellow.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              )}
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-900">{fellow.name}</p>
                {fellow.pronouns && (
                  <p className="italic text-sm text-neutral-500">{fellow.pronouns}</p>
                )}
                <p className="text-sm text-neutral-700">{fellow.background}</p>
                <p className="text-sm font-medium text-primary">Year: {fellow.year}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Accordion>
  );
}