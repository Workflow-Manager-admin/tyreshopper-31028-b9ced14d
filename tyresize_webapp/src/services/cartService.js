//
// Shopping Cart API Service
//
import { get, post, put, del } from "../apiClient";

// PUBLIC_INTERFACE
export async function fetchCart(token) {
  return await get("/cart", { token });
}

// PUBLIC_INTERFACE
export async function addToCart(productId, qty = 1, token) {
  return await post("/cart/items", {
    data: { productId, qty },
    token,
  });
}

// PUBLIC_INTERFACE
export async function updateCartItem(itemId, qty, token) {
  return await put(`/cart/items/${itemId}`, {
    data: { qty },
    token,
  });
}

// PUBLIC_INTERFACE
export async function removeCartItem(itemId, token) {
  return await del(`/cart/items/${itemId}`, { token });
}
