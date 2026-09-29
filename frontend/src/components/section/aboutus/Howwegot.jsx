import { howWeMakeRecommendationsData } from "@/data/about";

export default function Howwegot() {
  return (
    <section className="section bg-bg-primary">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:pt-2">
          <p className="font-manrope-bold text-xs uppercase tracking-[0.18em] text-brand">
            {howWeMakeRecommendationsData.updatedOn}
          </p>
          <h2 className="title mt-5 text-left">
            {howWeMakeRecommendationsData.title}
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <p className="text-lg leading-relaxed text-text-secondary sm:text-xl">
            {howWeMakeRecommendationsData.introduction}
          </p>

          <p className="rounded-2xl border border-brand/30 bg-brand/10 p-6 font-manrope-semibold text-xl leading-relaxed text-text-primary sm:p-8 sm:text-2xl">
            {howWeMakeRecommendationsData.highlight}
          </p>
        </div>
      </div>
    </section>
  );
}
