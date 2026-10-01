export default function HeroSection() {
  return (
    <section className="section !min-h-screen gap-8 py-12 sm:gap-10 sm:py-16 lg:py-24" aria-labelledby="method-hero-title">
      <div className="max-w-5xl px-2 text-center sm:px-4">
        <h1 id="method-hero-title" className="hero-title-main !text-text-primary">
          Start With What Is Happening Now
        </h1>
      </div>

      <div className="max-w-3xl px-4 text-center">
        <p className="subtitle text-center">
          Over time, the way a business presents itself and the way the team
          works can fall out of sync. Visitors may have questions the website
          does not answer. Enquiries can lose momentum once they reach the
          team, while recurring tasks depend on messages, spreadsheets, or
          memory.
        </p>
        <p className="description mt-6 text-center">
          A request for a new website, tool, or integration may be the right
          answer. We first check what customers need before getting in touch,
          how enquiries move through the team, and whether the current tools
          are enough.
        </p>
      </div>
    </section>
  );
}
