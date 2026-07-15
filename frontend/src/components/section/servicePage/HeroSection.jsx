"use client";

import React from "react";
import Image from "next/image";
import Heighlight from "@/components/shared/Heighlight";

export default function HeroSection() {
  return (
    <section className="section  gap-10">
      
        <Heighlight  className="mb-5" text="What we offer, what your business needs." />

      {/* Main Hero Layout Container */}
      <div className="relative w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end px-4 sm:px-8 md:px-12 lg:px-16 pb-8 sm:pb-12">
        {/* Center Column: The Featured Image (Starts at column 3 on desktop to leave left space for Title) */}
        <div className="lg:col-start-3 lg:col-span-7 xl:col-start-3 xl:col-span-7 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] max-h-[650px] shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="We sell decisions"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
        </div>

        {/* Right Column: Description Paragraph */}
        <div className=" lg:col-span-3  xl:col-span-3  pb-2 sm:pb-4 z-10 mt-2 sm:mt-4 lg:mt-0">
          <p className="subtitle text-right ">
            Most agencies list 30 services and let you pick. We organize ours
            into five categories — based on where your business is, not what you
            came here looking for.
          </p>
        </div>

        {/* Top Overlay Layer: Left-Aligned Typography in Liquid Glass Card */}
        <div className="absolute top-10 sm:top-8 md:top-12 lg:top-16 left-4 sm:left-8 md:left-12 lg:left-16 z-20 flex flex-col items-start justify-start text-left select-none max-w-[95%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[65%] ">
          <div className=" card-rounded">
            <h1 className="relative z-10 flex flex-col items-start text-left">
              <span className="block title">We don’t sell</span>
              <span className="my-0.5 block sm:my-1 title">
                services.
              </span>
              <span className="block huge-text">We sell</span>
              <span className="mt-0.5 block  huge-text uppercase sm:mt-1 text-service">
                DECISIONS.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
