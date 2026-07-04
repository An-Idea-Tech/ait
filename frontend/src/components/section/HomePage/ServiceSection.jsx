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
    <section
      ref={container}
      className="section pb-48 sm:pb-56 md:pb-48"
    >
      <div className="flex-col-center gap-5 w-full">
        <h2 className="title">
          What we <span className="text-brand"> actually build</span>.
        </h2>
        <p className="subtitle">
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
