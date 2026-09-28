"use client";

import React from "react";
import HeroSection from "@/components/section/Method/HeroSection";
import Section01 from "@/components/section/Method/Section01";
import Section02 from "@/components/section/Method/Section02";
import Section03 from "@/components/section/Method/Section03";
import Section04 from "@/components/section/Method/Section04";
import Section05 from "@/components/section/Method/Section05";
import Section06 from "@/components/section/Method/Section06";
import Section07 from "@/components/section/Method/Section07";
import Section08 from "@/components/section/Method/Section08";

export default function MethodPage() {
  return (
    <main className="page select-none">
      <HeroSection />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
    </main>
  );
}
