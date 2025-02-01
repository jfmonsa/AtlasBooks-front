import "./DropdownButton.sass";
import { DropMenu } from "@components/DropMenu/DropMenu";
import { useToggleState } from "@hooks/useToggleState";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export function DropdownBtn({
  text,
  options,
  boxCssClasses,
  textCssClasses,
  cssClassMenuContainer = " btnDropdown__menu--avg",
}) {
  const [isDropDownOpen, toggleDropDown] = useToggleState();

  return (
    <div className={boxCssClasses} onClick={toggleDropDown}>
      <span className={textCssClasses}>{text}</span>
      <div className="btnDropDown__icon">
        {open ? <FaChevronDown /> : <FaChevronLeft />}
      </div>

      {isDropDownOpen && (
        <DropMenu options={options} cssClassContainer={cssClassMenuContainer} />
      )}
    </div>
  );
}
