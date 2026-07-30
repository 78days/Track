function Itemlist({ items, onCheckboxChange, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onCheckboxChange={onCheckboxChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

function Item({ item, onCheckboxChange, onDelete }) {
  return (
    <li className="item">
      <label htmlFor={item.id}>
        <input
          id={item.id}
          type="checkbox"
          checked={item.packed}
          onChange={() => onCheckboxChange(item.id)}
        />{" "}
        {item.name}
      </label>
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
}

export default Itemlist;
