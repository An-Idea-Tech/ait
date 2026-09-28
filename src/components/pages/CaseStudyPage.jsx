"use client";

import React from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CaseStudyHero from "@/components/section/caseStudy/CaseStudyHero";
import CaseStudyAbout from "@/components/section/caseStudy/CaseStudyAbout";
import CaseStudyGallery from "@/components/section/caseStudy/CaseStudyGallery";
import CaseStudyChallenge from "@/components/section/caseStudy/CaseStudyChallenge";
import CaseStudyTicker from "@/components/section/caseStudy/CaseStudyTicker";
import CaseStudyTextSection from "@/components/section/caseStudy/CaseStudyTextSection";
import CaseStudyTestimonial from "@/components/section/caseStudy/CaseStudyTestimonial";
import CaseStudyNextProject from "@/components/section/caseStudy/CaseStudyNextProject";

export default function CaseStudyPage({ slug }) {
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page">
      <main>
        {/* 1. Hero — full-width image with title & tagline */}
        <CaseStudyHero
          title={project.title}
          tagline={project.tagline}
          heroImage={project.heroImage}
          tag={project.tag}
        />

        {/* 4. Challenge — numbered list */}
        <CaseStudyChallenge challenge={project.challenge} />

        {/* 2. About — 2-col: description + services/industry */}
        <CaseStudyAbout
          about={project.about}
          services={project.services}
          industry={project.industry}
        />

        {/* 3. Gallery — image grid */}
        {project.galleryImages?.length > 0 && (
          <CaseStudyGallery images={project.galleryImages} title={project.title} />
        )}

        

       
        {/* 6. Our Approach — paragraphs */}
        {project.approach && (
          <CaseStudyTextSection
            sectionLabel="Our Approach"
            subtitle={project.approach.subtitle}
            paragraphs={project.approach.paragraphs}
            image={project.approach.image}
            leftImage={project.approach.leftImage}
            rightImage={project.approach.rightImage}
            colorPalette={project.approach.colorPalette}
          />
        )}

        {/* 7. Digital Experience — paragraphs */}
        {project.digitalExperience && (
          <CaseStudyTextSection
            sectionLabel="Digital Experience"
            subtitle={project.digitalExperience.subtitle}
            paragraphs={project.digitalExperience.paragraphs}
            image={project.digitalExperience.image}
            leftImage={project.digitalExperience.leftImage}
            rightImage={project.digitalExperience.rightImage}
            colorPalette={project.digitalExperience.colorPalette}
          />
        )}

        {/* 8. Impact — paragraphs */}
        {project.impact && (
          <CaseStudyTextSection
            sectionLabel="Impact"
            subtitle={project.impact.subtitle}
            paragraphs={project.impact.paragraphs}
            image={project.impact.image}
            leftImage={project.impact.leftImage}
            rightImage={project.impact.rightImage}
            colorPalette={project.impact.colorPalette}
          />
        )}

         {/* 5. Ticker — infinite horizontal image scroll */}
        {project.tickerImages?.length > 0 && (
          <CaseStudyTicker images={project.tickerImages} title={project.title} />
        )}


        {/* 9. Client Testimonial */}
        {project.testimonial && (
          <CaseStudyTestimonial testimonial={project.testimonial} />
        )}

        {/* 10. Next Project navigation */}
        {project.nextProject && (
          <CaseStudyNextProject nextProject={project.nextProject} />
        )}
      </main>
    </div>
  );
}
