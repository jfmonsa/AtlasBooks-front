import "./iconDropDown.css";
import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export function IconDropDown({
  icon,
  options,
  menuContainerCssClass,
  defaultTextNoData = "No hay datos",
}) {
  const [open, setOpen] = useState(false);

  return (
    <span className="iconDropDown">
      <span
        onClick={() => {
          setOpen(!open);
        }}
      >
        {icon}
      </span>
      {open && options && options.lenght > 0 && (
        <IconDropMenu
          infoText="Guardar en lista:"
          options={options}
          cssClassContainer={menuContainerCssClass}
        />
      )}
      {open && !options && !options?.lenght > 0 && (
        <IconDropMenu infoText={defaultTextNoData} options={null} />
      )}
    </span>
  );
}

// aux functions
function IconDropMenuItem({ onClick, text, itemSize }) {
  const [mark, setMark] = useState(false);
  const handleClick = () => {
    setMark(!mark); // Esta es la acción adicional
    onClick && onClick(); // Llama a la función onClick que pasaste como prop
  };
  return (
    <li
      className={`dropMenu__item--${itemSize} dropMenu__item  navHover`}
      onClick={handleClick}
    >
      <span className="dropMenu__item__icon">
        {mark ? <FaBookmark /> : <FaRegBookmark />}
      </span>
      <span className="dropMenu__item__text">{text}</span>
    </li>
  );
}

function IconDropMenu({
  options,
  cssClassContainer = "",
  itemSizep = "avg",
  orientation = "left",
  infoText,
}) {
  return (
    <ul className={`dropMenu dropMenu--${orientation} ${cssClassContainer}`}>
      <li className="dropMenu--infoText"> {infoText} </li>
      {options &&
        options.length > 0 &&
        options.map((option, index) => (
          <IconDropMenuItem
            key={index}
            onClick={option.onClick}
            icon={option.icon}
            text={option.text}
            itemSize={itemSizep}
          />
        ))}
    </ul>
  );
}
