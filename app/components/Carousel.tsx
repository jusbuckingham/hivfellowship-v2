// app/components/Carousel.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      <div className="w-full max-w-4xl mx-auto mb-10 px-4 sm:px-6 md:px-8 lg:px-12">
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
    <div className="w-full max-w-3xl mx-auto mb-10 px-4 sm:px-6 md:px-8">
      {/* Slide card */}
      <div className="relative w-full aspect-[16/9] bg-neutral-grayLight rounded-md overflow-hidden shadow-md border border-neutral-200 mx-auto">
        {images.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Carousel image ${idx + 1}`}
            fill
            unoptimized
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