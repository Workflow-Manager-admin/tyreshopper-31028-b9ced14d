import React from "react";
import { useParams } from "react-router-dom";

// PUBLIC_INTERFACE
function ProductDetailsPage() {
  /** Product Details Page: Detailed information about a specific tyre */
  const { productId } = useParams();
  return (
    <div className="container" style={{ paddingTop: 100 }}>
      <h1>Tyre Details</h1>
      <p>
        Product ID: <strong>{productId}</strong>
      </p>
      <p>Details about the selected tyre will appear here. (Feature in progress.)</p>
    </div>
  );
}

export default ProductDetailsPage;
