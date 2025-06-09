// app/page.tsx
import Carousel from "./components/Carousel";
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
    <main className="bg-neutral-grayLight min-h-screen">
      {/* Top‐of‐page image slider */}
      <Carousel />

      {/* Centered container for all content sections */}
      <div className="container mx-auto px-4 pt-8 pb-16">
        <Overview />
        <ClinicalCenters />
        <Program />
        <Unique />
        <Faculty />
        <Fellows />
        <Alumni />
        <Partners />
        <HowToApply />
      </div>
    </main>
  );
}