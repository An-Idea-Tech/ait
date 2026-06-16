/**
 * Wraps an async route handler and forwards errors to Express error middleware.
 * Eliminates try/catch boilerplate in every controller.
 * @param {Function} fn - Async controller function
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
