import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import CartSummary from './CartSummary';
import './shopping.css';

function App() {
  return (
    <CartProvider>
      <h1>Shopping App</h1>
      <div className="container">
        <ProductList />
        <CartSummary />
      </div>
    </CartProvider>
  );
}

export default App;
