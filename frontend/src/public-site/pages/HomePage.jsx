import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { useHomeData } from '../hooks/useHomeData';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import DiagnosisSection from '../components/sections/DiagnosisSection';
import ServiceSection from '../components/sections/ServiceSection';
import ProjectSection from '../components/sections/ProjectSection';
import AgencySection from '../components/sections/AgencySection';
import ComparisonSection from '../components/sections/ComparisonSection';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';

const HomePageContent = () => {
  const { data, isLoading, isError } = useHomeData();

  return (
    <div className="bg-cream dark:bg-dark text-background-dark dark:text-background-light min-h-screen antialiased transition-colors duration-300">
      <SEO 
        title="An Idea Tech — Software Company in Mangaluru | Websites, Web Apps, MVPs" 
        description="An Idea Tech is a Mangaluru-based software company building websites, web applications, MVPs, and growth systems for SME founders across India and beyond." 
        canonical="/" 
      />
      <Navbar />

      <main id="main-content" role="main">
        <HeroSection hero={data?.hero} isLoading={isLoading} />
        <DiagnosisSection />
        <ProjectSection projects={data?.featuredProjects} isLoading={isLoading} />
        <AgencySection />
        <ComparisonSection />
        <ServiceSection />
      </main>

      {isError && (
        <div className="text-center p-5 text-red-500 text-sm">
          Unable to load page content. Please refresh and try again.
        </div>
      )}

      <Footer />
    </div>
  );
};

/**
 * HomePage wraps everything in ThemeProvider so the Navbar toggle
 * and all child components can access theme context.
 */
const HomePage = () => (
  <ThemeProvider>
    <HomePageContent />
  </ThemeProvider>
);

export default HomePage;
