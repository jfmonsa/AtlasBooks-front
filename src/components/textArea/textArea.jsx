import styles from "./inputText.module.css";

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
      <label htmlFor={id} className={styles.input__label}>
        {text}
      </label>
      <textarea
        type={type}
        placeholder={holder}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className={styles.input}
      ></textarea>
    </>
  );
};
export default InputText;
