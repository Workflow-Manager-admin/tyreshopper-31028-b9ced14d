import React, { useEffect, useState } from "react";
import { useTyreSize } from "./TyreSizeContext";
import * as catalogService from "./services/catalogService";

/**
 * PUBLIC_INTERFACE
 * Component for displaying and selecting available tyre sizes for filtering.
 */
function TyreSizeSelector() {
  const { selectedSize, setSelectedSize } = useTyreSize();
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch unique sizes from the full catalog (sample first page, could be improved if backend provides metadata)
  useEffect(() => {
    async function fetchSizes() {
      setLoading(true);
      setError(null);
      try {
        const data = await catalogService.fetchTyreCatalog();
        // Deduplicate by string, support for e.g. data.products with size property
        // Try products or fallback to items
        const tyres = data.products || data.items || [];
        const allSizes = [...new Set(tyres.map(t => t.size).filter(Boolean))];
        setSizes(allSizes);
      } catch (e) {
        setError(e.message || "Failed to fetch sizes");
      }
      setLoading(false);
    }
    fetchSizes();
  }, []);

  return (
    <div style={{ marginBottom: 24 }}>
      <label style={{ fontWeight: 500, marginRight: 10 }}>Tyre Size:</label>
      {loading && <span>Loading sizes...</span>}
      {error && <span style={{ color: "red" }}>{error}</span>}
      {!loading && !error && (
        <select
          value={selectedSize}
          onChange={e => setSelectedSize(e.target.value)}
          style={{
            padding: "8px 14px",
            borderRadius: 4,
            border: "1px solid #ccc",
            minWidth: 120,
            fontSize: "1rem"
          }}
        >
          <option value="">All sizes</option>
          {sizes.map(size => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default TyreSizeSelector;
