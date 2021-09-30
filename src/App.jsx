//External imports // good naming, but use "NPM Packages" as the name
import React, { useState, useEffect } from "react";

//Local imports
import "./styles/base.scss";
import WelcomeScreen from "./components/WelcomeScreen";
import Sorter from "./components/Sorter";
import List from "./components/List";
import SectionButtons from "./components/SectionButtons";
import {
  sortByTimestampOlderFirst,
  sortByTitle,
  getTodo,
  getDone,
} from "./utils/sorter";
import Filter from "./components/Filter";

export default function App() {
  // States
  const [todos, setTodos] = useState([]);
  const [reload, setReload] = useState(false);
  const [sorting, setSorting] = useState("timestamp");
  const [viewDone, setViewDone] = useState(false);
  // Const
  const rawData = localStorage.getItem("todos");

  // Functions
  useEffect(() => {
    setTodos(JSON.parse(rawData));
  }, [reload, rawData, sorting]);

  if (todos === null || undefined) {
    return <WelcomeScreen setReload={() => setReload(!reload)} />;
  } else {
    return (
      <div className="App">
        <main>
          <div className="screen-main">
            <h1>My Todo List</h1>
            <Sorter sorting={sorting} setSorting={setSorting} />
            <List
              todos={
                sorting === "title"
                  ? sortByTitle(getTodo(todos))
                  : sortByTimestampOlderFirst(getTodo(todos))
              }
              setReload={() => setReload(!reload)}
            />
            <SectionButtons setReload={() => setReload(!reload)} />
            <Filter active={viewDone} setActive={setViewDone} />
            {viewDone && (
              <List
                todos={
                  sorting === "title"
                    ? sortByTitle(getDone(todos))
                    : sortByTimestampOlderFirst(getDone(todos))
                }
                setReload={() => setReload(!reload)}
              />
            )}
          </div>
        </main>
      </div>
    );
  }
}
