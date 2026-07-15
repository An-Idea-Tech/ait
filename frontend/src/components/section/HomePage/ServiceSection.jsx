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
    <section ref={container} className="section gap-8 sm:gap-10 pb-20 sm:pb-28 md:pb-36 lg:pb-48 relative z-20 w-full">
      <div className="flex-col-center relative w-full gap-6 sm:gap-8 max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6">
        <h2 className="title">
          What we <span className="text-brand"> actually build</span>.
        </h2>

        <p className="subtitle max-w-lg mx-auto text-center">
          Three engagement tiers, depending on where your business is. Real
          prices. Real timelines. Pick the one that fits.
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
