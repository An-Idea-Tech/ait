"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { contactContent } from "@/data/insightdata";

export default function ContactSection() {
  const { title, description, buttons } = contactContent;

  return (
    <section className="bg-bg-primary flex flex-col items-center text-center">
      <div className="w-full max-w-2xl space-y-8">
        <h2 className="title">{title}</h2>

        <p className="subtitle font-manrope-light text-text-secondary max-w-lg mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          {buttons.map((btn, index) => (
            <Button key={index} text={btn.text} link={btn.link} variant={btn.variant} />
          ))}
        </div>
      </div>
    </section>
  );
}
