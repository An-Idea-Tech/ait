import React from "react";
import { heroContent } from "@/data/insightdata";
import Heighlight from "@/components/shared/Heighlight";

export default function HeroSection() {
    const { pill, title, image, imageAlt, description } = heroContent;

    return (
        <section className="bg-bg-primary flex flex-col selection:bg-brand selection:text-white">

            <div className="flex my-5 md:mt-12">
                <Heighlight text={pill} />
            </div>

            <div className="w-full max-w-[1400px] mx-auto flex flex-col">
                <h1 className="hero-title-main">
                    {title}
                </h1>

                <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-20 lg:pl-[15%] mt-12 md:mt-16">
                    <div className="w-full lg:w-[65%] overflow-hidden bg-bg-primary">
                        <img
                            src={image}
                            alt={imageAlt}
                            className="w-full h-auto object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                        />
                    </div>

                    <div className="w-full lg:w-[35%] lg:pb-6">
                        <p className="description">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}