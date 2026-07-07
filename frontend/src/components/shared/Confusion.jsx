"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function Confusion({ confusionData }) {
  if (!confusionData) return null;

  return (
    <div
      id={confusionData.id}
      className="section !p-0 !min-h-[50vh] justify-center"
    >
      {/* Title */}
      <h2 className="title mb-6 sm:mb-8">
        {confusionData.title}
      </h2>

      {/* Description */}
      <p className="description max-w-3xl mx-auto text-justify px-4 mb-10 sm:mb-12">
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
        <div className="flex-row-center note">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2.5 shrink-0 animate-pulse" />
          <span className="text-center ">{confusionData.note.text}</span>
        </div>
      )}
    </div>
  );
}
