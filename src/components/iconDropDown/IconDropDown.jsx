import "./iconDropDown.css";
import {useState} from "react";
import {FaRegBookmark, FaBookmark} from "react-icons/fa";

const IconDropMenuItem = ({
  onClick,
  text,
  toLink,
  iconPath,
  cssClassItemCont,
  itemSize,
}) => {
  const [mark, setMark] = useState(false);
  const handleClick = () => {
    setMark(!mark); // Esta es la acción adicional
    onClick && onClick(); // Llama a la función onClick que pasaste como prop
  };
  return (
    <li
      className={`dropMenu__item--${itemSize} dropMenu__item  navHover  ${cssClassItemCont}`}
      onClick={handleClick}
    >
      <span className="dropMenu__item__icon">
        {mark ? <FaBookmark /> : <FaRegBookmark />}
      </span>
      <span className="dropMenu__item__text">{text}</span>
    </li>
  );
};

const IconDropMenu = ({
  options,
  cssClassContainer = "",
  cssClassItemContainer = "",
  itemSizep = "avg",
  orientation = "left",
  infoText,
}) => {
  return (
    <ul className={`dropMenu dropMenu--${orientation} ${cssClassContainer}`}>
      <li className="dropMenu--infoText"> {infoText} </li>
      {options.map((option, index) => (
        <IconDropMenuItem
          key={index}
          onClick={option.onClick}
          icon={option.icon}
          text={option.text}
          cssClassItemCont={cssClassItemContainer}
          itemSize={itemSizep}
        />
      ))}
    </ul>
  );
};

const IconDropDown = ({
  icon,
  options,
  cssClassContainer,
  cssClassIcon,
  menuContainerCssClass,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <span className="iconDropDown">
      <span
        className={cssClassContainer}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {icon}
      </span>
      {open && (
        <IconDropMenu
          infoText="Guardar en lista:"
          options={options}
          cssClassContainer={menuContainerCssClass}
        />
      )}
    </span>
  );
};
export default IconDropDown;
