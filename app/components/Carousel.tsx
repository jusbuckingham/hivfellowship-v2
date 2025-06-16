// app/components/Carousel.tsx
"use client";

import { useState, useEffect } from "react";
import carouselData from "../../data/carousel.json";

const images =
  Array.isArray(carouselData.images) && carouselData.images.length > 0
    ? carouselData.images
    : ["/images/alumni/earl-gerald.jpeg"];

export default function Carousel() {
  // Safely grab image URLs
  // const images = Array.isArray(carouselData.images) ? carouselData.images : [];
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // If no images, render fallback message
  if (images.length === 0)
    return (
      <div className="w-full max-w-4xl mb-10 px-6 sm:px-10 md:px-16 flex justify-center">
        <div
          className="relative w-full max-w-2xl bg-neutral-grayLight rounded-lg overflow-hidden h-64 md:h-80 min-h-[16rem] flex items-center justify-center border border-neutral-300"
        >
          <span className="text-red-600 font-semibold">
            No images available for carousel.
          </span>
        </div>
      </div>
    );

  return (
    <div className="w-full max-w-4xl mb-10 px-6 sm:px-10 md:px-16 flex justify-center">
      {/* Slide card */}
      <div className="relative w-full max-w-sm aspect-[16/9] bg-neutral-grayLight rounded-lg overflow-hidden shadow-md border border-neutral-200 p-2">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Carousel image ${idx + 1}`}
            onError={() => console.error("Image failed to load:", src)}
            aria-hidden={idx !== current}
            className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Prev button */}
        <button
          onClick={() =>
            setCurrent((current - 1 + images.length) % images.length)
          }
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-primary-dark bg-opacity-50 text-neutral-white p-2 rounded-full"
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        {/* Next button */}
        <button
          onClick={() => setCurrent((current + 1) % images.length)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-primary-dark bg-opacity-50 text-neutral-white p-2 rounded-full"
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}