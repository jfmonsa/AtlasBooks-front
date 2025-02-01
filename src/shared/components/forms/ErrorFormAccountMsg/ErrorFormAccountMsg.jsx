import "./ErrorFormAccountMsg.css";

export function ErrorFormAccountMsg({ error, index = 1 }) {
  let errorMessage = error;
  if (typeof error === "object" && error !== null && "error" in error) {
    errorMessage = error.error;
  }

  return (
    error && (
      <p className="form__errorMsg" key={index}>{`*Error: ${errorMessage}`}</p>
    )
  );
}
