"use client";

import React from "react";
import InsightsHero from "@/components/insights/InsightsHero";
import InsightsCalendar from "@/components/insights/InsightsCalendar";
import InsightsSubscribe from "@/components/insights/InsightsSubscribe";
import InsightsAuthor from "@/components/insights/InsightsAuthor";
import InsightsContact from "@/components/insights/InsightsContact";

export default function InsightsPage() {
  return (
    <div className="bg-bg-primary text-text-primary flex flex-col transition-colors duration-500 selection:bg-brand selection:text-white">
      <InsightsHero />
      <InsightsCalendar />
      <InsightsSubscribe />
      <InsightsAuthor />
      <InsightsContact />
    </div>
  );
}
