// app/page.tsx
import Carousel from "./components/Carousel";
import Overview from "./components/Overview";
import ClinicalCenters from "./components/ClinicalCenters";
import Curriculum from "./components/Curriculum";
import Unique from "./components/Unique";
import CoreFaculty from "./components/CoreFaculty";
import Fellows from "./components/Fellows";
import Alumni from "./components/Alumni";
import Partners from "./components/Partners";
import HowToApply from "./components/HowToApply";

export default function HomePage() {
  return (
    <main>
      {/* Top-of-page carousel */}
      <Carousel />

      {/* Collapsible Sections */}
      <div className="container mx-auto px-4">
        <Overview />
        <ClinicalCenters />
        <Curriculum />
        <Unique />
        <CoreFaculty />
        <Fellows />
        <Alumni />
        <Partners />
        <HowToApply />
      </div>
    </main>
  );
}