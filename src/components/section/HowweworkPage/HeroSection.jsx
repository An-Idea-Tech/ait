import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="section gap-8 py-12 sm:gap-10 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-2 text-center sm:px-4">
        <h1 className="hero-title-main !text-text-primary">
          What Working Together Looks Like
        </h1>
      </div>


      <div className="max-w-3xl px-4 text-center">
        <p className="subtitle text-center">
          Every project follows a clear sequence, from understanding the issue
          to getting the agreed website or application into day-to-day use. The
          detail changes from project to project, but progress and items needing
          your input stay visible in the client portal.
        </p>
      </div>
      <Button text="Contact Us" />
    </section>
  );
}
