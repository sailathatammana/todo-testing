import { useRecoilState } from "recoil";
import { useState } from "react";

import { listState } from "../state/listData";
import ButtonCreateItem from "../components/ButtoncreateItem";
import ShoppingList from "../components/ShoppingList";
import Sorter from "../components/Sorter";

export default function NormalScreen({ setModal }) {
  const [list, setList] = useRecoilState(listState);
  const [showCompleted, setShowCompleted] = useState(false);

  const acquiredList = list.filter((item) => item.acquired === true);
  const pendingList = list.filter((item) => item.acquired === false);

  function updateList(editedItem) {
    const index = list.findIndex((item) => item.id === editedItem.id);
    const clonedList = [...list];

    clonedList[index] = editedItem;
    setList(clonedList);
  }

  return (
    <div id="normal-screen">
      <Sorter />
      <ShoppingList list={pendingList} updateList={updateList} />
      <ButtonCreateItem setModal={setModal} />
      <button
        className="toggle"
        onClick={() => setShowCompleted(!showCompleted)}
      >
        {showCompleted ? "Hide" : "Show"} complted items
      </button>
      {showCompleted && (
        <ShoppingList list={acquiredList} updateList={updateList} />
      )}
    </div>
  );
}
