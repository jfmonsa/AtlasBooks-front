import "./inputText.css";

const TextArea = ({text, holder, name, value, id, onChange}) => {
  return (
    <>
      <label htmlFor={id} className="input__label">
        {text}
      </label>
      <textarea
        placeholder={holder}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className="input__textArea"
      ></textarea>
    </>
  );
};
export default TextArea;
