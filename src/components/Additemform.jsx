import { useState, useRef } from "react";
import Button from "./Button";

const Additemform = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState("");
const inputRef = useRef();

  function handleSubmit(e) {
    
    e.preventDefault();
    if (!newItem.trim()) return;
    onAddItem(newItem.trim());
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add item</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Item name"
        ref={inputRef}
      />
      <Button text="Add to list" />
    </form>
  );
};

export default Additemform;
