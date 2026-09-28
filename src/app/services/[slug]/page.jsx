import React from "react";
import ServicePage from "@/components/service/ServicePage";
import { services, getServiceBySlug } from "@/data/services";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {
      title: "Service Not Found | An Idea Tech",
    };
  }
  return {
    title: `${service.title} | An Idea Tech`,
    description: `Explore ${service.title} at An Idea Tech. Growth-driven tech & branding solutions tailored for scalable business operations.`,
  };
}

export default async function DetailedService({ params }) {
  const { slug } = await params;
  return <ServicePage slug={slug} />;
}
