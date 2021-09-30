import React from "react";

export default function Checkbox({ checked, onChange }) {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
    </div>
  );
}
