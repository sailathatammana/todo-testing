export default function requestNewItem(id, itemName, itemPrice) {
  const newItem = {
    id: id,
    name: itemName,
    price: itemPrice,
    acquired: false,
  };
  return newItem;
}
