import React from "react";

// PUBLIC_INTERFACE
function NotFoundPage() {
  /** Fallback page for missing routes */
  return (
    <div className="container" style={{ paddingTop: 100 }}>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFoundPage;
