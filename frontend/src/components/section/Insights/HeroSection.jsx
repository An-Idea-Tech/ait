import React from "react";

export default function HeroSection() {
    return (
        <section className="bg-bg-primary pt-28 pb-16 md:pt-36 md:pb-24 section-padding-x flex flex-col selection:bg-brand selection:text-white border-b border-border-primary">

            {/* Top Pill Badge (Left Aligned) */}
            <div className="flex my-5 md:mt-12">
                <span className="rounded-full border border-border-primary bg-bg-primary px-6 py-2.5 text-xs sm:text-sm text-text-secondary tracking-wide shadow-sm font-manrope-medium">
                    What we offer, organized by what your business needs.
                </span>
            </div>

            <div className="w-full max-w-[1400px] mx-auto flex flex-col">
                {/* Large Headline (Left Aligned) */}
                <h1 className="hero-title-main">
                    Essays for founders <br className="hidden sm:block" />
                    who'd rather think than <br className="hidden sm:block" />
                    skim.
                </h1>

                {/* Flex container for Image and Text */}
                <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-20 lg:pl-[15%] mt-12 md:mt-16">
                    {/* Image Area */}
                    <div className="w-full lg:w-[65%] overflow-hidden bg-bg-primary">
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                            alt="Three colorful posters on a concrete wall"
                            className="w-full h-auto object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                        />
                    </div>

                    {/* Excerpt Paragraph Area */}
                    <div className="w-full lg:w-[35%] lg:pb-6">
                        <p className="description">
                            Notes on how SME software should actually get built, what we've
                            learned running a studio for ten years, and observations from
                            working with founders across India. Most pieces take 6-12 minutes
                            to read. We don't publish on a schedule. We publish when we have
                            something worth saying.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}