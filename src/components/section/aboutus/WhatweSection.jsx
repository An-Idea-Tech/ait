import { whatWeSectionData } from "@/data/about";

export default function WhatweSection() {
  return (
    <section className="section bg-bg-primary">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-5  sm:flex-row sm:items-end sm:justify-between ">
          <h2 className="title text-left">{whatWeSectionData.title}</h2>
        </div>

        <div className="mt-10 space-y-8 text-lg !text-justify description text-text-secondary sm:mt-12 sm:text-xl">
          <p>{whatWeSectionData.introduction}</p>

          <h3 className="text-text-primary">{whatWeSectionData.quote}</h3>

          {whatWeSectionData.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <p className="pt-2 font-manrope-bold text-text-primary">
            {whatWeSectionData.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
