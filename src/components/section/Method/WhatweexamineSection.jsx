import Image from "next/image";

const examinationPoints = [
  {
    text: "How your customers find the business and make contact.",
    image:
      "https://ik.imagekit.io/anideatech/ait/ait/method-How%20your%20customers%20find%20the%20business%20and%20make%20contac.png",
  },
  {
    text: "What customers still need to understand before they act.",
    image:
      "https://ik.imagekit.io/anideatech/ait/ait/method-How%20your%20customers%20find%20the%20business%20and%20make%20contact.png",
  },
  {
    text: "Where information, responsibility, or follow-up gets lost.",
    image:
      "https://ik.imagekit.io/anideatech/ait/ait/method-Where%20information,%20responsibility,%20or%20follow-up%20gets%20lost.png",
  },
  {
    text: "Whether the tools already in use support the job.",
    image:
      "https://ik.imagekit.io/anideatech/ait/ait/method-Whether%20the%20tools%20already%20in%20use%20support%20the%20job.png",
  },
];

export default function WhatweexamineSection() {
  return (
    <section className="section py-14 sm:py-20 lg:py-28" aria-labelledby="what-we-examine-title">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="what-we-examine-title" className="title">
            What We Examine
          </h2>
        </header>

        <ol className="mt-10 grid gap-5 sm:mt-14 sm:gap-7 md:grid-cols-2">
          {examinationPoints.map((point, index) => (
            <li
              key={point.text}
              className="group overflow-hidden rounded-[1.5rem] bg-text-primary/[0.03]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-text-primary/5">
                <Image
                  src={point.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex items-start gap-5 p-6 sm:p-8">
                <p className="font-manrope-bold text-xl leading-snug tracking-tight text-text-primary sm:text-2xl">
                  {point.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
