import { howWeStayInvolvedData } from "@/data/about";

export default function HowWeStayInvolved() {
  return (
    <section className="section bg-bg-primary">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 border-b border-border-primary pb-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="title text-left">{howWeStayInvolvedData.title}</h2>
          <p className="font-manrope-bold text-xs uppercase tracking-[0.18em] text-brand">
            {howWeStayInvolvedData.addedOn}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 sm:mt-12">
          {howWeStayInvolvedData.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border-primary/20 p-6 sm:p-8"
            >
              <p className="font-manrope-bold text-xs tracking-[0.16em] text-brand">
                0{index + 1}
              </p>
              <h3 className="mt-5 font-manrope-bold text-2xl text-text-primary">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                {item.description}
              </p>
              {item.highlight && (
                <p className="mt-6 border-l-2 border-brand pl-4 font-manrope-semibold leading-relaxed text-text-primary">
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
