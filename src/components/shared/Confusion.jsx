import Button from "@/components/ui/Button";

export default function Confusion({ confusionData }) {
  if (!confusionData?.title || !confusionData?.description) return null;

  return (
    <section className="section  px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto flex min-h-105 w-full max-w-5xl flex-col items-center justify-center rounded-2xl border border-white/15 bg-[#000000] px-6 py-16 text-center sm:min-h-121.25 sm:px-12 sm:py-20">
        <h2 className="max-w-2xl font-manrope-bold text-4xl leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl">
          {confusionData.title}
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed tracking-tight text-white/70 sm:mt-9 sm:text-xl">
          {confusionData.description}
        </p>

        {confusionData.buttons?.length > 0 && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {confusionData.buttons.map((button) => (
              <Button
                key={button.id || button.text}
                text={button.text}
                link={button.link}
                variant="light"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
