import HeroSection from "@/components/section/HowweworkPage/HeroSection";
import React from "react";
import PhaseSection from "@/components/section/HowweworkPage/PhaseSection";
import DaybydaySection from "@/components/section/HowweworkPage/DaybydaySection";
import AfterlaunchSection from "@/components/section/HowweworkPage/AfterlaunchSection";
import Confusion from "@/components/shared/Confusion";
import { confusionData } from "@/data/howwework";

export default function HowweworkPage() {
  return (
    <div className="page flex flex-col gap-12 sm:gap-16">
      <HeroSection />
      <PhaseSection />
      {/* <DaybydaySection /> */}
      {/* <AfterlaunchSection /> */}
      {/* <Confusion confusionData={confusionData} /> */}
    </div>
  );
}
