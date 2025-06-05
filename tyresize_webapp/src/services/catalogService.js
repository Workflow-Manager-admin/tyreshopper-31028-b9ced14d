//
// Product Catalog API Service
//
import { get } from "../apiClient";

// PUBLIC_INTERFACE
export async function fetchTyreCatalog({ filters = {}, page = 1, pageSize = 20 } = {}) {
  // filters: {brand, size, type, minPrice, maxPrice}
  return await get("/products", {
    params: { ...filters, page, pageSize },
  });
}

// PUBLIC_INTERFACE
export async function fetchTyreDetails(productId) {
  if (!productId) throw new Error("Missing productId");
  return await get(`/products/${productId}`);
}
