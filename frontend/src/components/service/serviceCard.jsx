"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function ServiceCard({
  title,
  description,
  link,
  buttonLink,
  url,
  imageUrl,
  image,
  handDrawnImage,
}) {
  const targetLink = link || buttonLink || url || "#";
  const targetImage = imageUrl || image || handDrawnImage || "";

  return (
    <Link href={targetLink} className="flex flex-col w-full h-full">
      <div className="group relative overflow-hidden card-rounded bg-text-primary hover:bg-[#D54C45] p-8 sm:p-10 md:p-12 transition-all duration-500 ease-out  hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between h-full w-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px]">
        {/* Background Hand-drawn Image */}
        {targetImage && (
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <Image
              src={targetImage}
              width={100}
              height={100}
              alt={title || "Service illustration"}
              className=" w-[75%] h-[75%] object-contain opacity-6  transition-all duration-700 ease-out"
            />
          </div>
        )}

        {/* Top Section: Title and Attached Arrow */}
        <div className="relative z-10 flex items-start justify-between gap-4 sm:gap-6 w-full">
          <h3 className="title2 !text-bg-primary !text-left group-hover:!text-white transition-colors duration-500 flex-1 pr-2">
            {title}
          </h3>

          {/* Attached Arrow displayed on hover */}
          <FiArrowRight className="w-12 h-12 shrink-0 text-[#790b06] group-hover:translate-x-4 transition-transform duration-500" />
        </div>

        {/* Bottom Section: Description (aligned to bottom-right like Image 1) */}
        <div className="relative z-10 mt-auto pt-16 sm:pt-20 flex justify-end w-full">
          <p className="subtitle !text-left  !text-bg-primary group-hover:!text-white  transition-colors duration-500 max-w-xs sm:max-w-sm md:max-w-md ">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

