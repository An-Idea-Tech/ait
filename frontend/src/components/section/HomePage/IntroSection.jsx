"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { introSection } from "@/data/intro";
import { FaArrowTrendUp } from "react-icons/fa6";
import {  FaStar, FaArrowRight } from "react-icons/fa";

export default function IntroSection() {
  return (
    //  <section className="flex-col-center min-h-screen w-full">
    //   <div className="section-padding-x flex-col-center w-full"></div>
    <section className="flex-col-center min-h-screen w-full">
      <div className="mx-auto w-full max-w-[1920px] px-6 md:px-12">
        {/* Top Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-manrope-bold text-brand text-4xl tracking-tight sm:text-5xl md:text-6xl">
            {introSection.heading.title}
          </h2>
          <h2 className="text-text-primary mt-1 text-3xl tracking-wide sm:mt-2 sm:text-4xl md:text-5xl">
            <span className="font-manrope-light mr-2 select-none">
              {introSection.heading.subtitlePrefix}
            </span>
            <span className="font-serif font-normal tracking-normal italic select-none">
              {introSection.heading.subtitleHighlight}
            </span>
          </h2>
        </div>

        {/* Outer Bento Grid Container */}
        <div className="border-border-primary/20 mx-auto max-w-6xl rounded-3xl border bg-none md:bg-[#18181a] p-4 shadow-2xl sm:p-6 md:p-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12">
            {/* Left Column (Spans 7 columns on large desktop) */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-7">
              {/* Top Row: YouTube & Star Stats Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {/* Card 1: YouTube */}
                <div className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-border-primary bg-bg-primary p-6 shadow-inner transition-transform duration-300 select-none hover:scale-[1.01] sm:p-8">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <FaArrowTrendUp className="flex-shrink-0 text-2xl text-green-400 sm:text-3xl" />
                      <span className="font-manrope-bold text-brand text-3xl tracking-tight sm:text-4xl">
                        {introSection.statsRow[0].count}
                      </span>
                    </div>
                    <p className="font-manrope-light text-text-primary text-sm tracking-wide sm:text-base">
                      {introSection.statsRow[0].label}
                    </p>
                  </div>
                  <p className="font-manrope-light text-text-secondary mt-8 text-xs leading-relaxed sm:text-sm">
                    {introSection.statsRow[0].description}
                  </p>
                </div>

                {/* Card 2: Star */}
                <div className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-border-primary bg-bg-primary p-6 shadow-inner transition-transform duration-300 select-none hover:scale-[1.01] sm:p-8">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <FaStar className="flex-shrink-0 text-2xl text-yellow-400 sm:text-3xl" />
                      <span className="font-manrope-bold text-brand text-3xl tracking-tight sm:text-4xl">
                        {introSection.statsRow[1].count}
                      </span>
                    </div>
                    <p className="font-manrope-light text-text-primary text-sm tracking-wide sm:text-base">
                      {introSection.statsRow[1].label}
                    </p>
                  </div>
                  <p className="font-manrope-light text-text-secondary mt-8 text-xs leading-relaxed sm:text-sm">
                    {introSection.statsRow[1].description}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Unlock Career Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-border-primary bg-bg-primary p-6 shadow-inner transition-transform duration-300 select-none hover:scale-[1.005] sm:p-8 md:p-10">
                {/* Top Line with Overlapping Avatars */}
                <div className="font-manrope-bold text-text-primary flex flex-wrap items-center gap-2 text-2xl leading-none tracking-tight uppercase sm:gap-3 sm:text-4xl md:text-5xl">
                  <span>{introSection.bannerCard.line1Prefix}</span>

                  <div className="flex -space-x-3 overflow-hidden px-1 py-0.5">
                    {introSection.bannerCard.avatars.map((url, idx) => (
                      <div
                        key={idx}
                        className="relative h-8 w-8 overflow-hidden rounded-full bg-neutral-700 ring-2 ring-[#121214] sm:h-10 sm:w-10"
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
            <div className="group relative flex max-h-[380px] flex-col justify-between overflow-hidden rounded-2xl  shadow-inner select-none sm:min-h-[500px]  lg:col-span-5">
              {/* Background Image Preview */}
              <video src={introSection.featureCard.video.src} autoPlay loop muted className="w-full"></video>

              {/* Soft Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181a] via-black/30 to-black/40"></div>

  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
