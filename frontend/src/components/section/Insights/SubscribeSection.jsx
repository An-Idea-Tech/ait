"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-bg-primary section-padding-y section-padding-x flex flex-col items-center border-b border-border-primary relative overflow-hidden">
      
      {/* Centered Paper Airplane SVG with Wavy Trail */}
      <div className="w-full flex justify-center mb-6">
        <svg viewBox="0 0 350 120" fill="none" className="w-72 h-28 text-text-primary">
          {/* Wavy line trail */}
          <path
            d="M 10 90 Q 70 30 130 80 T 250 50"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Paper airplane */}
          <g transform="translate(245, 12) scale(1.5)">
            <path
              d="M 0 25 L 40 0 L 18 32 L 14 40 L 12 28 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinejoin="round"
            />
            <path
              d="M 40 0 L 12 28"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </g>
        </svg>
      </div>

      <div className="w-full max-w-4xl text-center space-y-8">
        {/* Large Clean Heading */}
        <h2 className="title select-none">Get new essays when they ship</h2>
        
        {/* Description Copy */}
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-manrope-light">
          We don't publish on a fixed schedule. We don't run a newsletter that fills your inbox with promotional content. When
          a new essay goes live, we send a short email — title, summary, link. Nothing else. You can unsubscribe with one click,
          no questions asked.
        </p>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto pt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="w-full sm:w-[350px] bg-transparent border-2 border-brand rounded-full px-6 py-3.5 text-base outline-none text-text-primary placeholder-text-secondary/60 focus:border-brand/80 transition-all font-manrope-light"
          />
          <Button text="SUBSCRIBE" type="submit" variant="light" />
        </form>

        {/* Bottom Disclaimer */}
        <p className="text-text-secondary/50 text-xs sm:text-sm font-manrope-light tracking-wide pt-4">
          No marketing emails. No drip campaigns. Just essays when they ship.
        </p>
      </div>
    </section>
  );
}
