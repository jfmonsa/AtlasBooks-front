import "./dropDownButton.sass";
import {FaChevronLeft} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-router-dom";

const DropdownBtnItem = ({text, toLink, iconPath}) => {
  const alticon = "Icono de";
  return (
    <li>
      <Link to={toLink} className="btnDropdown__menu__item">
        <span className="btnDropdown__menu__item__icon">
          <img src={iconPath} alt={alticon + " " + text}></img>
        </span>
        <span className="btnDropdown__menu__item__text">{text}</span>
      </Link>
    </li>
  );
};

const DropdownBtnMenu = ({options}) => {
  return (
    <ul className="btnDropdown__menu">
      {options.map((option, index) => (
        <DropdownBtnItem
          key={index}
          toLink={option.toLink}
          iconPath={option.iconPath}
          text={option.text}
        />
      ))}
    </ul>
  );
};

const DropDownBtn = ({text, options, boxCssClasses, textCssClasses}) => {
  const [open, setOpen] = useState(false);
  const boxCss = "btnDropDown " + boxCssClasses;
  const textCss = "btnDropDown__text " + textCssClasses;

  return (
    <div className={boxCss} onClick={() => setOpen(!open)}>
      <span className={textCss}>{text}</span>
      <div className="btnDropDown__icon">
        {open ? <FaChevronDown /> : <FaChevronLeft />}
      </div>

      {open && <DropdownBtnMenu options={options} />}
    </div>
  );
};

export default DropDownBtn;
