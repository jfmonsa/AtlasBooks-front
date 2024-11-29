import "./primarybtn.css";
import { Link } from "react-router-dom";

const PrimaryBtnLink = ({ text, tolink, cssClasses, children }) => {
  return (
    <Link to={tolink} className={"baseBtn" + " " + cssClasses}>
      {text}
      {children}
    </Link>
  );
};
export default PrimaryBtnLink;
