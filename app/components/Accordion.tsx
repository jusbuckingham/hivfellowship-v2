// app/components/Accordion.tsx
"use client";

import { useState, ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-neutral-white rounded-lg shadow-sm mb-6">
      {/* Header Bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex justify-between items-center
          py-4 px-6
          text-xl font-semibold text-secondary
          ${isOpen ? "bg-secondary-light text-white" : "bg-secondary-light bg-opacity-50"}
          hover:bg-secondary hover:text-white
          rounded-t-lg
          transition-colors duration-200
        `}
      >
        {title}
        <span className="text-2xl select-none">{isOpen ? "−" : "+"}</span>
      </button>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="px-6 pb-6 pt-4 border-t border-neutral-grayLight">
          {children}
        </div>
      )}
    </div>
  );
}