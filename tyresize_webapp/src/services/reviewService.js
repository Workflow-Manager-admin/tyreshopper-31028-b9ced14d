//
// Product Review & Ratings API Service
//
import { get, post } from "../apiClient";

// PUBLIC_INTERFACE
export async function fetchReviews(productId, { page = 1, pageSize = 20 } = {}) {
  if (!productId) throw new Error("Missing productId");
  return await get(`/products/${productId}/reviews`, { params: { page, pageSize } });
}

// PUBLIC_INTERFACE
export async function submitReview(productId, reviewData, token) {
  return await post(`/products/${productId}/reviews`, { data: reviewData, token });
}
