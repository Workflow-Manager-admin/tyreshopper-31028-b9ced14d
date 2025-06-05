import React, { useState, useEffect } from "react";
import TyreSizeSelector from "../TyreSizeSelector";
import { useTyreSize } from "../TyreSizeContext";
import { useCart } from "../CartContext";
import * as catalogService from "../services/catalogService";
import ProductListItem from "../ProductListItem";

// PUBLIC_INTERFACE
function CatalogPage() {
  const { selectedSize } = useTyreSize();
  const { addToCart, loading: cartLoading } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products, filtered by size if selected
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const result = await catalogService.fetchTyreCatalog({
          filters: selectedSize ? { size: selectedSize } : {},
        });
        // Try possible data shapes
        setProducts(result.products || result.items || []);
      } catch (e) {
        setError(e.message || "Failed to fetch tyres");
      }
      setLoading(false);
    }
    fetchProducts();
  }, [selectedSize]);

  return (
    <div className="container" style={{ paddingTop: 100 }}>
      <h1>Tyre Catalog</h1>
      <TyreSizeSelector />
      {loading && <div>Loading tyres...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {!loading && !error && products.length === 0 && (
        <div>No tyres available for the selected size.</div>
      )}
      {!loading && !error &&
        <div style={{ marginTop: 20 }}>
          {products.map(product => (
            <ProductListItem
              key={product.id}
              item={product}
              onAddToCart={() => addToCart(product.id, 1)}
              hideAdd={cartLoading}
            />
          ))}
        </div>
      }
    </div>
  );
}

export default CatalogPage;
