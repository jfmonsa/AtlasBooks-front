import "./dropdownButton.sass";
import {FaChevronLeft} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa";
import {useState} from "react";
import MenuItem from "../menuItem/MenuItem";

const DropdownBtnMenu = ({options}) => {
  return (
    <ul className="btnDropdown__menu">
      {options.map((option, index) => (
        <MenuItem
          key={index}
          toLink={option.toLink}
          iconPath={option.iconPath}
          text={option.text}
        />
      ))}
    </ul>
  );
};

const DropdownBtn = ({text, options, boxCssClasses, textCssClasses}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={boxCssClasses} onClick={() => setOpen(!open)}>
      <span className={textCssClasses}>{text}</span>
      <div className="btnDropDown__icon">
        {open ? <FaChevronDown /> : <FaChevronLeft />}
      </div>

      {open && <DropdownBtnMenu options={options} />}
    </div>
  );
};

export default DropdownBtn;
