import React, { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import { services } from '../../data/servicesPage';

import {
  ServiceHero,
  ServiceContentBlock,
  ServiceBulletList,
  ServiceDeliverables,
  ServiceExclusions,
  ServicePricing,
  ServicePortfolioPreview,
  ServiceCTA,
  ServiceSupportSection,
  ServiceIncludedExcluded
} from '../components/sections/service';

gsap.registerPlugin(ScrollTrigger);

const PublicServicePageDetailedContent = () => {
  const { slug } = useParams();
  const containerRef = useRef(null);

  // Match the slug, handling data format differences (e.g. '/services/domains-hosting')
  const serviceData = services.find((item) => {
    const itemSlug = item.slug.replace('/services/', '');
    return itemSlug === slug;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.service-section').forEach(sec => {
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
  }, [slug]);

  if (!serviceData) {
    return <Navigate to="/404" replace />;
  }

  // The actual section blocks are nested inside the first section object
  const detailedSections = serviceData.sections[0]?.sections || [];
  const seoTitle = `${serviceData.card} | An Idea Tech`;

  // We can construct a basic description from the hero description if available
  const heroSection = detailedSections.find(s => s.type === 'hero');
  const seoDescription = heroSection?.data?.description || `Details about ${serviceData.card} offered by An Idea Tech.`;

  // Schema generation
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceData.card,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://anideatech.com/#business"
    },
    "areaServed": [
      {"@type": "City", "name": "Mangaluru"},
      {"@type": "AdministrativeArea", "name": "Karnataka"},
      {"@type": "Country", "name": "India"}
    ],
    "description": seoDescription,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://anideatech.com/"},
      {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://anideatech.com/services"},
      {"@type": "ListItem", "position": 3, "name": serviceData.card, "item": `https://anideatech.com/services/${slug}`}
    ]
  };

  const renderSection = (section, index) => {
    switch (section.type) {
      case 'hero':
        return <ServiceHero key={index} data={section.data} />;
      case 'contentBlock':
        return <ServiceContentBlock key={index} data={section.data} />;
      case 'bulletList':
        return <ServiceBulletList key={index} data={section.data} />;
      case 'deliverables':
        return <ServiceDeliverables key={index} data={section.data} />;
      case 'exclusions':
        return <ServiceExclusions key={index} data={section.data} />;
      case 'pricing':
        return <ServicePricing key={index} data={section.data} />;
      case 'portfolioPreview':
        return <ServicePortfolioPreview key={index} data={section.data} />;
      case 'cta':
        return <ServiceCTA key={index} data={section.data} />;
      case 'supportSection':
        return <ServiceSupportSection key={index} data={section.data} />;
      case 'includedExcluded':
        return <ServiceIncludedExcluded key={index} data={section.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-cream dark:bg-dark text-slate-800 dark:text-slate-200 min-h-screen transition-colors duration-300" ref={containerRef}>
      <SEO 
        title={seoTitle} 
        description={seoDescription} 
        schema={[serviceSchema, breadcrumbSchema]}
      />
      <Navbar />

      {/* Sticky Close / Back Button Bar */}
      <div className="sticky top-[72px] md:top-[80px] z-40 bg-cream/90 dark:bg-dark/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          <div className="text-sm font-inter_regular text-slate-500 truncate mr-4">
            Viewing: <span className="text-navy dark:text-light font-medium">{serviceData.card}</span>
          </div>
          <Link to="/services" className="flex items-center gap-2 text-sm font-medium text-navy dark:text-light hover:text-brown dark:hover:text-brown transition-colors group">
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </Link>
        </div>
      </div>

      <main>
        {detailedSections.map((section, index) => renderSection(section, index))}
      </main>

      <Footer />
    </div>
  );
};

const PublicServicePageDetailed = () => (
  <ThemeProvider>
    <PublicServicePageDetailedContent />
  </ThemeProvider>
);

export default PublicServicePageDetailed;