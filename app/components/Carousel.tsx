// app/components/Carousel.tsx
"use client";

import { useState } from "react";
import carouselData from "../../data/carousel.json";

export default function Carousel() {
  // Safely read the array (or fall back to empty array)
  const images = Array.isArray(carouselData.images) ? carouselData.images : [];
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // If no images are defined, render nothing
  if (length === 0) return null;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full">
      {/* Previous Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary-dark bg-opacity-50 text-neutral-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      {/* Render each image; only the 'current' index is visible */}
      {images.map((src, idx) => (
        <div key={idx} className={idx === current ? "block" : "hidden"}>
          <img
            src={src}
            alt={`Slide ${idx + 1}`}
            className="w-full h-64 object-cover md:h-96"
          />
        </div>
      ))}

      {/* Next Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary-dark bg-opacity-50 text-neutral-white p-2 rounded-full"
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </div>
  );
}