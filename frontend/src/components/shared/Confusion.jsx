"use client";

import React from "react";
import Button from "@/components/ui/Button";
import Note from "./Note";
import Button2 from "../ui/Button2";

export default function Confusion({ confusionData }) {
  if (!confusionData) return null;

  return (
    <div
      id={confusionData.id}
      className="section !min-h-[50vh] justify-center !p-0"
    >
      {/* Title */}
      <h2 className="title mb-6 sm:mb-8">{confusionData.title}</h2>

      {/* Description */}
      <p className="description sm:tracking-tight lg:tracking-normal mx-auto mb-10 max-w-3xl px-4 text-justify sm:mb-12">
        {confusionData.description}
      </p>

      {/* Buttons Row */}
      {confusionData.buttons && confusionData.buttons.length > 0 && (
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:mb-10 sm:flex-row sm:gap-6">
          <Button text="Run the decision tree" link="/" />
          <Button2 text="just talk to us" link="/contact" />
        </div>
      )}

      {/* Note / Callout */}
      {confusionData.note && (
        <div className="flex-row-center note">
          <Note text={confusionData.note.text} />
        </div>
      )}
    </div>
  );
}
