"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseStudyGallery({ images, title }) {
  return (
    <section className="section">
      {/* Grid: 2-col on md+, with last image full-width */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.1,
            }}
            className={`bg-gray/10 overflow-hidden rounded-xl ${
              i === images.length - 1 && images.length % 2 !== 0
                ? "md:col-span-2"
                : "md:col-span-1"
            }`}
          >
            <Image
              src={src}
              alt={`${title} project image ${i + 1}`}
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="aspect-[4/3] max-h-[500px] w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
