// app/components/About.tsx
import aboutData from "../../data/about.json";

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-white">
      <div className="container">
        <h2 className="section-title text-4xl">About Our Fellowship</h2>
        <div className="mt-6 space-y-6 text-neutral-grayDark">
          {aboutData.paragraphs.map((para, idx) => (
            <p key={idx} className="text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}