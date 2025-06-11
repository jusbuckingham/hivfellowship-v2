// app/components/Carousel.tsx
"use client";

import { useState, useEffect } from "react";
import carouselData from "../../data/carousel.json";

export default function Carousel() {
  // Safely grab image URLs
  const images = Array.isArray(carouselData.images) ? carouselData.images : [];
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // If no images, render nothing
  if (images.length === 0) return null;

  return (
    <div className="relative w-full mb-8 px-4">
      {/* Slide card */}
      <div className="w-full max-w-screen-lg mx-auto bg-neutral-grayLight rounded-lg overflow-hidden h-48 md:h-64">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Prev button */}
      <button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-primary-dark bg-opacity-50 text-neutral-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      {/* Next button */}
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-primary-dark bg-opacity-50 text-neutral-white p-2 rounded-full"
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </div>
  );
}