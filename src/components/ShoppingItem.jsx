import Checkbox from "./Checkbox";

export default function ShoppingItem({ item, updateList }) {
  function updateItem(key, editedValue) {
    const updateItem = { ...item };
    updateItem[key] = editedValue;
    updateList(updateItem);
  }
  return (
    <div className="shopping-item">
      <label class="container">
        <Checkbox
          checked={item.acquired}
          onChange={() => updateItem("acquired", !item.acquired)}
        />
        <span class="checkmark"></span>
      </label>
      <span className="name">{item.name}</span>
      <span className="price">{item.price}</span>
    </div>
  );
}
