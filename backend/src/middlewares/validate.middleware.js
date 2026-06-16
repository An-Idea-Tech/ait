import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";

/**
 * Factory: returns an Express middleware that validates req[target] against a Joi schema.
 * @param {Object} schema - Joi schema object
 * @param {'body'|'query'|'params'} target - Which part of the request to validate
 */
const validate = (schema, target = "body") => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[target], {
      abortEarly: false,
      stripUnknown: true,
    });

    (error)?console.log(error):console.log(value);

    if (error) {
      const details = error.details.map((d) => ({
        field: d.path.join("."),
        message: d.message.replace(/['"]/g, ""),
      }));

      return next(
        new ApiError(
          HTTP_STATUS.UNPROCESSABLE_ENTITY,
          "Validation failed",
          ERROR_CODES.VALIDATION_ERROR,
          details
        )
      );
    }

    // Replace with validated + sanitized value
    req[target] = value;
    next();
  };
};

export default validate;
