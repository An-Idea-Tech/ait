import { howWeMakeRecommendationsData } from "@/data/about";

export default function Howwegot() {
  return (
    <section className="section bg-bg-primary">
      <div className="mx-auto grid w-full max-w-6xl gap-10 ">
        <div className="lg:pt-2">
          
          <h2 className="title mt-5 !text-left">
            {howWeMakeRecommendationsData.title}
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <p className="description ">
            {howWeMakeRecommendationsData.introduction}
          </p>

          <p className="rounded-2xl  bg-brand p-6 description !text-bg-primary text-xl leading-relaxed sm:p-8 sm:text-2xl">
            {howWeMakeRecommendationsData.highlight}
          </p>
        </div>
      </div>
    </section>
  );
}
