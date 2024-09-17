import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./shopping.css"; 

const products = [
  { id: 1, name: "Sneakers", price: 100 },
  { id: 2, name: "T-shirt", price: 20 },
  { id: 3, name: "Jeans", price: 50 },
  { id: 4, name: "Jacket", price: 120 },
  { id: 5, name: "Hat", price: 15 },
  { id: 6, name: "Sunglasses", price: 80 },
  { id: 7, name: "Socks", price: 5 },
  { id: 8, name: "Backpack", price: 60 },
  { id: 9, name: "Watch", price: 150 },
  { id: 10, name: "Belt", price: 30 },
];

function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <p>{product.name}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
