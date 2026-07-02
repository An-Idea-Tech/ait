"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function Confusion({ confusionData }) {
  if (!confusionData) return null;

  return (
    <div
      id={confusionData.id}
      className="w-full scroll-mt-32 md:scroll-mt-36 bg-bg-primary text-text-primary transition-colors duration-300 py-16 sm:py-20 md:py-28 flex flex-col items-center justify-center text-center border-t border-border-primary"
    >
      {/* Title */}
      <h2 className="title mb-6 sm:mb-8">
        {confusionData.title}
      </h2>

      {/* Description */}
      <p className="description max-w-3xl mx-auto px-4 mb-10 sm:mb-12 text-text-secondary leading-relaxed">
        {confusionData.description}
      </p>

      {/* Buttons Row */}
      {confusionData.buttons && confusionData.buttons.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          {confusionData.buttons.map((btn) => (
            <Button
              key={btn.id}
              text={btn.text}
              link={btn.link}
              variant={btn.variant}
            />
          ))}
        </div>
      )}

      {/* Note / Callout */}
      {confusionData.note && (
        <div className="flex items-center justify-center text-text-secondary text-xs sm:text-sm md:text-base font-manrope-light">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2.5 shrink-0 animate-pulse" />
          <span>{confusionData.note.text}</span>
        </div>
      )}
    </div>
  );
}
