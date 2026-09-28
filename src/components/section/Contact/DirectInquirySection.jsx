"use client";

import React, { useState } from "react";
import { FiCopy, FiCheck, FiMail, FiPhone, FiMapPin, FiHeart, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { directInquirySection, locationSection } from "@/data/contactdata";

export default function DirectInquirySection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "support@anideatech.com";
  const phoneNumber = "+91 73490 49009";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section bg-bg-primary relative py-16">
      {/* Integrated Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-0 z-0 h-[600px] w-[600px] rounded-full blur-[130px] bg-sky-500/10 dark:bg-sky-500/15 opacity-80" />
      <div className="pointer-events-none absolute -right-40 bottom-0 z-0 h-[600px] w-[600px] rounded-full blur-[130px] bg-rose-500/10 dark:bg-rose-500/10 opacity-70" />

      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Left Column - Sticky */}
        <div className="lg:col-span-6 lg:sticky lg:top-32 h-fit space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand font-manrope-bold">
              {directInquirySection.subtitle}
            </span>
            <h2 className="text-4xl sm:text-5xl font-manrope-bold text-text-primary leading-tight">
              Get in touch.
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-manrope-light max-w-lg">
              {directInquirySection.description}
            </p>
          </div>

          {/* Line Art Placeholder Graphic */}
          <div className="pt-4 max-w-xs sm:max-w-sm">
            <svg
              className="w-full h-auto text-brand/40 dark:text-brand/35"
              viewBox="0 0 200 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Decorative curved connector */}
              <path
                d="M 20 80 C 40 40, 80 40, 100 80 C 120 120, 160 120, 180 80"
                strokeDasharray="4 4"
              />

              {/* Envelope Node */}
              <g transform="translate(15, 68)">
                <rect x="0" y="0" width="24" height="16" rx="2" />
                <path d="M 0 0 L 12 10 L 24 0" />
              </g>

              {/* Phone Node */}
              <g transform="translate(90, 68)">
                <rect x="0" y="0" width="20" height="20" rx="3" />
                <path d="M 4 4 L 4 10 A 6 6 0 0 0 16 10 L 16 4" />
                <circle cx="10" cy="15" r="1.5" fill="currentColor" />
              </g>

              {/* Globe/Network Node */}
              <g transform="translate(165, 68)">
                <circle cx="10" cy="10" r="10" />
                <path d="M 10 0 A 10 10 0 0 0 10 20" />
                <path d="M 10 0 A 10 10 0 0 1 10 20" />
                <line x1="0" y1="10" x2="20" y2="10" />
              </g>
            </svg>
          </div>
        </div>

        {/* Right Column - Separate Glassmorphic Cards */}
        <div className="lg:col-span-6 space-y-4 w-full">
          
          {/* Card 1: Address */}
          <div className="glass-card bg-white/20 dark:bg-zinc-900/30 border border-white/25 dark:border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-xl flex items-start gap-4 transition-all duration-300 hover:border-brand/40">
            <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center flex-shrink-0">
              <FiMapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs uppercase tracking-wider text-text-secondary font-manrope-bold">
                Address
              </h4>
              <p className="text-sm text-text-primary leading-relaxed font-manrope-medium">
                {locationSection.cards[0].value}
              </p>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="glass-card bg-white/20 dark:bg-zinc-900/30 border border-white/25 dark:border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-xl flex items-start gap-4 transition-all duration-300 hover:border-brand/40">
            <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center flex-shrink-0">
              <FiPhone className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs uppercase tracking-wider text-text-secondary font-manrope-bold">
                Phone
              </h4>
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                className="text-sm text-text-primary hover:text-brand transition-colors font-manrope-medium underline"
              >
                {phoneNumber}
              </a>
            </div>
          </div>

          {/* Card 3: Mail */}
          <div className="glass-card bg-white/20 dark:bg-zinc-900/30 border border-white/25 dark:border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-xl flex items-start gap-4 transition-all duration-300 hover:border-brand/40">
            <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center flex-shrink-0">
              <FiMail className="w-5 h-5" />
            </div>
            <div className="space-y-1 w-full">
              <h4 className="text-xs uppercase tracking-wider text-text-secondary font-manrope-bold">
                Mail
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm text-text-primary hover:text-brand transition-colors font-manrope-semibold underline"
                >
                  {emailAddress}
                </a>
                <button
                  onClick={() => copyToClipboard(emailAddress)}
                  className="p-1.5 bg-white/30 hover:bg-white/50 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-text-secondary hover:text-text-primary transition-all rounded-md cursor-pointer"
                >
                  {copied ? (
                    <FiCheck className="w-3.5 h-3.5 text-green-500" />
                  ) : (
                    <FiCopy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Follow Us */}
          <div className="glass-card bg-white/20 dark:bg-zinc-900/30 border border-white/25 dark:border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-xl flex items-start gap-4 transition-all duration-300 hover:border-brand/40">
            <div className="w-10 h-10 rounded-xl bg-brand/15 text-brand flex items-center justify-center flex-shrink-0">
              <FiHeart className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-text-secondary font-manrope-bold">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/40 dark:bg-zinc-800 hover:bg-brand hover:text-black dark:hover:bg-brand dark:hover:text-black text-text-primary flex items-center justify-center transition-all shadow-sm"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/40 dark:bg-zinc-800 hover:bg-brand hover:text-black dark:hover:bg-brand dark:hover:text-black text-text-primary flex items-center justify-center transition-all shadow-sm"
                >
                  <FiTwitter className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/40 dark:bg-zinc-800 hover:bg-brand hover:text-black dark:hover:bg-brand dark:hover:text-black text-text-primary flex items-center justify-center transition-all shadow-sm"
                >
                  <FiInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
