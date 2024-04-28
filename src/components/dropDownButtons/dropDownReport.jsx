import "./dropDownButton.sass";

import {FaChevronLeft} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-router-dom";

const DropDownButtonReport = () => {
  const DropdownItemDescarga = props => {
    const alticon = "Icono de";
    return (
      <li>
        <Link to={props.toLink} className="dropmenu__itemBook">
          <span className="dropmenu__item__iconBook">
            <img src={props.icon} alt={alticon + " " + props.text}></img>
          </span>
          <span className="dropmenu__item__textBook">{props.text}</span>
        </Link>
      </li>
    );
  };

  const DropdownMenuReport = () => {
    return (
      <ul className="dropmenuBook">
        <DropdownItemReport toLink="" text="Mega"></DropdownItemReport>
        <DropdownItemReport toLink="" text="Mediafire"></DropdownItemReport>
      </ul>
    );
  };

  const [open, setOpen] = useState(false);

  return (
    <section className="report-dropdown">
      <div onClick={() => setOpen(!open)}>
        Tipo reporte
        <div className="divide-button"></div>
        <div className="icon-chevron">
          {open ? <FaChevronDown /> : <FaChevronLeft />}
        </div>
      </div>

      {open && <DropdownMenuReport />}
    </section>
  );
};

export default DropDownButtonReport;
