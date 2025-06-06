// app/components/Overview.tsx
import overviewData from "../../data/overview.json";

export default function Overview() {
  return (
    <section id="overview" className="py-16 bg-neutral-white">
      <div className="container mx-auto px-4 space-y-6">
        {/* Header */}
        <h2 className="section-title text-3xl md:text-4xl text-secondary">
          {overviewData.headers[0]}
        </h2>

        {/* About the Program paragraphs */}
        <div className="mt-6 space-y-4 text-lg text-neutral-grayDark leading-relaxed">
          {overviewData.aboutProgram.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}