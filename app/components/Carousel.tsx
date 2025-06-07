// app/components/Carousel.tsx
"use client";

import { useState, useEffect } from "react";
import carouselData from "../../data/carousel.json";

export default function Carousel() {
  // 1. Safely grab the array of image URLs
  const images = Array.isArray(carouselData.images) ? carouselData.images : [];
  const [current, setCurrent] = useState(0);

  // 2. Auto-advance every 5 seconds
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // 3. If no images, render nothing (or you could render a placeholder)
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slide as a background-image with fixed height */}
      <div
        className="w-full h-64 md:h-96 bg-center bg-cover transition-opacity duration-500"
        style={{ backgroundImage: `url("${images[current]}")` }}
      />

      {/* Prev button */}
      <button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary-dark bg-opacity-50 text-neutral-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      {/* Next button */}
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary-dark bg-opacity-50 text-neutral-white p-2 rounded-full"
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </div>
  );
}