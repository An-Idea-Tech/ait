"use client";

import { motion, useTransform } from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";
import Heighlight from "../shared/Heighlight";

export default function StackCard({ service, index, progress, total }) {
  const targetScale = 1 - (total - index - 1) * 0.05;

  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="flex justify-center items-start pt-3 sm:pt-6 md:pt-10 sticky top-0 h-screen w-full px-4 sm:px-6 md:px-8">
      <motion.div
        style={{
          scale,
          "--top-mobile": `${index * 45}px`,
          "--top-desktop": `${index * 85}px`,
        }}
        className={`top-[var(--top-mobile)] md:top-[var(--top-desktop)] flex-col-center card-rounded relative min-h-[380px] md:min-h-[450px] w-full max-w-[2000px] origin-top shadow-2xl shadow-black/30 border-border-primary p-4 sm:p-6 md:p-8 ${service.bgColor}`}
      >
        {/* Main Content Area */}
        <div className="flex flex-col gap-2">
          <h2 className="title2 !text-left ">
            {service.title}
          </h2>

          <Heighlight text={service.heighlight}/>

          <div className="flex flex-1 flex-col items-center justify-between gap-4 md:my-6 md:flex-row md:gap-12">
            {/* Left: Image */}
            <div className="flex w-full items-center justify-center md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="max-h-[110px] max-w-[180px] object-contain sm:max-h-[180px] sm:max-w-[240px] md:max-h-[280px] md:max-w-full"
              />
            </div>

            {/* Right: Text Content */}
            <div className="flex w-full flex-col gap-4 md:w-1/2 md:gap-6 md:pr-4">
              <div>
                <h3 className="subtitle mb-1 !text-left md:mb-2">
                  Who it's for
                </h3>
                <p className="description !text-text-primary">{service.whoItsFor}</p>
              </div>
              <div>
                <h3 className="subtitle mb-1 !text-left  md:mb-2">
                  What you get
                </h3>
                <p className="description !text-text-primary">{service.whatYouGet}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Title and Button */}
        <div className="flex items-center justify-end w-full">
          <Button />
        </div>
      </motion.div>
    </div>
  );
}
