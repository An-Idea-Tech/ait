"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { section08 } from "@/data/methoddata";

export default function Section08() {
  return (
    <section className="bg-bg-primary flex flex-col w-full py-16 items-center text-center">
      <div className="w-full max-w-[1000px] mx-auto space-y-8 flex flex-col items-center">
        <span className="text-4xl font-manrope-bold text-brand">
          {section08.num}
        </span>
        <h2 className="title">
          {section08.title}
        </h2>
        <p className="description max-w-xl mx-auto">
          {section08.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button
            variant="brand"
            text={section08.cta1.text}
            link={section08.cta1.link}
          />
          <Button
            variant="outline"
            text={section08.cta2.text}
            link={section08.cta2.link}
          />
        </div>
      </div>
    </section>
  );
}
