"use client";

import { motion, useTransform } from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";

export default function StackCard({
  service,
  index,
  progress,
  total,
}) {
  const targetScale = 1 - ((total - index - 1) * 0.05);

  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale]
  );

  return (
    <div className="sticky top-0 h-screen flex-row-center px-4 sm:px-6 md:px-8 ">
      <motion.div
        style={{
          scale,
          top: `${index * 20}px`,
        }}
        className={`relative origin-top w-full max-w-[1000px] min-h-[450px] flex flex-col justify-between text-black card-rounded shadow-2xl p-6 ${service.bgColor}`}
      >

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between md:my-6 gap-6 md:gap-12">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={service.image} alt={service.title} className="max-w-[220px] sm:max-w-[280px] md:max-w-full max-h-[160px] sm:max-h-[220px] md:max-h-[280px] object-contain" />
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 md:pr-4">
            <div>
              <h3 className="subtitle mb-1 md:mb-2 !text-black !text-left">Who it's for</h3>
              <p className="description !text-black">
                {service.whoItsFor}
              </p>
            </div>
            <div>
              <h3 className="subtitle mb-1 md:mb-2 !text-black !text-left">What you get</h3>
              <p className="description !text-black">
                {service.whatYouGet}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar with Title and Button */}
        <div className="flex flex-col p-2 items-center gap-2 sm:flex-row sm:justify-between border-border-primary sm:border-none">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight tracking-tight">
            {service.title}
          </h2>
          
          <Button/>
        </div>
      </motion.div>
    </div>
  );
}