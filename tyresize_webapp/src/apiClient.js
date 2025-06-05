//
// API client utility for TyreShopper frontend
//

import { apiEndpoint } from "./apiConfig";

/**
 * PUBLIC_INTERFACE
 * Main API client: handles GET, POST, PUT, DELETE requests, attaches token if provided
 * @param {string} method - 'GET', 'POST', etc
 * @param {string} path - endpoint path
 * @param {object} opts - { data, token, params }
 */
export async function apiRequest(method, path, opts = {}) {
  const { data, token, params } = opts;
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  let url = apiEndpoint(path);

  if (params && typeof params === "object") {
    const query = new URLSearchParams(params).toString();
    url += `?${query}`;
  }

  const fetchOpts = {
    method,
    headers,
    ...(data && { body: JSON.stringify(data) }),
  };

  const resp = await fetch(url, fetchOpts);
  const contentType = resp.headers.get("content-type") || "";

  let respData;
  if (contentType.includes("application/json")) {
    respData = await resp.json();
  } else {
    respData = await resp.text();
  }
  if (!resp.ok) {
    throw new Error(respData.error || resp.statusText || "API Error");
  }
  return respData;
}

// PUBLIC_INTERFACE
export function get(path, opts) { return apiRequest("GET", path, opts); }
// PUBLIC_INTERFACE
export function post(path, opts) { return apiRequest("POST", path, opts); }
// PUBLIC_INTERFACE
export function put(path, opts) { return apiRequest("PUT", path, opts); }
// PUBLIC_INTERFACE
export function del(path, opts) { return apiRequest("DELETE", path, opts); }
