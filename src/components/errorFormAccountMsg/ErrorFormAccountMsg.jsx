import "./errorFormAccountMsg.css";

const ErrorFormAccountMsg = ({error, index = 1}) => {
  return (
    error && (
      <p className="form__errorMsg" index={index}>{`*Error: ${error}`}</p>
    )
  );
};
export default ErrorFormAccountMsg;
