"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "motion/react";
import SectionRenderer from "./SectionRenderer";
import { getServiceBySlug } from "@/data/services";
import Button from "@/components/ui/Button";

export default function ServicePage({ slug: propSlug, service: propService }) {
  const params = useParams();
  const slug = propSlug || params?.slug;

  // 1. If service prop is directly provided (future API fetch), use it.
  // 2. Otherwise, look up via getServiceBySlug(slug).
  const service = propService || (slug ? getServiceBySlug(slug) : null);

  if (!service) {
    return (
      <section className="section flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl rounded-3xl border border-border-primary bg-bg-primary p-8 sm:p-12 shadow-2xl"
        >
          <div className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 font-manrope-bold text-xs tracking-widest text-brand uppercase">
            404 • Not Found
          </div>
          <h1 className="title !text-3xl sm:!text-4xl md:!text-5xl mb-4">
            <span>Service Not Found</span>
          </h1>
          <p className="description mb-8 text-base text-text-secondary sm:text-lg">
            The service or tier you are looking for does not exist or may have been updated.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button text="Explore All Services" link="/" variant="light" />
            <Button text="Contact Support" link="/contact" variant="outline" />
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <div className="page flex flex-col gap-12 sm:gap-16">
      {service.sections &&
        service.sections.map((section, index) => (
          <SectionRenderer
            key={section.id || `${section.type}-${index}`}
            section={section}
            tier={service.tier}
          />
        ))}
    </div>
  );
}
