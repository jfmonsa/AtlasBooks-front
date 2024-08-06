import "./inputText.css";
import {useState} from "react";

const FormInput = props => {
  const [focused, setFocused] = useState(false);
  const {label, errorMessage, onChange, id, validate, ...inputProps} = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <>
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input
        className="input__typeText"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        data-focused={focused.toString()}
      />
      <span className="form__errorMsg">{errorMessage}</span>
    </>
  );
};

export default FormInput;
