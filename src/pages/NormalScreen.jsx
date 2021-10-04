import React, { useState } from "react";

import Filter from "../components/Filter";
import ListDone from "../components/ListDone";
import ListTodo from "../components/ListTodo";
import Sorter from "../components/Sorter";
import SectionButtons from "../components/SectionButtons";

export default function NormalScreen() {
  // States
  const [reload, setReload] = useState(false);
  const [sorting, setSorting] = useState("timestamp");
  const [viewDone, setViewDone] = useState(false);

  return (
    <div className="screen-main">
      <h1>My Todo List</h1>
      <Sorter hook={[sorting, setSorting]} />
      <ListTodo sorting={sorting} hook={[reload, setReload]} />
      <SectionButtons hook={[reload, setReload]} />
      <Filter active={viewDone} setActive={setViewDone} />
      {viewDone && <ListDone sorting={sorting} hook={[reload, setReload]} />}
    </div>
  );
}
