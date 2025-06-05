//
// API base configuration and endpoint helper for TyreShopper frontend
//

// Use env or change base URL as needed for different deployment targets
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://api.tyreshopper.com"; // Example default

/**
 * Returns full API endpoint path.
 * @param {string} path - endpoint path relative to the base
 */
export function apiEndpoint(path) {
  return `${API_BASE_URL}${path}`;
}

export { API_BASE_URL };
