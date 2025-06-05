import React from "react";
import { useCart } from "../CartContext";
import ProductListItem from "../ProductListItem";

// PUBLIC_INTERFACE
function CartPage() {
  const { cart, loading, error, updateCartItem, removeCartItem } = useCart();

  if (loading) {
    return (
      <div className="container" style={{ paddingTop: 100 }}>
        <h1>Shopping Cart</h1>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container" style={{ paddingTop: 100 }}>
        <h1>Shopping Cart</h1>
        <div style={{ color: "red" }}>{error}</div>
      </div>
    );
  }

  const items = cart?.items || [];

  // Helper to handle qty changes
  function handleQtyChange(item, qty) {
    if (qty < 1) return;
    updateCartItem(item.id, qty);
  }

  function handleRemove(item) {
    removeCartItem(item.id);
  }

  const total = items.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <div className="container" style={{ paddingTop: 100 }}>
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <div>
          {items.map(item => (
            <ProductListItem
              key={item.id}
              item={item}
              hideAdd={true}
              showQtyInput={true}
              qty={item.qty}
              onQtyChange={qty => handleQtyChange(item, qty)}
              onRemove={handleRemove}
            />
          ))}
          <div style={{ textAlign: "right", marginTop: 24 }}>
            <strong>Total: </strong>
            <span style={{ color: "#FF6F00", fontSize: "1.18rem", fontWeight: 600 }}>
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
