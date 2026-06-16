import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import { servicesPageData as data } from '../../data/servicesPage';

gsap.registerPlugin(ScrollTrigger);

const ServicesPageContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.services-hero',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Scroll Animations for sections
      gsap.utils.toArray('.services-section').forEach(sec => {
        gsap.fromTo(sec,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 80%"
            }
          }
        );
      });

      // Tier cards stagger animation
      gsap.utils.toArray('.tier-group').forEach(group => {
        gsap.fromTo(group.querySelectorAll('.service-card'),
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
            scrollTrigger: {
              trigger: group,
              start: "top 75%"
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
        <section className="services-hero pt-32 pb-16 md:pt-40 md:pb-24 border-b border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-brown"></div>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">{data.hero.topTag}</span>
            </div>
            <h1 className="font-fraunces_regular text-5xl md:text-7xl lg:text-8xl text-navy dark:text-light tracking-tight leading-[1.1] mb-8 max-w-4xl">
              {data.hero.titlePlain}
              <span className="font-fraunces_italic text-brown">{data.hero.titleItalic}</span>
            </h1>
            <p className="font-inter_regular text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {data.hero.subtitle}
            </p>
          </div>

          <div className="container mx-auto px-4 md:px-8 max-w-5xl mt-16 md:mt-24">
            <div className="border-t border-b border-black/10 dark:border-white/10 py-4 overflow-x-auto no-scrollbar">
              <nav className="flex gap-6 md:gap-8 min-w-max">
                {data.nav.map((item, i) => (
                  <a key={i} href={item.href} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-navy dark:hover:text-light transition-colors whitespace-nowrap">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* WORK / TIERS SECTION */}
        <section className="py-24 md:py-32 services-section">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="mb-20 md:mb-24">
              <h2 className="font-fraunces_regular text-4xl md:text-5xl text-navy dark:text-light tracking-tight mb-4 max-w-2xl">{data.workSection.title}</h2>
              <p className="font-inter_regular text-slate-600 dark:text-slate-400 max-w-2xl">{data.workSection.subtitle}</p>
            </div>

            <div className="space-y-24 md:space-y-32">
              {data.workSection.tiers.map((tier) => (
                <div key={tier.id} id={tier.id} className="tier-group">
                  <div className="border-t border-black/10 dark:border-white/10 pt-8 md:pt-12 mb-8 md:mb-12">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-bold text-brown tracking-widest uppercase mb-2">{tier.tierTag}</div>
                        <h3 className="font-fraunces_regular text-3xl text-navy dark:text-light">{tier.title}</h3>
                      </div>
                      <div className="md:w-1/2">
                        <p className="font-inter_regular italic text-slate-500 text-sm md:text-base md:text-right">{tier.tierSubtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {tier.services.map((service, i) => (
                      <div key={i} className="service-card bg-[#FAF7EF] dark:bg-surface-card border border-black/5 dark:border-white/5 p-8 md:p-10 flex flex-col justify-between h-full transition-shadow duration-300 hover:shadow-md">
                        <div>
                          <h4 className="font-fraunces_regular text-2xl text-navy dark:text-light mb-4">{service.title}</h4>
                          <p className="font-inter_regular text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                            {service.description}
                          </p>
                        </div>
                        <div>
                          <Link to={service.slug} className="text-xs font-semibold border-b border-brown text-brown pb-0.5 inline-block hover:opacity-70 transition-opacity">
                            {service.linkText}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Run Decision Tree Link */}
            <div className="mt-32 pt-8 border-t border-black/10 dark:border-white/10 text-center">
              <p className="font-inter_regular text-sm text-slate-600 dark:text-slate-400">
                {data.workSection.decisionTreeLink.text}{' '}
                <a href={data.workSection.decisionTreeLink.href} className="text-brown font-medium hover:underline">
                  {data.workSection.decisionTreeLink.linkText}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* DECISION TREE CTA SECTION */}
        <section id="decision-tree" className="py-24 md:py-32 bg-[#FAF7EF] dark:bg-surface-card services-section border-t border-b border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="font-fraunces_regular text-4xl md:text-5xl text-navy dark:text-light tracking-tight mb-8">
              {data.decisionTreeCTA.title}
            </h2>

            <div className="space-y-6 mb-12 max-w-3xl">
              {data.decisionTreeCTA.paragraphs.map((p, i) => (
                <p key={i} className="font-inter_regular text-slate-700 dark:text-slate-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="bg-cream dark:bg-surface border-l-2 border-brown p-6 md:p-8 mb-12 max-w-3xl">
              <h4 className="font-fraunces_regular text-lg text-navy dark:text-light font-bold mb-3">
                {data.decisionTreeCTA.calloutBox.title}
              </h4>
              <p className="font-inter_regular text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {data.decisionTreeCTA.calloutBox.content}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 mb-24">
              <a href={data.decisionTreeCTA.buttons.primary.href} className="btn-primary px-8 py-3.5 text-sm md:text-base w-full sm:w-auto text-center">
                {data.decisionTreeCTA.buttons.primary.text}
              </a>
              <Link to={data.decisionTreeCTA.buttons.secondary.href} className="font-inter_regular text-sm md:text-base text-navy dark:text-light font-medium border-b border-navy dark:border-light pb-0.5 hover:opacity-70 transition-opacity">
                {data.decisionTreeCTA.buttons.secondary.text}
              </Link>
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row gap-8 justify-between">
              {data.decisionTreeCTA.footerLinks.map((link, i) => (
                <div key={i} className="max-w-xs">
                  <p className="font-inter_regular text-sm text-slate-600 dark:text-slate-400 mb-2">{link.text}</p>
                  <Link to={link.href} className="text-sm font-medium border-b border-brown text-brown pb-0.5 inline-block hover:opacity-70 transition-opacity">
                    {link.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ServicesPage = () => (
  <ThemeProvider>
    <ServicesPageContent />
  </ThemeProvider>
);

export default ServicesPage;
