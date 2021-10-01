import React from "react";

// Local imports
import Checkbox from "./Checkbox";
import { toggleTodo } from "../../utils/task";

export default function List({ tasks, setReload }) {
  const Items = tasks.map((item) => {
    return (
      <li key={item.id} className={item.checked ? "done" : ""}>
        <h4>{item.title}</h4>
        <Checkbox
          checked={item.checked}
          onChange={() => {
            toggleTodo(item);
            setReload();
          }}
        />
      </li>
    );
  });

  return (
    <section className="section-list">
      {tasks.length > 0 && <ul>{Items}</ul>}
      {tasks.length === 0 && <p className="empty">Sorry no items found</p>}
    </section>
  );
}
