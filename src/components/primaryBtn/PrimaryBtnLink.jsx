import "./primarybtn.css";
import {Link} from "react-router-dom";

const PrimaryBtnLink = props => {
  return (
    <Link to={props.tolink} className={props.cssClasses}>
      {props.text}
      {props.children}
    </Link>
  );
};
export default PrimaryBtnLink;
