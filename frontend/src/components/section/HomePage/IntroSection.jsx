"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { introSection } from "@/data/home";

export default function IntroSection() {
  return (
    <section className="section">
      <div className="flex-col-center w-full gap-10">
        {/* Top Heading */}
        <div>
          <h2 className="!text-brand title">{introSection.heading.title}</h2>
          <h2 className="title">
            <span>
              {introSection.heading.subtitlePrefix +
                " " +
                introSection.heading.subtitleHighlight}
            </span>
          </h2>
        </div>

        {/* Outer Bento Grid Container */}
        <div className="lg:border-brown card-rounded md:bg-gray mx-auto max-w-6xl bg-none p-4 sm:p-6 md:p-8 md:shadow-2xl lg:border">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12">
            {/* Left Column (Spans 7 columns on large desktop) */}
            <div className="flex-col flex gap-4 sm:gap-6 lg:col-span-7">
              {/* Top Row: YouTube & Star Stats Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {introSection.statsRow.map((stat, index) => (
                  <StatCard key={index} {...stat} index={index} />
                ))}
              </div>

              {/* Bottom Row: Unlock Career Card */}
              <div className="border-border-primary bg-bg-primary card-rounded flex flex-col justify-between border p-6 shadow-inner transition-transform duration-300 select-none hover:scale-[1.005] sm:p-8 md:p-10">
                {/* Top Line with Overlapping Avatars */}
                <div className="font-manrope-bold text-text-primary flex flex-wrap items-center gap-2 text-2xl leading-none tracking-tight uppercase sm:gap-3 sm:text-4xl md:text-5xl">
                  <span>{introSection.bannerCard.line1Prefix}</span>

                  <div className="flex -space-x-3 overflow-hidden px-1 py-0.5">
                    {introSection.bannerCard.avatars.map((url, idx) => (
                      <div
                        key={idx}
                        className="ring-bg-primary relative h-8 w-8 overflow-hidden rounded-full bg-neutral-700 ring-2 sm:h-10 sm:w-10"
                      >
                        <Image
                          src={url}
                          alt="Student Avatar"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>

                  <span>{introSection.bannerCard.line1Suffix}</span>
                </div>

                {/* Bottom Headline */}
                <h3 className="font-manrope-bold text- text-2xl leading-[1.1] tracking-tight whitespace-pre-line uppercase sm:text-4xl md:text-5xl">
                  {introSection.bannerCard.headline}
                </h3>
              </div>
            </div>

            {/* Right Column (Spans 5 columns on large desktop) - Tall Feature Card */}
            <div className="group card-rounded relative flex max-h-[380px] flex-col justify-between overflow-hidden shadow-inner select-none sm:min-h-[500px] lg:col-span-5">
              {/* Background Image Preview */}
              <video
                src={introSection.featureCard.video.src}
                autoPlay
                loop
                muted
                className="w-full"
              ></video>

              {/* Soft Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181a] via-black/30 to-bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function parseCount(countStr) {
  if (typeof countStr === "number") {
    return { prefix: "", number: countStr, suffix: "", isNumber: true, hasCommas: false };
  }
  const str = String(countStr);
  const match = str.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
  if (!match) {
    return { prefix: "", number: 0, suffix: str, isNumber: false, hasCommas: false };
  }
  const prefix = match[1] || "";
  const hasCommas = match[2].includes(",");
  const numStr = match[2].replace(/,/g, "");
  const number = parseFloat(numStr) || 0;
  const suffix = match[3] || "";
  return { prefix, number, suffix, isNumber: true, hasCommas };
}

function AnimatedCounter({ value, delay = 0 }) {
  const spanRef = React.useRef(null);
  const hasAnimatedRef = React.useRef(false);
  const timerRef = React.useRef(null);
  const rafRef = React.useRef(null);

  React.useEffect(() => {
    const el = spanRef.current;
    if (!el || hasAnimatedRef.current) return;

    const { prefix, number, suffix, isNumber, hasCommas } = parseCount(value);
    if (!isNumber) {
      el.textContent = value;
      return;
    }

    el.textContent = `${prefix}0${suffix}`;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          timerRef.current = setTimeout(() => {
            const duration = 2000;
            let startTimestamp = null;

            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const elapsed = timestamp - startTimestamp;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 4);
              const currentValue = Math.floor(easeProgress * number);
              const formattedValue = hasCommas
                ? currentValue.toLocaleString()
                : currentValue;

              if (spanRef.current) {
                spanRef.current.textContent = `${prefix}${formattedValue}${suffix}`;
              }

              if (progress < 1) {
                rafRef.current = requestAnimationFrame(step);
              } else if (spanRef.current) {
                const finalValue = hasCommas
                  ? number.toLocaleString()
                  : number;
                spanRef.current.textContent = `${prefix}${finalValue}${suffix}`;
              }
            };

            rafRef.current = requestAnimationFrame(step);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, delay]);

  return (
    <span ref={spanRef} className="!text-brand title !text-5xl lg:!text-7xl">
      {value}
    </span>
  );
}

function StatCard({ icon, count, label, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="text-center sm:text-left md:border-border-primary bg-bg-primary card-rounded p-6 md:shadow-inner transition-transform duration-300 select-none hover:scale-[1.01] sm:p-8 md:border"
    >
      <div>
        <div className="mb-2 ">
          <AnimatedCounter value={count} delay={index * 150} />
        </div>
        <p className="subtitle sm:!text-left">{label}</p>
        <p className="description">{description}</p>
      </div>
    </motion.div>
  );
}
