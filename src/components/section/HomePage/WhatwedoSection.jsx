import { whatWeDoData } from "@/data/about";

export default function WhatwedoSection() {
  return (
    <section className="section py-10 sm:py-16 lg:py-24">
      <div className="relative w-full overflow-hidden rounded-[2rem] bg-[#09090b] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-blue/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <header className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-10">
            <h2 className="font-manrope-bold text-4xl leading-none tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              {whatWeDoData.title}
            </h2>
            <p className="max-w-xs font-manrope-light text-sm leading-relaxed text-white/55 sm:text-right">
              Digital foundations and practical systems designed around the work that matters.
            </p>
          </header>

          <div className="divide-y divide-white/10">
            {whatWeDoData.points.map((point) => (
              <article
                key={point.id}
                className="group grid gap-4 py-7 transition-colors duration-300 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-7 sm:py-9 lg:grid-cols-[6rem_minmax(0,1fr)_minmax(13rem,0.8fr)] lg:items-start lg:gap-10"
              >
                <span className="font-manrope-medium text-xs tracking-[0.2em] text-brand sm:pt-1">
                  0{point.id}
                </span>

                <h3 className="font-manrope-bold text-2xl leading-tight tracking-[-0.045em] text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {point.title}
                </h3>

                <p className="font-manrope-light text-base leading-relaxed tracking-[-0.02em] text-white/65 sm:text-lg lg:pt-1">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
