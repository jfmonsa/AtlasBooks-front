import "./primarybtn.css";

const PrimaryBtnForm = ({text, id, onClick, type}) => {
  return (
    <button className={`formCustomBtn ${type}`} id={id} onClick={onClick}>
      {text}
    </button>
  );
};
export default PrimaryBtnForm;
