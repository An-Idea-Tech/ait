"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CaseStudyGallery({ images, title }) {
  return (
    <section className="section">

      {/* Grid: 2-col on md+, with last image full-width */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

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
            className={`overflow-hidden rounded-xl bg-gray/10 ${
              i === images.length - 1 && images.length % 2 !== 0
                ? "md:col-span-2"
                : "md:col-span-1"
            }`}
          >
            <img
              src={src}
              alt={`${title} project image ${i + 1}`}
              className="w-full max-h-[500px] object-cover aspect-[4/3] "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
