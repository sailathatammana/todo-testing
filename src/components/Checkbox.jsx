export default function Checkbox({ checked, onChange }) {
  return (
    <div className="checkbox">
      <input
        data-testid="checkbox"
        onChange={onChange}
        type="checkbox"
        checked={checked}
      />
      <div className={`icon-checkmark ${checked && "checked"}`}></div>
    </div>
  );
}
