import "./Header.sass";
import logo_Atlas from "../../../assets/logo_Atlas.svg";
import MenuProfileIcon from "../../../assets/icons/menu-profile.svg";
import MenuCategoriesIcon from "../../../assets/icons/menu-categories.svg";
import MenuControlpanelIcon from "../../../assets/icons/menu-controlPanel.svg";
import MenuDiscoverlistsIcon from "../../../assets/icons/menu-discoverLists.svg";
import MenuLoginIcon from "../../../assets/icons/menu-login.svg";
import MenuLogoutIcon from "../../../assets/icons/menu-logout.svg";
import MenuMylistsIcon from "../../../assets/icons/menu-myLists.svg";
import MenuRecommendedIcon from "../../../assets/icons/menu-recommended.svg";
import MenuSearchIcon from "../../../assets/icons/menu-search.svg";
import MenuSingupIcon from "../../../assets/icons/menu-singup.svg";
import {useState} from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpenedState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <a href="#">
        <img src={logo_Atlas} alt="logo AtlassBook" />
      </a>

      <div className="navbar-right">
        <ul className="navbar-right">
          <li href="#">
            <a
              href="#"
              className="navbar-right__item navbar-right__item--donar"
            >
              Donar
            </a>
          </li>
          {/* <li><a href="#" className="navbar-right__item">Registrarse</a></li>
          <li"><a href="#" className="navbar-right__item>Iniciar Sesion</a></li> */}
          <li>
            <a href="#" className="navbar-right__item">
              Mi Perfil
            </a>
          </li>
        </ul>
        <div
          className={isOpen ? "menu-button-opened" : "menu-button"}
          onClick={() => setOpenedState()}
        >
          <div className="menu-button-burger"></div>
          <DropdownMenu></DropdownMenu>
        </div>
      </div>
    </header>
  );
};

const DropdownItem = props => {
  const alticon = "Icono de";
  return (
    <li>
      <a href="#" className="dropmenu__item">
        <span className="dropmenu__item__icon">
          <img src={props.icon} alt={alticon + " " + props.text}></img>
        </span>
        <span className="dropmenu__item__text">{props.text}</span>
      </a>
    </li>
  );
};

const DropdownMenu = () => {
  return (
    <ul className="dropmenu">
      <DropdownItem icon={ProfileIcon} text="Mi cuenta"></DropdownItem>
      {/* Si no ha iniciado sesión */}
      {/* <DropdownItem icon="🤭" text="Iniciar sesión"></DropdownItem>
      <DropdownItem icon="🤭" text="Registrarse"></DropdownItem> */}
      {/* Si es admin: */}
      {/* <DropdownItem icon="🤭" text="Panel de control"></DropdownItem> */}
      <DropdownItem icon={ProfileIcon} text="Buscar libro"></DropdownItem>
      <DropdownItem icon="🤭" text="Categorias"></DropdownItem>
      <DropdownItem icon="🤭" text="Recomendados"></DropdownItem>
      <DropdownItem icon="🤭" text="Explorar listas"></DropdownItem>
      <DropdownItem icon="🤭" text="Mis listas"></DropdownItem>
      <DropdownItem icon="🤭" text="Salir"></DropdownItem>
    </ul>
  );
};

export default Header;
