import "./inputText.css";
import {useState} from "react";

const FormInput = props => {
  const [focused, setFocused] = useState(false);
  const {label, errorMessage, onChange, id, validate, ...inputProps} = props;

  const handleBlur = e => {
    setFocused(true);
    if (inputProps.onBlur) {
      inputProps.onBlur(e);
    }
  };

  const handleChange = e => {
    onChange(e);
    if (validate) {
      validate(e.target.value);
    }
  };

  return (
    <>
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input
        className="input__typeText"
        {...inputProps}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        data-focused={focused.toString()}
      />
      {focused && <span className="form__errorMsg">{errorMessage}</span>}
    </>
  );
};

export default FormInput;
