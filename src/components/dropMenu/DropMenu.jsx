/*
This component objective is to be a menu, in components like a
dropDownItem of a dropDownBtn or the burguer menu
*/
import "./dropMenu.sass";
import {Link} from "react-router-dom";

const DropMenuItem = ({text, toLink, iconPath, cssClassItemCont, itemSize}) => {
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
  options,
  cssClassContainer,
  cssClassItemContainer,
  itemSizep = "avg",
}) => {
  /* Item size acepta valores de: avg, small
   + Las clases custom pasadas como argumentos, poener sus estilos en el menuItem.sass
   */

  return (
    <ul className={"dropMenu " + cssClassContainer}>
      {options.map(option => (
        <DropMenuItem
          key={option.text}
          toLink={option.toLink}
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
