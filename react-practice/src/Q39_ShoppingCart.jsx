import React, { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1200 }
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, qty: 1 }]);
  };

  const updateQty = (index, change) => {
    const newCart = [...cart];
    newCart[index].qty += change;
    if (newCart[index].qty <= 0) newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h3>Products</h3>
      {products.map(p => (
        <div key={p.id}>
          {p.name} – ₹{p.price} 
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
      <h3>Cart</h3>
      {cart.map((c, i) => (
        <div key={i}>
          {c.name} – {c.qty}
          <button onClick={() => updateQty(i, 1)}>+</button>
          <button onClick={() => updateQty(i, -1)}>-</button>
        </div>
      ))}
      <h4>Total: ₹{total}</h4>
    </div>
  );
}
export default ShoppingCart;
