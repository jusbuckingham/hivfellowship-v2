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
    <div className="relative z-0 w-full max-w-screen-lg mx-auto mb-8">
      {/* Slide container with fixed height, flex centering, and uniform background */}
      <div className="w-full h-32 md:h-48 lg:h-56 flex items-center justify-center bg-neutral-grayLight">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

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