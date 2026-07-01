import React from "react";
import { trustsection } from "@/data/home";
import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="section-padding-y relative min-h-screen w-full">
      <div className="section-padding-x flex-col-center relative mx-auto max-w-5xl text-center">
        {/* Giant Quote Icon */}
        <div className="inline-block">
          <Image
            src={"/svgs/quote.svg"}
            alt="quote"
            width={80}
            height={80}
            className="mb-4 h-20 w-20 md:h-24 md:w-24 lg:h-30 lg:w-30"
          />
        </div>

        {/* Big Quote Headline */}
        <div className="w-full">
          <h2 className="title mx-auto max-w-7xl leading-[1.15] xl:!text-[5vw]">
            {trustsection.quote}
          </h2>
        </div>

        {/* Description Text */}
        <div className="mx-auto py-10 md:max-w-3xl">
          {trustsection.description.split("\n").map((paragraph, index) => (
            <p key={index} className="trust-description text-center">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
