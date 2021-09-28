import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../state/listData";
import uuid from "uuid/dist/v4";
import requestNewItem from "../scripts/requestNewItem";

export default function ModalForm({ setModal }) {
  const [list, setList] = useRecoilState(listState);
  const [itemName, setName] = useState("");
  const [itemPrice, setPrice] = useState("");

  const handleSubmit = (event) => {
    const id = uuid();
    event.preventDefault();
    const newItem = requestNewItem(id, itemName, itemPrice);
    if (newItem !== null) setList([...list, newItem]);
    setModal(null);
  };

  return (
    <div className="modal-popup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new item"
          value={itemName}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={itemPrice}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
