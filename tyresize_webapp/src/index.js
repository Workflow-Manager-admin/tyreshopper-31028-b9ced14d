import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from "./CartContext";
import { TyreSizeProvider } from "./TyreSizeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <TyreSizeProvider>
        <App />
      </TyreSizeProvider>
    </CartProvider>
  </React.StrictMode>
);
