import React, { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item} <button onClick={() => removeItem(i)}>Remove</button></li>
        ))}
      </ul>
    </div>
  );
}
export default ItemList;
