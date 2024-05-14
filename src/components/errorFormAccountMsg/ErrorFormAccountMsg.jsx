import "./errorFormAccountMsg.css";

const ErrorFormAccountMsg = ({error}) => {
  return error && <p className="form__errorMsg">{`*error: ${error}`}</p>;
};
export default ErrorFormAccountMsg;
