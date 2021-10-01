import React, { useState, useEffect } from "react";
import List from "./shared/List";

import { getDone } from "../utils/sorter";
import { sortByTitle, sortByTimestampOlderFirst } from "../utils/sorter";

export default function ListDone({ sorting, hook }) {
  // States
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = hook;

  // Const
  const rawData = localStorage.getItem("tasks");
  const tasksDone = getDone(tasks);

  // Hook
  useEffect(() => {
    setTasks(JSON.parse(rawData));
  }, [rawData, sorting]);

  if (tasksDone.length === 0) {
    return <p className="empty">Sorry no items found</p>;
  } else {
    return (
      <List
        tasks={
          sorting === "title"
            ? sortByTitle(tasksDone)
            : sortByTimestampOlderFirst(tasksDone)
        }
        setReload={() => setReload(!reload)}
      />
    );
  }
}
