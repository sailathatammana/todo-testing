import React, { useState, useEffect } from "react";
import List from "./shared/List";

import { getTodo } from "../utils/sorter";
import { sortByTitle, sortByTimestampOlderFirst } from "../utils/sorter";

export default function ListTodo({ sorting, hook }) {
  // States
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = hook;

  // Const
  const rawData = localStorage.getItem("tasks");
  const tasksDone = getTodo(tasks);

  // Hook
  useEffect(() => {
    setTasks(JSON.parse(rawData));
  }, [rawData, sorting]);

  if (tasksDone === null || undefined) {
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
