import {FaChevronLeft} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-router-dom";

const DropDownButtonListUser = () => {
  const DropdownItemListUser = props => {
    return (
      <li>
        <Link to={props.toLink} className="dropmenu__itemBook">
          <span className="dropmenu__item__textBook">{props.text}</span>
        </Link>
      </li>
    );
  };

  const DropdownMenuListUser = () => {
    return (
      <ul className="dropmenuBookList">
        <DropdownItemListUser toLink="" text="Favoritos"></DropdownItemListUser>
        <DropdownItemListUser toLink="" text="Leyendo"></DropdownItemListUser>
      </ul>
    );
  };

  const [open, setOpen] = useState(false);

  return (
    <section className="button-dropdown">
      <div className="icon-buttonBookListUser" onClick={() => setOpen(!open)}>
        Guardar en otra lista
        <div className="icon-chevron">
          {open ? <FaChevronDown /> : <FaChevronLeft />}
        </div>
      </div>

      {open && <DropdownMenuListUser />}
    </section>
  );
};

export default DropDownButtonListUser;
