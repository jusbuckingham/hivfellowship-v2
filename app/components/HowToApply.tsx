// app/components/HowToApply.tsx
import applyData from "../../data/howToApply.json";

export default function HowToApply() {
  return (
    <section id="how-to-apply" className="py-16 bg-neutral-white">
      <div className="container mx-auto px-4 space-y-6">
        {/* Section Title */}
        <h2 className="section-title text-3xl md:text-4xl text-secondary">
          {applyData.sectionTitle || "How to Apply"}
        </h2>

        {/* Deadline */}
        <p className="mt-4 text-lg text-neutral-grayDark">
          {applyData.deadline}
        </p>

        {/* Eligibility */}
        <div className="space-y-4">
          {applyData.eligibility.map((elig, idx) => (
            <p key={idx} className="text-lg text-neutral-grayDark leading-relaxed">
              {elig}
            </p>
          ))}
        </div>

        {/* Required Documents */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary mt-6">
            Application Requirements
          </h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base md:text-lg text-neutral-grayDark leading-relaxed">
            {applyData.requiredDocuments.map((doc, idx) => (
              <li key={idx}>
                {doc.link ? (
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    {doc.label}
                  </a>
                ) : (
                  doc.label
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Submission Instructions */}
        <div className="space-y-4">
          <p className="text-lg text-neutral-grayDark leading-relaxed">
            {applyData.contactInfo.instructions}
          </p>
          <p className="text-lg text-neutral-grayDark leading-relaxed">
            {applyData.contactInfo.generalInquiries}
          </p>
        </div>
      </div>
    </section>
  );
}