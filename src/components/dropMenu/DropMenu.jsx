/*
This component objective is to be a menu, in components like a
dropDownItem of a dropDownBtn or the burguer menu
*/
import "./dropMenu.sass";
import {Link} from "react-router-dom";

const DropMenuItemOnclick = ({
  text,
  onClick,
  iconPath,
  cssClassItemCont = "",
  itemSize,
}) => {
  const alticon = "Icono de";
  return (
    <li>
      <button
        onClick={onClick}
        className={`dropMenu__item--${itemSize} dropMenu__item  navHover  ${cssClassItemCont}`}
      >
        <span className="dropMenu__item__icon">
          <img src={iconPath} alt={alticon + " " + text}></img>
        </span>
        <span className="dropMenu__item__text">{text}</span>
      </button>
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

const DropMenu = ({
  customOnclickOptions = null,
  options,
  cssClassContainer = "",
  cssClassItemContainer = "",
  itemSizep = "avg",
}) => {
  /* Item size acepta valores de: avg, small
   + Las clases custom pasadas como argumentos, poener sus estilos en el menuItem.sass
   */

  return (
    <ul className={"dropMenu " + cssClassContainer}>
      {options && options.map((option, index) => (
        <DropMenuItem
          key={index}
          toLink={option.toLink}
          iconPath={option.iconPath}
          text={option.text}
          cssClassItemCont={cssClassItemContainer}
          itemSize={itemSizep}
        />
      ))}
      {customOnclickOptions && customOnclickOptions.map((option, index) => (
        <DropMenuItemOnclick
          key={index}
          onClick={option.onClick}
          iconPath={option.iconPath}
          text={option.text}
          cssClassItemCont={cssClassItemContainer}
          itemSize={itemSizep}
        />
      ))}
    </ul>
  );
};
export default DropMenu;
