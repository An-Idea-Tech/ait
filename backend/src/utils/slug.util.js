import slugify from "slugify";

/**
 * Generate a URL-safe slug from any string.
 * @param {string} text
 * @returns {string}
 */
export const generateSlug = (text) => {
  return slugify(text, {
    lower: true,
    strict: true,
    trim: true,
  });
};

/**
 * Generate a unique slug by appending a timestamp suffix when needed.
 * @param {string} text
 * @returns {string}
 */
export const generateUniqueSlug = (text) => {
  const base = generateSlug(text);
  const suffix = Date.now().toString(36);
  return `${base}-${suffix}`;
};
