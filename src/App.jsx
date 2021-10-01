import React, { useState } from "react";

import Filter from "./components/Filter";
import ListDone from "./components/ListDone";
import ListTodo from "./components/ListTodo";
import Sorter from "./components/Sorter";
import SectionButtons from "./components/SectionButtons";
import WelcomeScreen from "./components/WelcomeScreen";
import "./styles/base.scss";

export default function App() {
  // Const
  const rawData = localStorage.getItem("tasks");

  // States
  const [reload, setReload] = useState(false);
  const [sorting, setSorting] = useState("timestamp");
  const [viewDone, setViewDone] = useState(false);

  if (rawData === null || undefined) {
    return <WelcomeScreen hook={[reload, setReload]} />;
  } else {
    return (
      <div className="App">
        <main>
          <div className="screen-main">
            <h1>My Todo List</h1>
            <Sorter hook={[sorting, setSorting]} />
            <ListTodo sorting={sorting} hook={[reload, setReload]} />
            <SectionButtons hook={[reload, setReload]} />
            <Filter active={viewDone} setActive={setViewDone} />
            {viewDone && (
              <ListDone sorting={sorting} hook={[reload, setReload]} />
            )}
          </div>
        </main>
      </div>
    );
  }
}
