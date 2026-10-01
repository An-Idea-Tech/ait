import Button from "@/components/ui/Button";

export default function HowwedecideSection() {
  return (
    <section className="section py-14 sm:py-20 lg:py-28" aria-labelledby="how-we-decide-title">
      <div className="mx-auto w-full max-w-5xl">
        <div className="border-t border-border-primary/25 pt-10 sm:pt-14">
          <header className="mx-auto max-w-3xl text-center">
            <h2 id="how-we-decide-title" className="title">
              How We Decide What to Do
            </h2>
          </header>

          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-center sm:mt-14 sm:space-y-8">
            <p className="subtitle text-center">
              We identify the problem and <strong>decide what needs to change</strong>. An existing tool stays in place when it already supports the work.
            </p>

            <p className="description text-center">
              If a change is needed, we decide whether it is best handled through a simpler adjustment, a process change, a website, an integration, a Custom Web App, or Custom Software.
            </p>

            <p className="description text-center">
              Solutions Consulting focuses on an immediate problem. <strong className="font-manrope-bold text-text-secondary">It helps decide what to do about it.</strong>
            </p>

            <p className="description text-center">
              If you can describe what is not working, a Discovery Call can clarify the problem before any service is chosen. You do not need to arrive with a chosen service.
            </p>
          </div>

          <div className="mt-10 flex justify-center sm:mt-14">
            <Button text="Discuss Your Starting Point" link="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
