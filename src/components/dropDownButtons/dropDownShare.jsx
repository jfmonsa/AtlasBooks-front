import "./dropDownButton.sass"
import Facebook from "../../assets/icons/Icon-facebook.svg";
import Instagram from "../../assets/icons/Icon-instagram.svg";
import Telegram from "../../assets/icons/Icon-telegram.svg"
import Whatasapp from "../../assets/icons/Icon-whatsapp.svg"
import Enlace from "../../assets/icons/Icon-link.svg"
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import {useState} from "react";
import {Link} from "react-router-dom";

const DropDownButtonCompartir = () => {


    const DropdownItemCompartir = props => {
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

      const DropdownMenuCompartir = () => {
        return (
          <ul className="dropmenuBook">
            <DropdownItemCompartir
              toLink=""
              icon={Enlace}
              text="Link"
            ></DropdownItemCompartir>
            <DropdownItemCompartir
              toLink=""
              icon={Facebook}
              text="Facebook"
            ></DropdownItemCompartir>
            <DropdownItemCompartir
              toLink=""
              icon={Instagram}
              text="Intagram"
            ></DropdownItemCompartir>
            <DropdownItemCompartir
              toLink=""
              icon={Whatasapp}
              text="Whatsapp"
            ></DropdownItemCompartir>
            <DropdownItemCompartir
              toLink=""
              icon={Telegram}
              text="Telegram"
            ></DropdownItemCompartir>
          </ul>
        );
      };

    const [open, setOpen] = useState(false);

    return (
        <section className="share-dropdown">
            <div className="icon-buttonBookShare" onClick={() => setOpen(!open)}>
                Compartir
                <div className="divide-button"></div> 
                <div className="icon-chevron">{open ? <FaChevronDown/> : <FaChevronLeft/> }</div>
            </div>

             {open && <DropdownMenuCompartir />} 
        </section>
    )
}

export default DropDownButtonCompartir 