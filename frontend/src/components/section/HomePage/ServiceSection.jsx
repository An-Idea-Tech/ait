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
      className="section-padding-y relative min-h-screen w-full"
      style={{
        height: `${(servicesData.length + 1) * 100}vh`,
      }}
    >
      <div className="section-padding-x">
      <div className="flex-col-center gap-3">
        <h2 className="title">What we actually build.</h2>
        <p className="subtitle">Three engagement tiers, depending on where your business is. Real prices. Real timelines. Pick the one that fits.</p>
      </div>
      </div>

      {servicesData.map((service, index) => (
        <StackCard
          key={service.id}
          service={service}
          index={index}
          total={servicesData.length}
          progress={scrollYProgress}
        />
      ))}
    </section>
  );
}
