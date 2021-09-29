import Checkbox from "./Checkbox";

export default function ShoppingItem({ item, updateList }) {
  function updateItem(key, editedValue) {
    const updateItem = { ...item };
    updateItem[key] = editedValue;
    updateList(updateItem);
  }
  return (
    <div className="shopping-item">
      <Checkbox
        checked={item.acquired}
        onChange={() => updateItem("acquired", !item.acquired)}
      />
      <p className="name">{item.name}</p>
      <p className="price">{item.price}</p>
    </div>
  );
}
