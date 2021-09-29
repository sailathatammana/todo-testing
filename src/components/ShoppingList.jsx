import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ list, updateList }) {
  const items = list.map((item) => (
    <ShoppingItem key={item.id} item={item} updateList={updateList} />
  ));

  return (
    <div className="shopping-list">
      {list.length > 0 ? items : <p>No items yet!</p>}
    </div>
  );
}
