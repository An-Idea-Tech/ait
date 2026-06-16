import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import { contactPageData } from '../../data/contact';
import { gsap } from 'gsap';
import { Mail, MessageCircle, MapPin, Phone, ArrowRight, Clock } from 'lucide-react';

const ContactPageContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Elegant fade-up with a slight skew for Fraunces text
      gsap.fromTo('.reveal-text', 
        { y: 60, opacity: 0, skewY: 2 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out' }
      );
      
      gsap.fromTo('.reveal-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anideatech.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://anideatech.com/contact" }
    ]
  };

  const SEO_PHONE_DISPLAY = "+91 73490 49009";
  const SEO_PHONE_LINK = "+917349049009";
  
  const SEO_ADDRESS = [
    "WrkWrk, Top Floor",
    "Citadel Mindspace, 2A, Yeyyadi Rd",
    "Kadri Hills, Yeyyadi",
    "Mangaluru, Karnataka 575008",
    "India"
  ];

  return (
    <div className="bg-cream dark:bg-dark text-navy dark:text-cream min-h-screen flex flex-col font-inter_regular transition-colors duration-300">
      <SEO 
        title="Contact An Idea Tech — Software Studio in Mangaluru"
        description="Tell us what you're trying to build. We'll tell you if we can help. Free 30-minute call. AIT Mangaluru, Karnataka."
        schema={breadcrumbSchema}
      />
      <Navbar />

      <main ref={containerRef} className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-24 selection:bg-brown selection:text-cream">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: HERO & BOOKING */}
          <div className="col-span-1 lg:col-span-5 lg:sticky top-32 self-start flex flex-col space-y-10">
            <div>
              <h2 className="reveal-text text-xs tracking-[0.2em] text-brown dark:text-[#F39C12] mb-6 uppercase font-medium">
                {contactPageData.hero.subtitle}
              </h2>
              {/* Single H1 */}
              <h1 className="reveal-text text-5xl lg:text-[4rem] font-fraunces_regular leading-[1.1] mb-8 text-navy dark:text-cream">
                {contactPageData.hero.title}
              </h1>
              <p className="reveal-text text-lg text-navy/70 dark:text-cream/70 leading-relaxed font-light">
                {contactPageData.hero.description}
              </p>
            </div>
            
            <div className="reveal-text bg-white/50 dark:bg-surface-card/40 border border-navy/10 dark:border-surface-border rounded-2xl p-8 lg:p-10 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-brown dark:bg-[#F39C12] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              <h3 className="text-3xl font-fraunces_regular mb-4 text-navy dark:text-cream">{contactPageData.booking.title}</h3>
              <p className="text-navy/70 dark:text-cream/70 mb-8 text-base leading-relaxed font-light">
                {contactPageData.booking.description}
              </p>
              
              <a href="mailto:solutions@anideatech.com" className="btn-primary w-full justify-center py-4 text-base font-inter_regular tracking-wide group/btn">
                Book a call
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              
              <div className="mt-8 pt-6 border-t border-navy/10 dark:border-surface-border">
                <p className="text-sm text-navy/50 dark:text-cream/50 font-fraunces_italic">
                  {contactPageData.booking.note}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="col-span-1 lg:col-span-7 space-y-24 mt-8 lg:mt-0 pt-4">
            
            {/* PROCESS */}
            <section className="reveal-card">
              <div className="flex items-center gap-4 mb-10">
                <span className="w-12 h-px bg-brown/30 dark:bg-surface-border block"></span>
                <h2 className="text-4xl font-fraunces_regular text-navy dark:text-cream">{contactPageData.process.title}</h2>
              </div>
              
              <div className="space-y-6">
                {contactPageData.process.steps.map((step, idx) => (
                   <div key={idx} className="group flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-navy/5 dark:border-surface-border bg-white/30 dark:bg-surface-card/20 hover:bg-white dark:hover:bg-surface-card transition-colors duration-500 relative overflow-hidden">
                     {/* Number indicator */}
                     <div className="shrink-0">
                       <div className="w-12 h-12 rounded-full border border-brown/20 dark:border-surface-border flex items-center justify-center text-brown dark:text-cream font-fraunces_regular text-xl group-hover:border-brown dark:group-hover:border-[#F39C12] transition-colors duration-300">
                         {idx + 1}
                       </div>
                     </div>
                     <div>
                       <h4 className="text-2xl font-fraunces_regular mb-3 text-navy dark:text-cream">{step.title}</h4>
                       <p className="text-navy/70 dark:text-cream/70 leading-relaxed font-light">{step.description}</p>
                     </div>
                   </div>
                ))}
              </div>
            </section>

            {/* ALTERNATIVES */}
            <section className="reveal-card">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-brown/30 dark:bg-surface-border block"></span>
                <h2 className="text-4xl font-fraunces_regular text-navy dark:text-cream">{contactPageData.alternatives.title}</h2>
              </div>
              <p className="text-navy/70 dark:text-cream/70 mb-10 max-w-2xl text-lg font-light leading-relaxed">
                {contactPageData.alternatives.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {contactPageData.alternatives.emails.map((item, idx) => (
                  <a key={idx} href={`mailto:${item.email}`} className="card hover:border-brown/40 dark:hover:border-surface-hover transition-colors group flex flex-col items-start gap-2">
                    <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-surface flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    </div>
                    <span className="font-inter_regular text-navy dark:text-cream font-medium tracking-wide">{item.email}</span>
                    <p className="text-sm text-navy/50 dark:text-cream/50 font-light">{item.purpose}</p>
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card border-[#25D366]/20 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-inter_regular font-medium mb-1 text-navy dark:text-cream">WhatsApp <a href={`https://wa.me/${SEO_PHONE_LINK}`} className="text-[#25D366] hover:underline ml-1">{SEO_PHONE_DISPLAY}</a></h4>
                    <p className="text-sm text-navy/70 dark:text-cream/70 font-light leading-relaxed">{contactPageData.alternatives.whatsapp.description}</p>
                  </div>
                </div>
                
                <div className="card hover:border-brown/40 transition-colors flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-surface flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h4 className="font-inter_regular font-medium mb-1 text-navy dark:text-cream">Phone <a href={`tel:${SEO_PHONE_LINK}`} className="text-brand-600 dark:text-brand-400 hover:underline ml-1">{SEO_PHONE_DISPLAY}</a></h4>
                    <p className="text-sm text-navy/70 dark:text-cream/70 font-light leading-relaxed">For direct calls during working hours.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* EXISTING CLIENTS & TEAM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-card">
              <section className="card flex flex-col">
                <h2 className="text-3xl font-fraunces_regular mb-6 text-navy dark:text-cream">{contactPageData.existingClients.title}</h2>
                <ul className="space-y-6 text-base text-navy/70 dark:text-cream/70 font-light leading-relaxed flex-grow">
                  {contactPageData.existingClients.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brown dark:bg-[#F39C12] mt-2.5 shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-fraunces_regular mb-6 text-navy dark:text-cream">{contactPageData.team.title}</h2>
                  <p className="text-base text-navy/70 dark:text-cream/70 font-light leading-relaxed mb-8">
                    {contactPageData.team.description}
                  </p>
                </div>
                <div className="bg-brown/5 dark:bg-surface border-l-4 border-brown dark:border-[#F39C12] p-5">
                  <p className="text-sm text-brown dark:text-cream/80 font-fraunces_italic leading-relaxed">
                    "{contactPageData.team.note}"
                  </p>
                </div>
              </section>
            </div>

            {/* LOCATION */}
            <section className="reveal-card">
              <div className="flex items-center gap-4 mb-10">
                <span className="w-12 h-px bg-brown/30 dark:bg-surface-border block"></span>
                <h2 className="text-4xl font-fraunces_regular text-navy dark:text-cream">{contactPageData.location.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                <div className="md:col-span-7 space-y-10">
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full border border-navy/10 dark:border-surface-border flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-brown dark:text-[#F39C12]" />
                    </div>
                    <div>
                      <h4 className="font-fraunces_regular mb-3 text-2xl text-navy dark:text-cream">Address</h4>
                      <address className="not-italic text-navy/70 dark:text-cream/70 font-light leading-loose">
                        {SEO_ADDRESS.map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}
                            {idx < SEO_ADDRESS.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full border border-navy/10 dark:border-surface-border flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-brown dark:text-[#F39C12]" />
                    </div>
                    <div>
                      <h4 className="font-fraunces_regular mb-3 text-2xl text-navy dark:text-cream">Working Hours</h4>
                      <p className="text-navy/70 dark:text-cream/70 font-light mb-2">
                        <span className="font-medium text-navy dark:text-cream mr-2">{contactPageData.location.workingHours.days}</span>
                        {contactPageData.location.workingHours.time}
                      </p>
                      <p className="text-sm text-navy/50 dark:text-cream/50 font-fraunces_italic mt-3 max-w-sm">
                        {contactPageData.location.workingHours.note}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 card bg-navy text-cream dark:bg-surface border-transparent flex flex-col justify-center p-8 lg:p-10">
                  <h4 className="font-fraunces_regular text-2xl mb-8 border-b border-white/10 pb-4 text-cream">Meetings</h4>
                  <div className="space-y-8 font-light">
                    <div>
                      <span className="block font-medium tracking-wide text-white mb-2 text-sm uppercase">In Person</span>
                      <p className="text-cream/70 leading-relaxed text-sm">
                        {contactPageData.location.meetings.inPerson}
                      </p>
                    </div>
                    <div>
                      <span className="block font-medium tracking-wide text-white mb-2 text-sm uppercase">Walk-ins</span>
                      <p className="text-cream/70 leading-relaxed text-sm">
                        {contactPageData.location.meetings.walkIn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const ContactPage = () => (
  <ThemeProvider>
    <ContactPageContent />
  </ThemeProvider>
);