"use client";

import React from "react";
import Image from "next/image";
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
                  <StatCard key={index} {...stat} />
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

function StatCard({ icon, count, label, description }) {
  return (
    <div className="text-center sm:text-left md:border-border-primary bg-bg-primary card-rounded p-6 md:shadow-inner transition-transform duration-300 select-none hover:scale-[1.01] sm:p-8 md:border">
      <div>
        <div className="mb-2 ">
          <span className="!text-brand title">{count}</span>
        </div>
        <p className="subtitle sm:!text-left">{label}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
