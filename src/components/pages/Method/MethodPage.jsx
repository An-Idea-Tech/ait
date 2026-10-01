"use client";

import React from "react";
import HeroSection from "@/components/section/Method/HeroSection";
import WhatweexamineSection from "@/components/section/Method/WhatweexamineSection";
import HowwedecideSection from "@/components/section/Method/HowwedecideSection";

export default function MethodPage() {
  return (
    <main className="page select-none">
      <HeroSection />
      <WhatweexamineSection />
      <HowwedecideSection />
    </main>
  );
}
