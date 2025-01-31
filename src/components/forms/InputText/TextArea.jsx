import "./InputText.css";

export function TextArea({ text, holder, value = "", id, onChange }) {
  return (
    <>
      <label htmlFor={id} className="input__label">
        {text}
      </label>
      <textarea
        placeholder={holder}
        name={id}
        id={id}
        onChange={onChange}
        className="input__textArea"
        value={value}
      ></textarea>
    </>
  );
}
