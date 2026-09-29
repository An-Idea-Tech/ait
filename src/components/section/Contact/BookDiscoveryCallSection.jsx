import { bookingSection } from "@/data/contactdata";
import Button from "@/components/ui/Button";

export default function BookDiscoveryCallSection() {
  return (
    <section className="section bg-bg-primary">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h1 className="title max-w-4xl leading-tight lg:text-left">
            {bookingSection.title}
          </h1>

          <p className="subtitle mx-auto mt-6 max-w-2xl text-center lg:mx-0 lg:text-left">
            {bookingSection.description}
          </p>

          <img
            src="https://ik.imagekit.io/anideatech/ait/ait/contact-who-u-will-be-talking-to.png"
            alt="contact-who-u-will-be-talking-to"
            className="mt-8 h-auto max-w-full rounded-2xl"
          />
        </div>

        <div className="mx-auto w-full max-w-[512px] lg:mx-0">
          <form className="text-text-primary rounded-2xl p-6 sm:p-8 dark:bg-[#111114]">
            <h2 className="font-manrope-bold text-3xl leading-tight sm:text-[34px]">
              {bookingSection.formtitle}
            </h2>

            <div className="mt-8 space-y-6">
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="font-manrope-semibold text-base"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="border-border-primary/30 text-text-primary placeholder:text-text-secondary/70 focus:border-brand focus:ring-brand/20 h-[51px] w-full rounded-md border bg-zinc-50 px-4 text-base transition-colors outline-none focus:ring-2 dark:border-[#414148] dark:bg-[#202025] dark:text-white dark:placeholder:text-[#898991]"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="contact"
                  className="font-manrope-semibold text-base"
                >
                  Work email or phone
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  autoComplete="email"
                  required
                  className="border-border-primary/30 text-text-primary placeholder:text-text-secondary/70 focus:border-brand focus:ring-brand/20 h-[51px] w-full rounded-md border bg-zinc-50 px-4 text-base transition-colors outline-none focus:ring-2 dark:border-[#414148] dark:bg-[#202025] dark:text-white dark:placeholder:text-[#898991]"
                  placeholder="jane@company.com or +91..."
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="company-and-problem"
                  className="font-manrope-semibold text-base"
                >
                  Company and the problem you want to discuss
                </label>
                <textarea
                  id="company-and-problem"
                  name="companyAndProblem"
                  rows={4}
                  required
                  className="border-border-primary/30 text-text-primary placeholder:text-text-secondary/70 focus:border-brand focus:ring-brand/20 w-full resize-y rounded-md border bg-zinc-50 px-4 py-3 text-base transition-colors outline-none focus:ring-2 dark:border-[#414148] dark:bg-[#202025] dark:text-white dark:placeholder:text-[#898991]"
                  placeholder="Tell us briefly about the bottleneck or what is slowing things down..."
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="preferred-date-time"
                  className="font-manrope-semibold text-base"
                >
                  Preferred date and time
                </label>
                <input
                  id="preferred-date-time"
                  name="preferredDateTime"
                  type="text"
                  className="border-border-primary/30 text-text-primary placeholder:text-text-secondary/70 focus:border-brand focus:ring-brand/20 h-[51px] w-full rounded-md border bg-zinc-50 px-4 text-base transition-colors outline-none focus:ring-2 dark:border-[#414148] dark:bg-[#202025] dark:text-white dark:placeholder:text-[#898991]"
                  placeholder="Tomorrow afternoon"
                />
              </div>
            </div>

            <p className="note mt-6">{bookingSection.note}</p>

            <div className="mt-8 flex w-full justify-end">
              <Button text="Send Your Enquiry" type="submit" variant="brand" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
