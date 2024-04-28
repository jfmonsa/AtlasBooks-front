import "./primarybtn.css";

const PrimaryBtnForm = props => {
  return (
    <button
      type="submit"
      className={"baseBtn" + " " + props.cssClasses}
      id={props.id}
      onClick={props.onClick}
    >
      {props.text}
      {props.children}
    </button>
  );
};
export default PrimaryBtnForm;
