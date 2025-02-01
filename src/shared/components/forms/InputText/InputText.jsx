import "./InputText.css";

export function InputText({
  text,
  holder,
  type = "text",
  value = "",
  id,
  onChange,
  required = false,
  disabled = false,
}) {
  return (
    <>
      <label htmlFor={id} className="input__label">
        {text}
      </label>
      <input
        type={type}
        placeholder={holder}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className="input__typeText"
        required={required}
        disabled={disabled}
      />
    </>
  );
}
