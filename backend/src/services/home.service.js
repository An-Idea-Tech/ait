import { Hero, Metrics, About, HowWeWork, ContactInfo } from "../models/homeSection.model.js";
import { getFeaturedProjects } from "./project.service.js";
import { getLatestBlogs } from "./blog.service.js";
import { getLatestFeeds } from "./feed.service.js";
import { getAllTestimonials } from "./testimonial.service.js";
import { getAllClients } from "./client.service.js";
import { getAllServices } from "./service.service.js";
import { getAllFAQs } from "./faq.service.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";

/** ─── Singleton helpers — upsert on first save ───────────────── */
const getSingleton = async (Model) => Model.findOne().sort({ updatedAt: -1 }).lean();

const upsertSingleton = async (Model, data) => {
  const existing = await Model.findOne();
  if (existing) return Model.findByIdAndUpdate(existing._id, data, { new: true, runValidators: true });
  return Model.create(data);
};

/** ─── Full home page data — one request, all sections ────────── */
export const getHomeData = async () => {
  const results = await Promise.allSettled([
    getSingleton(Hero),
    getSingleton(Metrics),
    getSingleton(About),
    getSingleton(HowWeWork),
    getSingleton(ContactInfo),
    getAllClients(),
    getAllServices(),
    getFeaturedProjects(3),
    getAllTestimonials(),
    getLatestBlogs(3),
    getLatestFeeds(3),
    getAllFAQs(),
  ]);

  const [hero, metrics, about, howWeWork, contactInfo, clients, services, featuredProjects, testimonials, latestBlogs, latestFeeds, faqs] = results.map(r =>
    r.status === "fulfilled" ? r.value : null
  );

  return { hero, metrics, about, howWeWork, contactInfo, clients, services, featuredProjects, testimonials, latestBlogs, latestFeeds, faqs };
};

/** ─── Individual section getters (Admin) ─────────────────────── */
export const getSection = async (section) => {
  const map = { hero: Hero, metrics: Metrics, about: About, howWeWork: HowWeWork, contactInfo: ContactInfo };
  const Model = map[section];
  if (!Model) throw new ApiError(HTTP_STATUS.NOT_FOUND, `Section '${section}' not found`, ERROR_CODES.NOT_FOUND);
  return getSingleton(Model);
};

export const updateSection = async (section, data, file) => {
  const map = { hero: Hero, metrics: Metrics, about: About, howWeWork: HowWeWork, contactInfo: ContactInfo };
  const Model = map[section];
  if (!Model) throw new ApiError(HTTP_STATUS.NOT_FOUND, `Section '${section}' not found`, ERROR_CODES.NOT_FOUND);

  if (file) {
    const { buildImageObject } = await import("./upload.service.js");
    data.image = buildImageObject(file);
  }

  return upsertSingleton(Model, data);
};
