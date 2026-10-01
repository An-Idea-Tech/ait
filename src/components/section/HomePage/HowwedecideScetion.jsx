export default function HowwedecideScetion() {
  return (
    <section
      className="section relative overflow-hidden py-14 sm:py-20 lg:py-28"
      aria-labelledby="how-we-decide-title"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[110px]" />

      <div className="relative mx-auto w-full flex flex-col items-center max-w-6xl">
        <div className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-11 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="how-we-decide-title"
            className="title"
          >
            How We Decide Where to Start
          </h2>
        </div>

        <article className="mt-7 rounded-[1.75rem] border border-brand px-6 py-9 sm:mt-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <p className="subtitle">
            We begin by looking at how customers find the business, what they need before getting in touch, and how the team handles the enquiry after it arrives. That helps us identify what needs to change before deciding which service can address it.
          </p>
        </article>
      </div>
    </section>
  );
}
