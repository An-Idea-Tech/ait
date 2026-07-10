"use client";

import React from "react";
import { activeClientsSection } from "@/data/contactdata";

export default function ActiveClientsSection() {
  return (
    <section className="bg-bg-primary flex flex-col w-full py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-[1400px] mx-auto">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-manrope-bold text-text-primary">
            {activeClientsSection.title}
          </h2>
          {activeClientsSection.paragraphs.map((para, idx) => (
            <p key={idx} className="text-sm sm:text-base text-text-secondary leading-relaxed font-manrope-light">
              {para}
            </p>
          ))}
        </div>

        <div className="lg:col-span-5 overflow-hidden">
          <img
            src={activeClientsSection.image}
            alt="Active Clients Help"
            className="w-full h-[300px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
