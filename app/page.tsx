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

export default function HomePage() {
  return (
    <main className="bg-neutral-grayLight min-h-screen text-neutral-800">
      {/* Top carousel and video section */}
      <div className="px-4 md:px-8 pt-8 space-y-12">
        <Carousel />
      </div>

      {/* Main content sections */}
      <div className="container mx-auto px-4 md:px-8 py-16 space-y-24">
        <section>
          <div className="border-t border-neutral-300 pt-16">
            <Overview />
          </div>
        </section>
        <section>
          <div className="border-t border-neutral-300 pt-16">
            <ClinicalCenters />
          </div>
        </section>
        <section>
          <div className="border-t border-neutral-300 pt-16">
            <Program />
          </div>
        </section>
        <section>
          <div className="border-t border-neutral-300 pt-16">
            <Unique />
          </div>
        </section>
        <section>
          <div className="border-t border-neutral-300 pt-16">
            <Faculty />
          </div>
        </section>
        <section>
          <div className="border-t border-neutral-300 pt-16">
            <Fellows />
          </div>
        </section>
        <section>
          <div className="border-t border-neutral-300 pt-16">
            <Alumni />
          </div>
        </section>
        <section>
          <div className="border-t border-neutral-300 pt-16">
            <Partners />
          </div>
        </section>
        <section>
          <div className="border-t border-neutral-300 pt-16">
            <HowToApply />
          </div>
        </section>
        <section>
          <div className="border-t border-neutral-300 pt-16">
            <VideoEmbed />
          </div>
        </section>
      </div>
    </main>
  );
}