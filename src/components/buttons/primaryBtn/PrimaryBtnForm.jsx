import "./primarybtn.css";



const PrimaryBtnForm = ({
  text,
  children,
  cssClasses,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type="submit"
      className={"baseBtn" + " " + cssClasses}
      onClick={onClick}
    >
        {text}
        {children}
    </button>
  );
};
export default PrimaryBtnForm;
