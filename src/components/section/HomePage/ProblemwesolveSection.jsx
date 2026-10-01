const problems = [
  {
    title: "Your business is hard to understand online.",
    description:
      "Customers should not need a call simply to understand your services, who they are for, or how to take the next step.",
  },
  {
    title: "Enquiries become difficult to manage after the first contact.",
    description:
      "As an enquiry moves into onboarding and delivery, the handoffs between the team can become harder to follow.",
  },
  {
    title: "You know something needs to change, but you are not sure where to begin.",
    description:
      "A Discovery Call gives you space to talk through the problem and decide which part is worth tackling first.",
  },
];

export default function ProblemwesolveSection() {
  return (
    <section
      className="section relative overflow-hidden py-14 sm:py-20 lg:py-28"
      aria-labelledby="problems-we-solve-title"
    >
      <div className="pointer-events-none absolute top-24 left-[8%] h-52 w-52 rounded-full bg-brand/10 blur-[90px]" />
      <div className="pointer-events-none absolute right-[4%] bottom-0 h-64 w-64 rounded-full bg-blue/10 blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-20">
        <header className="lg:sticky lg:top-28 lg:self-start">
         
          <h2
            id="problems-we-solve-title"
            className="mt-4 title !text-left"
          >
            Problems We Help Solve
          </h2>
          <p className="description mt-7 max-w-sm">
            The right solution starts by making the obstacles visible.
          </p>
        </header>

        <div className="relative space-y-5 py-2 sm:space-y-7">
          <div className="pointer-events-none absolute top-10 bottom-10 left-7 hidden border-l border-dashed border-border-primary/40 sm:block" />

          {problems.map((problem, index) => (
            <article
              key={problem.title}
              className={`liquid-glass group relative rounded-[1.75rem] border border-border-primary/20 transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="relative flex gap-5 sm:gap-7">
                
                <div className="pt-1">
                  <h3 className="subtitle !text-left">
                    {problem.title}
                  </h3>
                  <p className="description mt-4 max-w-xl">{problem.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
