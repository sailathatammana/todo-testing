import React from "react";
import Button from "./shared/Button";

export default function Filter({ active, setActive }) {
  return (
    <section className="section-filter">
      <Button type="btn btn-sort btn-icon" onClick={() => setActive(!active)}>
        {!active ? "View" : "Hide"} tasks done
      </Button>
    </section>
  );
}
