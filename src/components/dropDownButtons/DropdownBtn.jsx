import "./dropdownButton.sass";
import {FaChevronLeft} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa";
import {useState} from "react";
import DropMenu from "../dropMenu/DropMenu";

const DropdownBtn = ({
  text,
  options,
  boxCssClasses,
  textCssClasses,
  cssClassMenuContainer = " btnDropdown__menu--avg",
}) => {
  const [open, setOpen] = useState(false);
  console.log("DropdownBtn -> options", options);
  return (
    <div className={boxCssClasses} onClick={() => setOpen(!open)}>
      <span className={textCssClasses}>{text}</span>
      <div className="btnDropDown__icon">
        {open ? <FaChevronDown /> : <FaChevronLeft />}
      </div>

      {open && (
        <DropMenu options={options} cssClassContainer={cssClassMenuContainer} />
      )}
    </div>
  );
};

export default DropdownBtn;
