import React from "react";

/**
 * PUBLIC_INTERFACE
 * Shows product information and (optionally) add-to-cart.
 */
function ProductListItem({ item, onAddToCart, hideAdd, onQtyChange, qty, showQtyInput, onRemove }) {
  // item: must have id, name, price, size, (optionally image)

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #eee",
        borderRadius: 6,
        padding: 14,
        marginBottom: 16,
        background: "white",
        boxShadow: "0 0 6px rgba(26,35,126,0.06)"
      }}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          style={{ width: 64, height: 64, objectFit: "contain", marginRight: 16 }}
        />
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600 }}>{item.name} {item.size && <span style={{ color: "#888" }}>({item.size})</span>}</div>
        <div style={{ fontSize: "0.98rem", margin: "4px 0", color: "#555" }}>{item.brand}</div>
        <div style={{ color: "#FF6F00", fontWeight: 500 }}>${item.price?.toFixed?.(2) || item.price}</div>
      </div>
      {showQtyInput && (
        <input
          type="number"
          min={1}
          value={qty}
          style={{ width: 48, marginRight: 8 }}
          onChange={e => onQtyChange && onQtyChange(Number(e.target.value))}
        />
      )}
      {!hideAdd && (
        <button className="btn" style={{ marginLeft: 12 }} onClick={() => onAddToCart(item)}>
          Add to Cart
        </button>
      )}
      {onRemove && (
        <button className="btn" style={{ background: "#DDD", color: "#1A237E", marginLeft: 12 }} onClick={() => onRemove(item)}>
          Remove
        </button>
      )}
    </div>
  );
}

export default ProductListItem;
