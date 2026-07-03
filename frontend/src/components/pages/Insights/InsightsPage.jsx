"use client";

import React from "react";
import HeroSection from "@/components/section/Insights/HeroSection";
import BlogSection from "@/components/section/Insights/BlogSection";
import SubscribeSection from "@/components/section/Insights/SubscribeSection";
import AuthorSection from "@/components/section/Insights/AuthorSection";
import ContactSection from "@/components/section/Insights/ContactSection";

export default function InsightsPage() {
  return (
    <main className="page flex flex-col gap-16 md:gap-24">
      <HeroSection />
      <BlogSection />
      <SubscribeSection />
      <AuthorSection />
      <ContactSection />
    </main>
  );
}
