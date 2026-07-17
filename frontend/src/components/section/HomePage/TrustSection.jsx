import React from "react";
import { trustsection } from "@/data/home";
import Image from "next/image";
import Note from "@/components/shared/Note";
import Button2 from "@/components/ui/Button2";

export default function TrustSection() {
  return (
    <section className="section">
      <div className="section-padding-x flex-col-center gap-10 relative mx-auto max-w-5xl text-center">
        {/* Giant Quote Icon */}
        <div className="inline-block">
          <Image
            src={"/svgs/quote.svg"}
            alt="quote"
            width={80}
            height={80}
            className="h-20 w-20 md:h-24 md:w-24 lg:h-30 lg:w-30"
          />
        </div>

        {/* Big Quote Headline */}
        <div className="w-full">
          <h2 className="title mx-auto max-w-7xl xl:!text-[4vw]">
            {trustsection.quote}
          </h2>
        </div>

        {/* Description Text */}
        <div className="mx-auto md:max-w-4xl">
          {trustsection.description.split("\n").map((paragraph, index) => (
            <p key={index} className="trust-description">
              {paragraph.trim()}
            </p>
          ))}
        </div>

       <div className="flex-col-center gap-3">
         <Note text="This is the part most clients tell us they wish their last agency had done."/>
        
        <Button2 text="See how we work" link="/contact"/>
       </div>

      </div>
    </section>
  );
}
