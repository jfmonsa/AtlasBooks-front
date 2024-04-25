import "./primarybtn.css";
import {Link} from "react-router-dom";

const PrimaryBtnLink = props => {
  return (
    <Link to={props.tolink} className={`formCustomBtn ${props.type}`}>
      {props.text}
    </Link>
  );
};
export default PrimaryBtnLink;
