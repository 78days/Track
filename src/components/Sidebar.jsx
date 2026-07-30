import Additemform from "./Additemform";
import Buttongroup from "./Buttongroup";

const Sidebar = ({ onAddItem }) => {
  return (
    <div className="sidebar">
      <Additemform onAddItem={onAddItem} />
      <Buttongroup />
    </div>
  );
};

export default Sidebar;
