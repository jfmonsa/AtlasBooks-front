/*
This component objective is to be a menu, in components like a
dropDownItem of a dropDownBtn or the burguer menu
*/
import "./dropMenu.sass";
import { Link } from "react-router-dom";

const DropMenuItemOnclick = ({
  text,
  onClick,
  iconPath,
  cssClassItemCont = "",
  itemSize,
}) => {
  const alticon = "Icono de";
  return (
    <li
      onClick={onClick}
      className={`dropMenu__item--${itemSize} dropMenu__item  navHover  ${cssClassItemCont}`}
    >
      <span className="dropMenu__item__icon">
        <img src={iconPath} alt={alticon + " " + text}></img>
      </span>
      <span className="dropMenu__item__text">{text}</span>
    </li>
  );
};

const DropMenuItem = ({
  text,
  toLink,
  iconPath,
  cssClassItemCont = "",
  itemSize,
}) => {
  const alticon = "Icono de";
  return (
    <li>
      <Link
        to={toLink}
        className={`dropMenu__item--${itemSize} dropMenu__item  navHover  ${cssClassItemCont}`}
      >
        <span className="dropMenu__item__icon">
          <img src={iconPath} alt={alticon + " " + text}></img>
        </span>
        <span className="dropMenu__item__text">{text}</span>
      </Link>
    </li>
  );
};
/** Item size acepta valores de: avg, small
 *  Las clases custom pasadas como argumentos, poener sus estilos en el menuItem.sass
 */
const DropMenu = ({ options, cssClassContainer }) => {
  return (
    <ul className={`dropMenu ${cssClassContainer}`}>
      {options.map((option, index) =>
        option.onClick ? (
          <DropMenuItemOnclick
            key={index}
            text={option.text}
            onClick={option.onClick}
            iconPath={option.iconPath}
            cssClassItemCont={option.cssClassItemCont}
            itemSize={option.itemSize}
          />
        ) : (
          <DropMenuItem
            key={index}
            text={option.text}
            toLink={option.toLink}
            iconPath={option.iconPath}
            cssClassItemCont={option.cssClassItemCont}
            itemSize={option.itemSize}
          />
        ),
      )}
    </ul>
  );
};
export default DropMenu;
