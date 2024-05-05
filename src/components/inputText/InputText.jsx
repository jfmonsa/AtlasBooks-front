import "./inputText.css";

const InputText = ({
  text,
  holder,
  type = "text",
  name,
  value,
  id,
  onChange,
}) => {
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
      />
    </>
  );
};
export default InputText;
