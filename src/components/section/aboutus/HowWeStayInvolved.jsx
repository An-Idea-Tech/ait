import { howWeStayInvolvedData } from "@/data/about";

export default function HowWeStayInvolved() {
  return (
    <section className="section bg-bg-primary">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="title text-left">{howWeStayInvolvedData.title}</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 sm:mt-12">
          {howWeStayInvolvedData.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl bg-brand  p-6 sm:p-8"
            >
              <h3 className="mt-5 font-manrope-bold text-2xl !text-bg-primary">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed !text-bg-primary sm:text-lg">
                {item.description}
              </p>
              {item.highlight && (
                <p className="mt-6  font-manrope-semibold leading-relaxed text-bg-primary">
                  {item.highlight}
                </p>
              )}
            </article>
          ))}
        </div>

        <p className="mt-8 text-lg text-text-secondary sm:mt-10 sm:text-xl">
          {howWeStayInvolvedData.closing}
        </p>
      </div>
    </section>
  );
}
