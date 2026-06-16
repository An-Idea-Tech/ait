import ApiResponse from "../utils/apiResponse.util.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const response = new ApiResponse(
    false,
    err.message || "Internal Server Error",
    null,
    {
      code: err.code || "INTERNAL_ERROR",
      details: err.details || null,
    }
  );

  res.status(statusCode).json(response);
};

export default errorHandler;