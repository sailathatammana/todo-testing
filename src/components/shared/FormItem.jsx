import React from "react";

export default function FormItem({ settings, hook, isValid }) {
  const [state, setState] = hook;
  const { label, type, placeholder, alert } = settings;

  const displayError = !(isValid || state === "");

  return (
    <label>
      <div className="label-header">
        <h3>{label}</h3>
        {displayError && <p className="verif">{alert}</p>}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </label>
  );
}
