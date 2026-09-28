import PhaseCard from "@/components/howwework/PhaseCard";
import Note from "@/components/shared/Note";
import SectionNav from "@/components/shared/SectionNav";
import { howWeWorkPhases, navigationSections } from "@/data/howwework";
import Image from "next/image";
import React from "react";

export default function PhaseSection() {
  return (
    <div className="section gap-10">

      <h2 className="title">The <span className="text-brand">four</span> phases.</h2>
      <p className="subtitle max-w-2xl">Each phase has a clear start, a clear end, and a deliverable you can hold in your hand. You always know which phase you're in and what's coming next.</p>

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

      <Note text="The four phases aren't a marketing framework. They're how we actually run every project. Ask any current client."/>
    </div>
  );
}
