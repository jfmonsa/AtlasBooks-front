import styles from "./inputText.module.css";

const InputText = ({type, typecss, value, id, onChange, text, holder}) => {
  return (
    <div>
      <label htmlFor={id} className={styles.input__label}>
        {text}
      </label>
      <input
        id={id}
        className={styles.input}
        type={type}
        placeholder={holder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default InputText;
