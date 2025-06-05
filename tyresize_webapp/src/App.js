import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import OrdersPage from "./pages/OrdersPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
                <span className="logo-symbol" style={{ marginRight: 8 }}>*</span>TyreShopper
              </Link>
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <Link to="/catalog" className="btn" style={{ textDecoration: "none" }}>Catalog</Link>
                <Link to="/cart" className="btn" style={{ textDecoration: "none" }}>Cart</Link>
                <Link to="/orders" className="btn" style={{ textDecoration: "none" }}>Orders</Link>
                <Link to="/checkout" className="btn" style={{ textDecoration: "none" }}>Checkout</Link>
                <Link to="/profile" className="btn" style={{ textDecoration: "none" }}>Profile</Link>
                <Link to="/auth" className="btn" style={{ textDecoration: "none" }}>Login</Link>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/products/:productId" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;