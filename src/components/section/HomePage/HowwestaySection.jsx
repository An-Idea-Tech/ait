import { howWeStayInvolvedData } from "@/data/about";

export default function HowwestaySection() {
  return (
    <section className="section bg-bg-primary px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="title text-left">
          {howWeStayInvolvedData.title}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 sm:mt-12">
          {howWeStayInvolvedData.items.map((item, index) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-border-primary bg-text-primary/[0.03] p-6 sm:p-8"
            >
              <span className="font-manrope-bold text-sm tracking-[0.2em] text-text-third">
                0{index + 1}
              </span>
              <h3 className="mt-8 font-manrope-bold text-2xl tracking-tight text-text-primary sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                {item.description}
              </p>
              {item.highlight && (
                <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                  {item.highlight}
                </p>
              )}
            </article>
          ))}
        </div>

        <p className="mt-8 text-lg leading-relaxed text-text-secondary sm:mt-10 sm:text-xl">
          {howWeStayInvolvedData.closing}
        </p>
      </div>
    </section>
  );
}
