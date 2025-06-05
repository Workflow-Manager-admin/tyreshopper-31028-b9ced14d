//
// Order Management API Service
//
import { get, post, put } from "../apiClient";

// PUBLIC_INTERFACE
export async function fetchOrders(token, { page = 1, pageSize = 20 } = {}) {
  return await get("/orders", { token, params: { page, pageSize } });
}

// PUBLIC_INTERFACE
export async function fetchOrderDetails(orderId, token) {
  return await get(`/orders/${orderId}`, { token });
}

// PUBLIC_INTERFACE
export async function placeOrder(orderPayload, token) {
  return await post("/orders", { data: orderPayload, token });
}

// PUBLIC_INTERFACE
export async function cancelOrder(orderId, token) {
  return await put(`/orders/${orderId}/cancel`, { token });
}
