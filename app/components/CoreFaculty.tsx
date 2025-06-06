// app/components/CoreFaculty.tsx
import Accordion from "./Accordion";
import facultyData from "../../data/coreFaculty.json";

export default function CoreFaculty() {
  return (
    <Accordion title={facultyData.sectionTitle}>
      <div className="space-y-8">
        {facultyData.faculty.map((f, idx) => (
          <div key={idx} className="space-y-2">
            {f.profileLink ? (
              <a
                href={f.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-secondary hover:text-primary transition-colors"
              >
                {f.name}
              </a>
            ) : (
              <p className="text-2xl font-semibold text-secondary">{f.name}</p>
            )}
            <p className="italic text-base text-neutral-grayDark">{f.role}</p>
            <p className="text-base text-neutral-grayDark leading-relaxed">
              {f.bio}
            </p>
          </div>
        ))}
      </div>
    </Accordion>
  );
}