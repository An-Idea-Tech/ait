"use client";

import React from "react";
import HeroSection from "@/components/section/Contact/HeroSection";
import BookDiscoveryCallSection from "@/components/section/Contact/BookDiscoveryCallSection";
import StepsSection from "@/components/section/Contact/StepsSection";
import DirectInquirySection from "@/components/section/Contact/DirectInquirySection";
import FAQSection from "@/components/section/Contact/FAQSection";

export default function ContactPage() {
  return (
    <main className="page select-none">
      <HeroSection />
      <BookDiscoveryCallSection />
      <StepsSection />
      <DirectInquirySection />
      <FAQSection />
      
      {/* <LocationSection /> */}
    </main>
  );
}
