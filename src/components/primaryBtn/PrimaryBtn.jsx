import "./PrimaryBtn.css";

export const PrimaryBtn = ({text, id, onClick, type}) => {
  return (
    <button className={`custom-button ${type}`} id={id} onClick={onClick}>
      {text}
    </button>
  );
};
