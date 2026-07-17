"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import StackCard from "@/components/home/StackCard";
import { servicesData } from "@/data/home";

export default function ServiceSection() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="section gap-10">
      <div className="flex-col-center relative w-full gap-8">
        <h2 className="title">
          What we <span className="text-brand"> actually build</span>.
        </h2>

        <p className="subtitle max-w-lg">
          Three engagement tiers, depending on where your business is. Real
          prices. Real timelines. Pick the one that fits.
        </p>

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
    </section>
  );
}
