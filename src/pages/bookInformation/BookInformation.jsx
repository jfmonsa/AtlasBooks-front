import "./BookInformation.sass"
import MenuProfileIcon from "../../assets/icons/menu-profile.svg";
import MenuSearchIcon from "../../assets/icons/menu-search.svg";
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import {useState} from "react";
import {Link} from "react-router-dom";

const BookInformation = () => {


    const DropdownItem = props => {
        const alticon = "Icono de";
        return (
          <li>
            <Link to={props.toLink} className="dropmenu__itemLibro">
              <span className="dropmenu__item__iconLibro">
                <img src={props.icon} alt={alticon + " " + props.text}></img>
              </span>
              <span className="dropmenu__item__textLibro">{props.text}</span>
            </Link>
          </li>
        );
      };

      const DropdownMenu = () => {
        return (
          <ul className="dropmenuLibro">
            <DropdownItem
              toLink=""
              icon={MenuProfileIcon}
              text="Mega"
            ></DropdownItem>
            <DropdownItem
              toLink=""
              icon={MenuSearchIcon}
              text="Mediafire"
            ></DropdownItem>
          </ul>
        );
      };

    const [open, setOpen] = useState(false);

    return (
        <section>
            <div className="icon-buttonLibro" onClick={() => setOpen(!open)}>
                Descargar <div className="pepe"></div> <div className="icon-flecha">{open ? <FaChevronDown/> : <FaChevronLeft/> }</div>
            </div>

            {open && <DropdownMenu />}
        </section>
    )
}

export default BookInformation