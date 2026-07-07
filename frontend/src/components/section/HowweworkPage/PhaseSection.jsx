import PhaseCard from "@/components/howwework/PhaseCard";
import SectionNav from "@/components/shared/SectionNav";
import { howWeWorkPhases, navigationSections } from "@/data/howwework";
import React from "react";

export default function PhaseSection() {
  return (
    <div className="section">
      <div className="flex-col-center gap-12 sm:gap-16">
        {/* <SectionNav sections={navigationSections} /> */}
        {howWeWorkPhases.map((phase) => (
          <PhaseCard key={phase.id} data={phase} />
        ))}
      </div>
    </div>
  );
}
