export default function sitemap() {
  const routes = [
    "https://anideatech.com/",
    "https://anideatech.com/how-we-work",
    "https://anideatech.com/services",
    "https://anideatech.com/services/branding",
    "https://anideatech.com/services/domains-hosting",
    "https://anideatech.com/services/landing-pages",
    "https://anideatech.com/services/gbp-local-seo",
    "https://anideatech.com/services/website-design",
    "https://anideatech.com/services/growth-consulting",
    "https://anideatech.com/services/web-applications",
    "https://anideatech.com/services/mvp-development",
    "https://anideatech.com/services/mobile-apps",
    "https://anideatech.com/services/prd",
    "https://anideatech.com/work",
    "https://anideatech.com/work/suprabha-wellness",
    "https://anideatech.com/work/core-technologies",
    "https://anideatech.com/work/spc-sppuc-puttur",
    "https://anideatech.com/about",
    "https://anideatech.com/the-method",
    "https://anideatech.com/insights",
    "https://anideatech.com/insights/[essay-slug]",
    "https://anideatech.com/careers",
    "https://anideatech.com/contact",
    "https://anideatech.com/privacy",
    "https://anideatech.com/terms",
  ];

  return routes.map((route) => ({
    url: route,
    lastModified: new Date(),
  }));
}