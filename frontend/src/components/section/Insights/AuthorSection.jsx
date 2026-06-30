import React from "react";

export default function AuthorSection() {
  return (
    <section className="bg-bg-primary border-t border-b border-border-primary w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full mx-auto max-w-[1920px]">
        
        {/* Left Column (Black & White Portrait) */}
        <div className="col-span-12 md:col-span-5 flex items-center justify-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-border-primary bg-bg-primary">
          <div className="w-full max-w-[360px] aspect-[4/5] overflow-hidden border border-border-primary bg-bg-primary">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
              alt="Aneesh - Founder"
              className="w-full h-full object-cover grayscale contrast-115 hover:scale-[1.02] transition-transform duration-700 select-none"
            />
          </div>
        </div>

        {/* Right Column (Biography Text) */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-24 space-y-6 bg-bg-primary">
          {/* Left-Aligned Heading */}
          <h2 className="title pb-2">Who writes these.</h2>
          
          {/* Paragraphs */}
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-manrope-light">
            Most essays are written by Aneesh, the founder, drawing on ten years of running AIT and conversations with hundreds of SME founders. Some pieces are written collaboratively with the team. Occasional guest pieces by trusted operators in our network.
          </p>
          
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-manrope-light">
            We don't publish AI-generated content. We don't ghostwrite. If you read something here, a human at AIT thought it through and wrote it.
          </p>

          <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-manrope-light">
            If a topic isn't covered here that you'd want us to write about, email us —{" "}
            <a href="mailto:solutions@anideatech.com" className="underline hover:text-brand transition-colors">
              solutions@anideatech.com
            </a>
            . We genuinely take requests.
          </p>
        </div>

      </div>
    </section>
  );
}
