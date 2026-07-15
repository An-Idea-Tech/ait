import React from "react";
import CaseStudyPage from "@/components/pages/CaseStudyPage";
import { getAllProjects, getProjectBySlug } from "@/data/projects";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | An Idea Tech",
    };
  }

  return {
    title: `${project.title} | An Idea Tech`,
    description: `${project.tagline} — A case study by An Idea Tech, Mangaluru.`,
    openGraph: {
      title: `${project.title} | An Idea Tech`,
      description: project.tagline,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function WorkCaseStudy({ params }) {
  const { slug } = await params;
  return <CaseStudyPage slug={slug} />;
}
