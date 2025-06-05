// app/components/Hero.tsx
import Link from "next/link";
import heroData from "../../data/hero.json";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${heroData.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative flex h-[85vh] items-center justify-center text-center text-neutral-white"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          {heroData.headline}
        </h1>
        <p className="text-lg mb-8">{heroData.subheadline}</p>
        <Link
          href={heroData.ctaLink}
          className="inline-block bg-accent hover:bg-accent-dark px-8 py-3 rounded-md text-lg font-semibold transition-colors"
        >
          {heroData.ctaText}
        </Link>
      </div>
    </section>
  );
}