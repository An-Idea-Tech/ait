"use client";

import React from "react";
import HeroSection from "@/components/section/Insights/HeroSection";
import CalendarSection from "@/components/section/Insights/CalendarSection";
import SubscribeSection from "@/components/section/Insights/SubscribeSection";
import AuthorSection from "@/components/section/Insights/AuthorSection";
import ContactSection from "@/components/section/Insights/ContactSection";

export default function InsightsPage() {
  return (
    <>
      <main>
        <HeroSection />
        <CalendarSection />
        <SubscribeSection />
        <AuthorSection />
        <ContactSection />
      </main>
    </>
  );
}
