"use client";

import React from "react";
import { servicecard, confusionData } from "@/data/service";
import Heighlight from "@/components/shared/Heighlight";
import Confusion from "../../shared/Confusion";
import Button2 from "@/components/ui/Button2";
import ImportantDesc from "@/components/shared/ImportantDesc";
import ServiceCard from "@/components/service/serviceCard";

export default function ServiceSection() {
  return (
    <section className="section mx-auto w-full max-w-[1600px] gap-16 px-4 pb-32 sm:gap-24 sm:px-8 md:px-12 lg:px-16">
      <div className="flex-col-center mb-4 w-full gap-5 sm:mb-8 lg:gap-10">
        <h2 className="huge-text max-w-full !text-center leading-[0.95]">
          foundation.<wbr />validate.<wbr />convert.<wbr />operate{" "}
          <span className="text-service">Standalone</span>: PRD.
        </h2>
        <div className="subtitle">
          Four categories based on what your business needs right now.
        </div>
      </div>

      {/* Tiers Container */}
      <div className="flex w-full flex-col gap-20 sm:gap-28 md:gap-36">
        {servicecard.map((tier, index) => (
          <div key={tier.id || index} className="flex w-full flex-col">
            {/* Tier Header matching the attached image layout */}
            <div className="border-border-primary/20 mb-8 flex flex-col justify-between gap-4 border-b pb-6 sm:mb-12 xl:flex-row xl:items-end">
              <Heighlight className="" text={tier.tier} />
              <h3 className="title flex-2">{tier.title}</h3>
              <p className="subtitle flex-1 !text-right">{tier.tagline}</p>
            </div>

            {/* Services Grid under each Tier */}
            <div
              className={`grid grid-cols-1 ${
                tier.services.length === 1
                  ? "max-w-2xl"
                  : tier.services.length === 3
                    ? "lg:grid-cols-2 "
                    : "lg:grid-cols-2"
              } w-full items-stretch gap-6 sm:gap-8`}
            >
              {tier.services.map((service, sIndex) => (
                <ServiceCard
                  key={service.id || sIndex}
                  title={service.title}
                  description={service.description}
                  link={service.link || service.buttonLink || service.url}
                  imageUrl={service.imageUrl || service.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex-row-center flex-wrap gap-5">
        <h2 className="subtitile">Not sure which tier fits?</h2>
        <Button2 text="Run the decision tree" link="/contact" />
      </div>

      <ImportantDesc
        text={{
          title: "One thing worth knowing before you choose:",
          description:
            "We work best with founders who want to move their business from person-oriented to process-oriented — owners ready to stop being the bottleneck, even with a small team. If that sounds like you, almost any tier on this page will fit. If it doesn't, we're probably not your studio.",
        }}
      />

      <Confusion confusionData={confusionData} />
    </section>
  );
}
