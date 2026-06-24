import React from "react";
import InsightHero from "@/components/insights/InsightsHero";
import Button from "@/components/ui/Button";
export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col">

      <Button variant="light" text="Contact Us" link="/contact" />
      <Button variant="dark" text="Contact Us" link="/contact" />
      <InsightHero />
    </div>
  );
}
