import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import { insightsPageData as data } from '../../data/insightsPage';

gsap.registerPlugin(ScrollTrigger);

const InsightsPageContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.insights-hero',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Scroll Animations for sections
      gsap.utils.toArray('.insights-section').forEach(sec => {
        gsap.fromTo(sec,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%"
            }
          }
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-cream dark:bg-dark text-slate-800 dark:text-slate-200 min-h-screen transition-colors duration-300" ref={containerRef}>
      <SEO title={data.seo.title} description={data.seo.description} />
      <Navbar />

      <main id="main-content" role="main">
        {/* HERO SECTION */}
        <section className="insights-hero pt-32 pb-16 md:pt-40 md:pb-24 border-b border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <div className="text-[10px] font-bold tracking-widest text-brown uppercase mb-6">{data.hero.topTag}</div>
            <h1 className="font-fraunces_regular text-5xl md:text-6xl text-navy dark:text-light tracking-tight leading-[1.1] mb-8">
              {data.hero.title}
            </h1>
            <p className="font-inter_regular text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {data.hero.subtitle}
            </p>
          </div>
        </section>

        {/* CALENDAR INTRO */}
        <section className="py-16 md:py-24 insights-section border-b border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-4">{data.calendarIntro.title}</h2>
            <p className="font-inter_regular text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {data.calendarIntro.content}
            </p>
          </div>
        </section>

        {/* ESSAYS LIST BY MONTH */}
        <div className="insights-section">
          {data.months.map((monthBlock, index) => (
            <section key={index} className="py-16 md:py-24 border-b border-black/10 dark:border-white/10">
              <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                <h3 className="font-fraunces_regular text-4xl text-navy dark:text-light mb-12">{monthBlock.monthName}</h3>

                <div className="space-y-16">
                  {monthBlock.essays.map((essay, i) => (
                    <article key={i}>
                      <Link to={`/insights/${essay.slug}`} className="group inline-block mb-2">
                        <h4 className="font-fraunces_regular text-xl md:text-2xl text-navy dark:text-light leading-snug group-hover:text-brown transition-colors">
                          {essay.title}
                        </h4>
                      </Link>
                      <div className="font-inter_regular italic text-xs md:text-sm text-slate-500 mb-4">
                        Category: {essay.category} · {essay.date} · {essay.readTime}
                      </div>
                      <p className="font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                        {essay.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* SUBSCRIBE SECTION */}
        <section className="py-24 md:py-32 insights-section border-b border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-4">{data.subscribe.title}</h2>
            <p className="font-inter_regular text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              {data.subscribe.content}
            </p>

            {/* Embedded Form Placeholder */}
            <div className="bg-[#FAF7EF] dark:bg-surface-card p-12 text-center rounded-sm">
              <div className="font-fraunces_regular text-lg md:text-xl text-navy dark:text-light font-bold mb-4">{data.subscribe.boxText}</div>
              <div className="font-inter_regular italic text-sm text-slate-500">{data.subscribe.boxSubtext}</div>
            </div>
          </div>
        </section>

        {/* AUTHOR SECTION */}
        <section className="py-16 md:py-24 insights-section border-b border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-8">{data.author.title}</h2>
            <div className="space-y-6">
              {data.author.paragraphs.map((p, i) => (
                <p key={i} className="font-inter_regular text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {i === 2 ? (
                    // Hardcoding the third paragraph specifically to handle the email link style cleanly without dangerous HTML injection
                    <>
                      If a topic isn't covered here that you'd want us to write about, email us — <a href="mailto:solutions@anideatech.com" className="text-brown border-b border-brown hover:opacity-70 transition-opacity">solutions@anideatech.com</a>. We genuinely take requests.
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-24 md:py-32 insights-section">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-8">{data.contact.title}</h2>
            <div className="space-y-6 mb-12">
              {data.contact.paragraphs.map((p, i) => (
                <p key={i} className="font-inter_regular text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {i === 1 ? (
                    <>
                      For project enquiries, the Contact page is the right path. For ongoing discussions about the work itself, <a href="mailto:solutions@anideatech.com" className="text-brown border-b border-brown hover:opacity-70 transition-opacity">solutions@anideatech.com</a> gets you to the right person.
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 mb-24">
              <a href={data.contact.buttons.primary.href} className="btn-primary px-8 py-3.5 text-sm md:text-base w-full sm:w-auto text-center">
                {data.contact.buttons.primary.text}
              </a>
              <Link to={data.contact.buttons.secondary.href} className="font-inter_regular text-sm md:text-base text-navy dark:text-light font-medium border-b border-navy dark:border-light pb-0.5 hover:opacity-70 transition-opacity">
                {data.contact.buttons.secondary.text}
              </Link>
            </div>

            <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-6 md:gap-8">
              {data.footerLinks.map((link, i) => (
                <Link key={i} to={link.href} className="font-inter_regular text-sm font-medium border-b border-brown text-brown pb-0.5 hover:opacity-70 transition-opacity">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const InsightsPage = () => (
  <ThemeProvider>
    <InsightsPageContent />
  </ThemeProvider>
);

export default InsightsPage;
