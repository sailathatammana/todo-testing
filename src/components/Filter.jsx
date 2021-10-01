import React from "react";
import Button from "./shared/Button";

export default function Filter({ hook }) {
  const [active, setActive] = hook;

  return (
    <section className="section-filter">
      <Button type="btn btn-sort btn-icon" onClick={() => setActive(!active)}>
        {!active ? "View" : "Hide"} tasks done
      </Button>
    </section>
  );
}
