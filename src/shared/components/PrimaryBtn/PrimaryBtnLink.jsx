import "./PrimaryBtn.css";
import { Link } from "react-router-dom";

export function PrimaryBtnLink({ text, tolink, cssClasses, children }) {
  return (
    <Link to={tolink} className={"baseBtn" + " " + cssClasses}>
      {text}
      {children}
    </Link>
  );
}
