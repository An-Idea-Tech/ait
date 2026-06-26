import React from "react";
import Image from "next/image";
import { heroSection } from "@/data/hero";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="bg-bg-primary w-full pt-8 pb-16 md:pt-12 md:pb-24">
      <div className=" lg:inline-block mx-auto w-full max-w-[1920px] px-6 md:px-12">
        {/* Top Subtitle */}
        <div className="mb-4 ">
          <h2 className="text-text-secondary 
          text-center lg:text-left text-md tracking-wide sm:text-xl md:text-2xl">
            {heroSection.subtitle}
          </h2>
        </div>

        {/* Giant Headline */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h1 className="font-manrope-medium text-text-primary text-center text-4xl leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-left lg:text-[84px] xl:text-[96px]">
            {heroSection.headline.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.text.includes("\n") ? (
                  <>
                    <br className="hidden md:block" />
                    <span
                      className={
                        item.highlight ? "text-brand" : "text-text-primary"
                      }
                    >
                      {item.text.replace("\n", "")}
                    </span>
                  </>
                ) : (
                  <span
                    className={
                      item.highlight ? "text-brand" : "text-text-primary"
                    }
                  >
                    {item.text}
                  </span>
                )}
              </React.Fragment>
            ))}
          </h1>
        </div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Team Image */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className=" relative w-full overflow-hiddenbg-neutral-900 shadow-2xl">
              <Image
                src={heroSection.image.src}
                alt={heroSection.image.alt}
                width={500}
                height={500}
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Right Column - Info, Social Proof & CTA */}
          <div className="flex-col-center gap-8 pl-0 md:gap-10 lg:col-span-6 lg:pl-4 xl:col-span-5">
            {/* Description Text */}
            <p className="font-manrope-medium text-center text-text-primary max-w-xl text-base leading-relaxed sm:text-lg md:text-xl">
              {heroSection.description}
            </p>

            {/* Pill CTA Button */}
            <div className="pt-2">
              <Button text={heroSection.cta.text} link={heroSection.cta.url} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
