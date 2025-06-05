import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import * as cartService from "./services/cartService";

/**
 * PUBLIC_INTERFACE
 * Cart context for holding current cart state and providing add/update/remove functionality, API-connected.
 */

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

// PUBLIC_INTERFACE
export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Future: fetch user's auth token if needed
  const token = undefined;

  // Load cart initially
  const fetchCart = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const loaded = await cartService.fetchCart(token);
      setCart(loaded);
    } catch (e) {
      setError(e.message || "Failed to load cart");
    }
    setLoading(false);
  }, [token]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // PUBLIC_INTERFACE
  async function addToCart(productId, qty = 1) {
    try {
      setLoading(true);
      await cartService.addToCart(productId, qty, token);
      await fetchCart();
    } catch (e) {
      setError(e.message || "Failed to add to cart");
    }
    setLoading(false);
  }

  // PUBLIC_INTERFACE
  async function updateCartItem(itemId, qty) {
    try {
      setLoading(true);
      await cartService.updateCartItem(itemId, qty, token);
      await fetchCart();
    } catch (e) {
      setError(e.message || "Failed to update cart item");
    }
    setLoading(false);
  }

  // PUBLIC_INTERFACE
  async function removeCartItem(itemId) {
    try {
      setLoading(true);
      await cartService.removeCartItem(itemId, token);
      await fetchCart();
    } catch (e) {
      setError(e.message || "Failed to remove cart item");
    }
    setLoading(false);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        addToCart,
        updateCartItem,
        removeCartItem,
        fetchCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
