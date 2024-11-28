import "./primarybtn.css";

const PrimaryBtnForm = ({
  text,
  children,
  cssClasses,
  onClick,
  type = "submit",
}) => {
  return (
    <button
      type={type}
      className={"baseBtn" + " " + cssClasses}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};
export default PrimaryBtnForm;
