// app/components/Overview.tsx
import overviewData from "../../data/overview.json";

export default function Overview() {
  return (
    <section id="overview" className="py-16 bg-neutral-white">
      <div className="container mx-auto px-6 space-y-10">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-secondary border-b pb-4 border-neutral-light">
          {overviewData.sectionTitle}
        </h2>

        {/* About the Program paragraphs */}
        <div className="grid gap-6 max-w-3xl">
          {overviewData.aboutProgram.map((line, idx) => (
            <div
              key={idx}
              className="bg-neutral-100 p-6 rounded-md shadow-sm text-neutral-grayDark text-base leading-relaxed"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}