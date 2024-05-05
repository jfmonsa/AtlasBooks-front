import "./textArea.css";

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
        className="formTextArea"
      ></textarea>
    </>
  );
};
export default TextArea;
