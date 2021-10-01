import React from "react";

export default function Checkbox({ checked, onChange }) {
  return (
    <div className="checkbox">
      <label>
        <input
          data-testid="checkbox"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
