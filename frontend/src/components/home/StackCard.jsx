"use client";

import { motion, useTransform } from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";
import Heighlight from "../shared/Heighlight";

export default function StackCard({ service, index, progress, total }) {
  const targetScale = 1 - (total - index - 1) * 0.05;

  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="flex justify-center items-start pt-2 sm:pt-4 md:pt-6 lg:pt-8 sticky top-0 h-screen w-full px-3 sm:px-6 md:px-8 max-w-[1600px] mx-auto">
      <motion.div
        style={{
          scale,
          "--top-mobile": `${index * 42}px`,
          "--top-tablet": `${index * 56}px`,
          "--top-desktop": `${index * 72}px`,
        }}
        className={`top-[var(--top-mobile)] md:top-[var(--top-tablet)] lg:top-[var(--top-desktop)] flex-col-center card-rounded relative min-h-[360px] sm:min-h-[400px] md:min-h-[420px] lg:min-h-[460px] w-full max-w-[1500px] origin-top shadow-2xl shadow-black/40 border border-border-primary/20 p-4 sm:p-6 md:p-6 lg:p-8 transition-all duration-300 ${service.bgColor}`}
      >
        {/* Main Content Area */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
            <h2 className="font-manrope-bold text-left text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight text-text-primary leading-snug">
              {service.title}
            </h2>
            <div className="w-fit">
              <Heighlight text={service.heighlight} className="!px-3 !py-1 sm:!px-4 sm:!py-1.5 [&>p]:!text-xs sm:[&>p]:!text-sm" />
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center justify-between gap-4 sm:gap-6 md:my-4 lg:my-6 md:flex-row md:gap-8 lg:gap-12 w-full">
            {/* Left: Image */}
            <div className="flex w-full items-center justify-center md:w-1/2 py-2 sm:py-4">
              <img
                src={service.image}
                alt={service.title}
                className="max-h-[110px] max-w-[160px] sm:max-h-[160px] sm:max-w-[220px] md:max-h-[200px] md:max-w-[280px] lg:max-h-[260px] lg:max-w-full object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Right: Text Content */}
            <div className="flex w-full flex-col gap-3 sm:gap-4 md:w-1/2 md:gap-5 lg:gap-6 md:pr-2 lg:pr-4">
              <div>
                <h3 className="font-manrope-bold text-left text-sm sm:text-base md:text-base lg:text-lg mb-1 text-text-primary">
                  Who it's for
                </h3>
                <p className="font-manrope-light text-left text-xs sm:text-sm md:text-xs lg:text-sm xl:text-[15px] leading-relaxed !text-text-primary/90">
                  {service.whoItsFor}
                </p>
              </div>
              <div>
                <h3 className="font-manrope-bold text-left text-sm sm:text-base md:text-base lg:text-lg mb-1 text-text-primary">
                  What you get
                </h3>
                <p className="font-manrope-light text-left text-xs sm:text-sm md:text-xs lg:text-sm xl:text-[15px] leading-relaxed !text-text-primary/90">
                  {service.whatYouGet}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Button */}
        <div className="flex items-center justify-end w-full mt-3 sm:mt-4 pt-">
          <Button text={service.btntext} link={service.btnlink} />
        </div>
      </motion.div>
    </div>
  );
}
