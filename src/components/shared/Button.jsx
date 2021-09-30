import React from "react";

export default function Button({ type, children, onClick }) {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      <h4>{children}</h4>
    </button>
  );
}
