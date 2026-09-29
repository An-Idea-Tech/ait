"use client";

import { motion, useTransform } from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";
import Heighlight from "../shared/Heighlight";

export default function StackCard({ service, index, progress, total }) {
  const targetScale = 1 - (total - index - 1) * 0.05;

  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 mx-auto flex h-screen w-full max-w-[1600px] items-start justify-center px-3 pt-2 sm:px-6 sm:pt-4 md:px-8 md:pt-6 lg:pt-8">
      <motion.div
        style={{
          scale,
          "--top-mobile": `${index * 42}px`,
          "--top-tablet": `${index * 56}px`,
          "--top-desktop": `${index * 72}px`,
        }}
        className={`flex-col-center card-rounded border-border-primary/20 relative top-[var(--top-mobile)] min-h-[360px] w-full max-w-[1500px] origin-top border p-4 shadow-2xl shadow-black/40 transition-all duration-300 sm:min-h-[400px] sm:p-6 md:top-[var(--top-tablet)] md:min-h-[420px] md:p-6 lg:top-[var(--top-desktop)] lg:min-h-[460px] lg:p-8 ${service.bgColor}`}
      >
        {/* Main Content Area */}
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <h2 className="title2 !text-left !text-black">{service.title}</h2>
            <div className="w-fit">
              <Heighlight
                text={service.heighlight}
                className="!px-3 !py-1 sm:!px-4 sm:!py-1.5 [&>p]:!text-xs sm:[&>p]:!text-sm"
              />
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col items-center justify-between gap-4 sm:gap-6 md:my-4 md:flex-row md:gap-8 lg:my-6 lg:gap-12">
            {/* Left: Image */}
            <div className="flex w-full items-center justify-center py-2 sm:py-4 md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="max-h-[110px] max-w-[160px] object-contain drop-shadow-md transition-transform duration-500 hover:scale-105 sm:max-h-[160px] sm:max-w-[220px] md:max-h-[200px] md:max-w-[280px] lg:max-h-[260px] lg:max-w-full"
              />
            </div>

            {/* Right: Text Content */}
            <div className="flex w-full flex-col gap-3 sm:gap-4 md:w-1/2 md:gap-5 md:pr-2 lg:gap-6 lg:pr-4">
              <div>
                <h3 className="subtitle mb-1 !text-left !text-black">Who it's for</h3>
                <p className="description !text-black">
                  {service.whoItsFor}
                </p>
              </div>
              <div>
                <h3 className="subtitle mb-1 !text-left !text-black">
                  What you get
                </h3>
                <p className="description !text-black">
                  {service.whatYouGet}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Button */}
        <div className="pt- mt-3 flex w-full items-center justify-end sm:mt-4">
          <Button text={service.btntext} link={service.btnlink} />
        </div>
      </motion.div>
    </div>
  );
}
