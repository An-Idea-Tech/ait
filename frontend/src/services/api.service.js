/**
 * Industry-grade generic HTTP client wrapper for making safe and standardized API requests.
 * Handles response validations, parsing, JSON configurations, and throws consistent error instances.
 * 
 * @param {string} url - The complete URL or endpoint to fetch.
 * @param {RequestInit} [options={}] - Standard Fetch options (method, headers, body, credentials, etc.)
 * @returns {Promise<any>} The parsed JSON data from the response.
 */
export async function fetcher(url, options = {}) {
  const defaultHeaders = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const config = {
    ...options,
    headers: defaultHeaders,
  };

  try {
    const response = await fetch(url, config);

    // If HTTP status is not successful (outside 200-299 range)
    if (!response.ok) {
      let errorMessage = `API Request failed with status ${response.status}: ${response.statusText}`;

      try {
        // Try parsing error body from backend API
        const errorBody = await response.json();
        if (errorBody) {
          errorMessage = errorBody.message || errorBody.error || errorMessage;
        }
      } catch (parseError) {
        // Fail silently if response is not JSON
      }

      throw new Error(errorMessage);
    }

    // Handle HTTP 204 No Content
    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    // Standardize error propagation
    throw new Error(error.message || "A network error occurred. Please verify your connection.");
  }
}

/**
 * HTTP GET request wrapper
 * @param {string} url 
 * @param {RequestInit} [options] 
 */
export const get = (url, options = {}) => fetcher(url, { ...options, method: "GET" });

/**
 * HTTP POST request wrapper
 * @param {string} url 
 * @param {any} body 
 * @param {RequestInit} [options] 
 */
export const post = (url, body, options = {}) => 
  fetcher(url, { 
    ...options, 
    method: "POST", 
    body: typeof body === "string" ? body : JSON.stringify(body) 
  });

/**
 * HTTP PUT request wrapper
 * @param {string} url 
 * @param {any} body 
 * @param {RequestInit} [options] 
 */
export const put = (url, body, options = {}) => 
  fetcher(url, { 
    ...options, 
    method: "PUT", 
    body: typeof body === "string" ? body : JSON.stringify(body) 
  });

/**
 * HTTP DELETE request wrapper
 * @param {string} url 
 * @param {RequestInit} [options] 
 */
export const del = (url, options = {}) => fetcher(url, { ...options, method: "DELETE" });
