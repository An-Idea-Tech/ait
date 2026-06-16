/**
 * Build a cursor-based pagination response.
 * Uses `createdAt` + `_id` as the cursor for stable ordering.
 *
 * @param {Object} model - Mongoose model
 * @param {Object} query - Base filter query
 * @param {Object} options
 * @param {number} options.limit
 * @param {string} [options.cursor]  - base64-encoded { createdAt, _id }
 * @param {Object} [options.select]  - fields to include
 * @param {Object} [options.sort]    - sort override
 * @param {boolean} [options.lean]
 * @returns {Object} { data, nextCursor, hasMore }
 */
export const paginateCursor = async (model, query = {}, options = {}) => {
  const { limit = 10, cursor, select = "", sort = { createdAt: -1, _id: -1 }, lean = true } = options;

  let filter = { ...query };

  if (cursor) {
    try {
      const { createdAt, _id } = JSON.parse(Buffer.from(cursor, "base64").toString("utf8"));
      const [sortField] = Object.keys(sort);
      const sortDir = sort[sortField];
      const op = sortDir === -1 ? "$lt" : "$gt";
      filter = {
        ...filter,
        $or: [
          { createdAt: { [op]: new Date(createdAt) } },
          { createdAt: new Date(createdAt), _id: { [op]: _id } },
        ],
      };
    } catch {
      // invalid cursor — ignore and start from beginning
    }
  }

  const fetchLimit = limit + 1;
  let q = model.find(filter).sort(sort).limit(fetchLimit);
  if (select) q = q.select(select);
  if (lean) q = q.lean();

  const results = await q;
  const hasMore = results.length > limit;
  const data = hasMore ? results.slice(0, limit) : results;

  let nextCursor = null;
  if (hasMore) {
    const last = data[data.length - 1];
    nextCursor = Buffer.from(JSON.stringify({ createdAt: last.createdAt, _id: last._id })).toString("base64");
  }

  return { data, nextCursor, hasMore };
};

/**
 * Simple offset-based pagination helper.
 * @param {Object} query - parsed query string (page, limit)
 * @returns {{ skip: number, limit: number, page: number }}
 */
export const getOffsetPagination = (query) => {
  const page = Math.max(1, parseInt(query.page) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(query.limit) || 10));
  const skip = (page - 1) * limit;
  return { page, limit, skip };
};
