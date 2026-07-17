import React from "react";
import { authorContent } from "@/data/insightdata";

export default function AuthorSection() {
  const { title, image, imageAlt, bioParagraphs, inviteTextBeforeEmail, email, inviteTextAfterEmail } = authorContent;

  return (
    <section className="bg-bg-primary w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        
        <div className="col-span-12 md:col-span-5 flex items-center justify-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-border-primary bg-bg-primary">
          <div className="w-full max-w-[360px] aspect-[4/5] overflow-hidden border border-border-primary bg-bg-primary">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover grayscale contrast-115 hover:scale-[1.02] transition-transform duration-700 select-none"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-24 space-y-6 bg-bg-primary">
          <h2 className="font-manrope-bold text-text-primary text-3xl sm:text-4xl md:text-5xl tracking-tight text-left pb-2">
            {title}
          </h2>
          
          {bioParagraphs.map((para, idx) => (
            <p key={idx} className="text-text-secondary text-sm sm:text-base leading-relaxed font-manrope-light">
              {para}
            </p>
          ))}

          <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-manrope-light">
            {inviteTextBeforeEmail}
            <a href={`mailto:${email}`} className="underline hover:text-brand transition-colors">
              {email}
            </a>
            {inviteTextAfterEmail}
          </p>
        </div>

      </div>
    </section>
  );
}
