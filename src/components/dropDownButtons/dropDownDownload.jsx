import "./dropDownButton.sass"
import Mega from "../../assets/icons/Icon-mega.svg"
import Mediafire from "../../assets/icons/Icon-mediafire.svg"
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import {useState} from "react";
import {Link} from "react-router-dom";

const DropDownButtonDescarga = () => {


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

      const DropdownMenuDescarga = () => {
        return (
          <ul className="dropmenuBook">
            <DropdownItemDescarga
              toLink=""
              icon={Mega}
              text="Mega"
            ></DropdownItemDescarga>
            <DropdownItemDescarga
              toLink=""
              icon={Mediafire}
              text="Mediafire"
            ></DropdownItemDescarga>
          </ul>
        );
      };

    const [open, setOpen] = useState(false);

    return (
        <section className="button-dropdown">
            <div className="icon-buttonBookDownload" onClick={() => setOpen(!open)}>
                Descargar
                <div className="divide-button"></div> 
                <div className="icon-chevron">{open ? <FaChevronDown/> : <FaChevronLeft/> }</div>
            </div>

             {open && <DropdownMenuDescarga />} 
        </section>
    )
}

export default DropDownButtonDescarga