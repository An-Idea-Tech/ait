"use client";

import React from "react";
import HeroSection from "@/components/section/Contact/HeroSection";
import BookingSection from "@/components/section/Contact/BookingSection";
import StepsSection from "@/components/section/Contact/StepsSection";
import DirectInquirySection from "@/components/section/Contact/DirectInquirySection";
import ActiveClientsSection from "@/components/section/Contact/ActiveClientsSection";
import TeamSection from "@/components/section/Contact/TeamSection";
import LocationSection from "@/components/section/Contact/LocationSection";

export default function ContactPage() {
  return (
    <main className="page select-none">
      <HeroSection />
      <BookingSection />
      <StepsSection />
      <DirectInquirySection />
      <ActiveClientsSection />
      <TeamSection />
      <LocationSection />
    </main>
  );
}
