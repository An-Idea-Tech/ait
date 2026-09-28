"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import StackCard from "@/components/home/StackCard";
import { servicesData } from "@/data/home";

export default function ServiceSection() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  return (
    <section ref={container} className="section gap-5 pb-8 !px-0 sm:gap-10 sm:pb-28 md:pb-36 lg:pb-48 relative z-20 w-full">
      <div className="flex-col-center relative w-full gap-4 sm:gap-8 max-w-[1600px]  sm:px-4 md:px-6">
        <h2 className="title">
          Three Ways to Begin
        </h2>

        <p className="subtitle max-w-lg mx-auto text-center">
          Each route starts with a different business issue. During a Discovery Call, we work out which route suits the situation.
        </p>

        <div className="w-full flex flex-col items-center">
          {servicesData.map((service, index) => (
            <StackCard
              key={service.id}
              service={service}
              index={index}
              total={servicesData.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
