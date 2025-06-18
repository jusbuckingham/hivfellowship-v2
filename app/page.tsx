// app/page.tsx
import Carousel from "./components/Carousel";
import VideoEmbed from "./components/VideoEmbed";
import Overview from "./components/Overview";
import ClinicalCenters from "./components/ClinicalCenters";
import Program from "./components/Program";
import Unique from "./components/Unique";
import Faculty from "./components/Faculty";
import Fellows from "./components/Fellows";
import Alumni from "./components/Alumni";
import Partners from "./components/Partners";
import HowToApply from "./components/HowToApply";

// New internal Section wrapper for consistent layout
const Section = ({ children }: { children: React.ReactNode }) => (
  <section>
    <div className="border-t border-neutral-300 pt-16">
      {children}
    </div>
  </section>
);

export default function HomePage() {
  return (
    <div id="__next">
      <main className="bg-neutral-grayLight min-h-screen text-neutral-800">
        {/* Top carousel */}
        <div className="px-4 md:px-8 pt-8 space-y-12">
          <Carousel />
        </div>

        {/* Main content sections */}
        <div className="container mx-auto px-4 md:px-8 py-16 space-y-24">
          <Section><Overview /></Section>
          <Section><ClinicalCenters /></Section>
          <Section><Program /></Section>
          <Section><Unique /></Section>
          <Section><Faculty /></Section>
          <Section><Fellows /></Section>
          <Section><Alumni /></Section>
          <Section><Partners /></Section>
          <Section><HowToApply /></Section>
          <Section><VideoEmbed /></Section>
        </div>
      </main>
    </div>
  );
}