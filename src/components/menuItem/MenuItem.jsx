/*
This component objective is to be an option in a menu, like a
dropDownItem of a dropDownBtn or the burguer menu
*/
import {Link} from "react-router-dom";

const MenuItem = ({text, toLink, iconPath}) => {
  const alticon = "Icono de";
  return (
    <li>
      <Link to={toLink} className="btnDropdown__menu__item navHover">
        <span className="btnDropdown__menu__item__icon">
          <img src={iconPath} alt={alticon + " " + text}></img>
        </span>
        <span className="btnDropdown__menu__item__text">{text}</span>
      </Link>
    </li>
  );
};
export default MenuItem;
