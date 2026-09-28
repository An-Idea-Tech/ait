"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { getServiceBySlug } from "@/data/services";

function getDisplayInfo(item) {
  if (!item) return null;
  if (typeof item === "object") {
    return {
      slug: item.slug || "",
      title: item.title || formatSlug(item.slug || ""),
    };
  }
  // Try looking up via data or formatting slug directly for complete API independence
  const service = getServiceBySlug(item);
  if (service) {
    return { slug: item, title: service.title };
  }
  return { slug: item, title: formatSlug(item) };
}

function formatSlug(slug) {
  if (!slug) return "";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function NavigationSection({ section }) {
  const prevInfo = getDisplayInfo(section.previous);
  const nextInfo = getDisplayInfo(section.next);

  return (
    <section id={section.id || "navigation"} className="section py-10 md:py-16">
      <div className="mx-auto max-w-5xl pt-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Previous Service Card */}
          {prevInfo ? (
            <Link
              href={`/services/${prevInfo.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-border-primary bg-bg-primary p-6 transition-all duration-300 hover:border-brand/50 hover:scale-[1.01] sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-border-primary/40 text-text-primary transition-colors duration-300 group-hover:bg-brand group-hover:text-white sm:h-12 sm:w-12">
                  <FiArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                </div>
                <div>
                  <p className="note uppercase">
                    Previous Service
                  </p>
                  <p className="mt-1 subtitle">
                    {prevInfo.title}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Service Card */}
          {nextInfo ? (
            <Link
              href={`/services/${nextInfo.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-border-primary bg-bg-primary p-6 transition-all duration-300 hover:border-brand/50 hover:scale-[1.01] sm:p-7 sm:text-right"
            >
              <div className="flex w-full items-center justify-end gap-4">
                <div className="order-1 sm:order-1">
                  <p className="note uppercase">
                    Next Service
                  </p>
                  <p className="mt-1 subtitle">
                    {nextInfo.title}
                  </p>
                </div>
                <div className="order-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-border-primary/40 text-text-primary transition-colors duration-300 group-hover:bg-brand group-hover:text-white sm:h-12 sm:w-12">
                  <FiArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
