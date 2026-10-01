const serviceStages = ["Foundation", "Validate", "Convert", "Operate"];

export default function HeroSection() {
  return (
    <section className="section " aria-labelledby="services-hero-title">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mx-auto max-w-4xl text-center">
          <h1 id="services-hero-title" className="hero-title-main !text-text-primary">
            Services
          </h1>
          <div className="mx-auto mt-7 max-w-3xl space-y-4 sm:mt-9">
            <p className="subtitle text-center">
              The services are grouped by the business problem they address. They are not fixed packages or a sequence every project must follow.
            </p>
            <p className="description text-center">
              A Discovery Call is the standard starting point.
            </p>
          </div>
        </header>

      </div>
    </section>
  );
}
