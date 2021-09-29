import { useRecoilState } from "recoil";
import { sortByName, sortByPrice } from "../scripts/sortList";
import { listState } from "../state/listData";

export default function Sorter() {
  const [list, setList] = useRecoilState(listState);

  function sortListByName(list) {
    const sortedList = sortByName(list);
    setList(sortedList);
  }
  function sortListByPrice(list) {
    const sortedList = sortByPrice(list);
    setList(sortedList);
  }

  return (
    <section className="sorter">
      <span>sort by:</span>
      <button onClick={() => sortListByName(list)}>Name</button>
      <button onClick={() => sortListByPrice(list)}>Price</button>
    </section>
  );
}
