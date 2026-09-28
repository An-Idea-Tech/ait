import branding from "./branding";
import domainsHosting from "./domains-hosting";
import gbp from "./gbp";
import landingPages from "./landing-pages";
import websiteDesign from "./website-design";
import growthConsulting from "./growth-consulting";
import webApplications from "./web-applications";
import mvpDevelopment from "./mvp-development";
import mobileApps from "./mobile-apps";
import prd from "./prd";

export const services = [
  branding,
  domainsHosting,
  gbp,
  landingPages,
  websiteDesign,
  growthConsulting,
  webApplications,
  mvpDevelopment,
  mobileApps,
  prd,
];

export const getServiceBySlug = (slug) => {
  return services.find((service) => service.slug === slug);
};
