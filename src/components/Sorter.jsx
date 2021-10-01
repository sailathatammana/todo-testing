import React from "react";
import Button from "./shared/Button";

export default function Sorter({ hook }) {
  const [sorting, setSorting] = hook;

  return (
    <section className="section-sort">
      <p>Sort By:</p>
      <Button
        type={`btn-sort${sorting === "title" ? "-active" : ""}`}
        onClick={() => {
          setSorting("title");
        }}
      >
        A-Z
      </Button>
      <Button
        type={`btn-sort${sorting === "timestamp" ? "-active" : ""}`}
        onClick={() => {
          setSorting("timestamp");
        }}
      >
        Date
      </Button>
    </section>
  );
}
