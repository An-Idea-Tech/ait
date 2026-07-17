"use client";

import React from "react";
import LaunchCard from "@/components/howwework/LaunchCard";
import Button from "@/components/ui/Button";
import { afterLaunchData } from "@/data/howwework";
import Button2 from "@/components/ui/Button2";

export default function AfterlaunchSection() {
  if (!afterLaunchData) return null;

  return (
    <div
      id={afterLaunchData.id}
      className="w-full scroll-mt-32 md:scroll-mt-36 bg-bg-primary text-text-primary transition-colors duration-300 py-10"
    >
      {/* Section Header */}
      <div className={`flex flex-col items-start sm:items-end !text-left sm:!text-right mb-12 sm:mb-16 md:mb-20 `}>
        <h2 className="title mb-3 !text-left sm:!text-right">
          {afterLaunchData.title}
        </h2>
        <p className="subtitle !text-left sm:!text-right max-w-2xl text-text-secondary">
          {afterLaunchData.subtitle}
        </p>
      </div>

      {/* 2-Column Cards Table Container */}
      <div className="w-full border-t border-border-primary transition-colors duration-300">
        {afterLaunchData.cards?.map((card) => (
          <LaunchCard key={card.id} data={card} />
        ))}
      </div>

      {/* Bottom Actions Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-12 sm:pt-16 pb-8">
        {afterLaunchData.actions?.map((action, index) => (
          <div
            key={action.id || index}
            className={`flex flex-col items-center justify-center text-center px-6 py-4 gap-6 ${
              index === 0 ? "" : ""
            }`}
          >
            <p className="subtitle  max-w-md">
              {action.label}
            </p>
            <Button2
              text={action.buttonText}
              link={action.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
