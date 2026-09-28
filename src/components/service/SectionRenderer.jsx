"use client";

import React from "react";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ListSection from "./ListSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import CTASection from "./CTASection";
import NavigationSection from "./NavigationSection";

export default function SectionRenderer({ section, tier }) {
  if (!section || !section.type) return null;

  switch (section.type) {
    case "hero":
      return <HeroSection section={section} tier={tier} />;
    case "content":
      return <ContentSection section={section} />;
    case "list":
      return <ListSection section={section} />;
    case "feature":
      return <FeatureSection section={section} />;
    case "pricing":
      return <PricingSection section={section} />;
    case "cta":
      return <CTASection section={section} />;
    case "navigation":
      return <NavigationSection section={section} />;
    default:
      console.warn(`[SectionRenderer] Unknown section type: "${section.type}"`);
      return null;
  }
}
