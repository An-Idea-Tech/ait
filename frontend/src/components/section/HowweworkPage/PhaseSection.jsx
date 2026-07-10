import PhaseCard from "@/components/howwework/PhaseCard";
import SectionNav from "@/components/shared/SectionNav";
import { howWeWorkPhases, navigationSections } from "@/data/howwework";
import Image from "next/image";
import React from "react";

export default function PhaseSection() {
  return (
    <div className="section">
      <div className="flex-col-center gap-12 sm:gap-16">
        {/* <SectionNav sections={navigationSections} /> */}
        {howWeWorkPhases.map((phase) => (
          <React.Fragment key={phase.id}>
            {(phase.image || phase.phaseIcon) && (
              <div className="img w-full flex justify-center lg:justify-end">
                <Image
                src={phase.image || phase.phaseIcon}
                alt={phase.title || "Phase image"}
                width={100}
                height={100}
                className=" h-50 w-50 shrink-0 object-contain block xl:h-50 xl:w-50"
              />
              </div>
            )}

            <PhaseCard data={phase} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
