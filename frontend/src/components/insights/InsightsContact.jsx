"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function InsightsContact() {
  return (
    <section className="bg-bg-primary px-6 py-24 lg:px-16 border-b border-border-primary flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-2xl space-y-8">
        <h2 className="heading-section">Want to discuss something we've written?</h2>

        <p className="body-large max-w-lg mx-auto">
          If you want to talk about any of these essays, get in touch. We'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Button variant='light' text="Say Hello" link="/contact" />
          <Button variant='dark' text="Send a Note" link="/contact" />
        </div>
      </div>
    </section>
  );
}
