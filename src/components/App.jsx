import { useState } from "react";
import { items as initialItems } from "../constants";
import Backgroundheading from "./Backgroundheading";
import Footer from "./Footer";
import Header from "./Header";
import Itemlist from "./Itemlist";
import Sidebar from "./Sidebar";

const App = () => {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(name) {
    const newItem = {
      id: Date.now(),
      name,
      packed: false,
    };
    setItems((prev) => [...prev, newItem]);
  }

  function handleCheckboxChange(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDelete(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <Backgroundheading />
      <main>
        <Header />
        <Sidebar onAddItem={handleAddItem} />
        <Itemlist
          items={items}
          onCheckboxChange={handleCheckboxChange}
          onDelete={handleDelete}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
