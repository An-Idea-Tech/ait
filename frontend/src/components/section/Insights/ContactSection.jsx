"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <section className="bg-bg-primary section-padding-y section-padding-x flex flex-col items-center border-b border-border-primary text-center">
      <div className="w-full max-w-2xl space-y-8">
        <h2 className="title">Want to discuss something we've written?</h2>
        
        <p className="subtitle font-manrope-light text-text-secondary max-w-lg mx-auto">
          If you want to talk about any of these essays, get in touch. We'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Button text="Say Hello" link="/contact" />
          <Button text="Send a Note" link="/contact" />
        </div>
      </div>
    </section>
  );
}
