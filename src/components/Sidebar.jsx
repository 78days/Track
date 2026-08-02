import { useItemsStore } from "../stores/itemsStore";
import Additemform from "./Additemform";
import Buttongroup from "./Buttongroup";

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <div className="sidebar">
      <Additemform onAddItem={addItem} />
      <Buttongroup />
    </div>
  );
}
