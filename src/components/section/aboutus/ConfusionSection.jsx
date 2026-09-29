import Button from "@/components/ui/Button";
import { aboutCtaData } from "@/data/about";

export default function ConfusionSection() {
  return (
    <section className="section bg-bg-primary">
      <div className="mx-auto flex min-h-[360px] w-full max-w-6xl flex-col items-center justify-center rounded-2xl  bg-[#151518] px-6 py-16 text-center sm:min-h-[430px] sm:px-12 sm:py-20">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
          <h2 className="title !text-center !text-white">
            {aboutCtaData.title}
          </h2>
         
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
          {aboutCtaData.description}
        </p>

        <div className="mt-10">
          <Button
            text={aboutCtaData.buttonText}
            link={aboutCtaData.buttonLink}
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}
