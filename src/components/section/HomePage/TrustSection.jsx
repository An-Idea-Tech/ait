import React from "react";

export default function TrustSection() {
  return (
    <section className="section py-8 sm:py-12 lg:py-20">
      <div className="relative w-full overflow-hidden  bg-bg-primary px-5 py-10 text-text-primary sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-brand/15 blur-3xl sm:h-72 sm:w-72" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent  to-transparent" />

        <div className="relative mx-auto max-w-6xl">
          <header className="w-full">

            <div className="flex flex-wrap  justify-center gap-x-5 gap-y-4">
              <h2 className="title !text-center">
                When Customers and Teams Keep Working Around the Same Problems
              </h2>
            </div>
          </header>

          <div className="mt-14 ">
          
            <div className=" ">
              <article>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <h3 className="subtitle">
                    How Gaps Build Up
                  </h3>
                </div>

                <div className="space-y-6 description text-justify">
                  <p>
                    As the business gets busier, small gaps start to slow things down. A customer cannot quickly understand what you offer. An enquiry reaches the team but becomes hard to follow. Staff rely on messages, spreadsheets, and memory to keep work moving.
                  </p>
                  <p>
                    Businesses usually add pages, forms, spreadsheets, and informal steps as each immediate need arises. With more customers and team members involved, the missing links become hard to ignore.
                  </p>
                </div>
              </article>

              <article className="pt-10 lg:pt-14">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <h3 className="subtitle">
                    Before Choosing a Response
                  </h3>
                </div>

                <p className="description text-justify">
                  During a Discovery Call, we trace the hold-ups affecting customers and the team. From there, we can see whether a clearer website, a process change, or software designed around the way the business operates would make the most sense.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
