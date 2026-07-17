"use client";

import React from "react";
import HeroSection from "@/components/section/insightsPage/HeroSection";
import BlogSection from "@/components/section/insightsPage/BlogSection";
import SubscribeSection from "@/components/section/insightsPage/SubscribeSection";
import AuthorSection from "@/components/section/insightsPage/AuthorSection";
import ContactSection from "@/components/section/insightsPage/ContactSection";

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
