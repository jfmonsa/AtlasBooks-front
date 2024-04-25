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
import {Link} from "react-router-dom";

// Auxiliary components for dropdownmenu
const DropdownItem = props => {
  const alticon = "Icono de";
  return (
    <li>
      <Link to={props.toLink} className="dropmenu__item">
        <span className="dropmenu__item__icon">
          <img src={props.icon} alt={alticon + " " + props.text}></img>
        </span>
        <span className="dropmenu__item__text">{props.text}</span>
      </Link>
    </li>
  );
};

const DropdownMenu = () => {
  return (
    <ul className="dropmenu">
      {/* TODO: fix this link when Account page is ready */}
      <DropdownItem
        toLink="/"
        icon={MenuProfileIcon}
        text="Mi cuenta"
      ></DropdownItem>
      {/* Si no ha iniciado sesión */}
      {/* <DropdownItem
        toLink="/login"
        icon={MenuLoginIcon}
        text="Iniciar sesión"
      ></DropdownItem>
      <DropdownItem
        toLink="/new-account"
        icon={MenuSingupIcon}
        text="Registrarse"
      ></DropdownItem> */}
      {/* Si es admin: */}
      {/* <DropdownItem toLink="/" icon={MenuControlpanelIcon} text="Panel de control"></DropdownItem> */}
      <DropdownItem
        toLink="/"
        icon={MenuSearchIcon}
        text="Buscar libro"
      ></DropdownItem>
      <DropdownItem
        toLink="/"
        icon={MenuCategoriesIcon}
        text="Categorias"
      ></DropdownItem>
      <DropdownItem
        toLink="/"
        icon={MenuRecommendedIcon}
        text="Recomendados"
      ></DropdownItem>
      <DropdownItem
        toLink="/"
        icon={MenuDiscoverlistsIcon}
        text="Explorar listas"
      ></DropdownItem>
      <DropdownItem
        toLink="/"
        icon={MenuMylistsIcon}
        text="Mis listas"
      ></DropdownItem>
      <DropdownItem
        toLink="/"
        icon={MenuLogoutIcon}
        text="Salir"
      ></DropdownItem>
    </ul>
  );
};

// Main header component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setOpenedState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo_Atlas} alt="logo AtlassBook" />
      </Link>

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
          {/* Si no ha iniciado sección */}
          {/* <li>
            <Link top="/new-account" className="navbar-right__item">
              Registrarse
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar-right__item">
              Iniciar Sesion
            </Link>
          </li> */}
          {/* 
          TODO: fix this link when the Account page is ready
           */}
          <li>
            <Link href="/" className="navbar-right__item">
              Mi Perfil
            </Link>
          </li>
        </ul>
        <div
          className={isOpen ? "menu-button-opened" : "menu-button"}
          onClick={() => setOpenedState()}
        >
          <div className="menu-button-burger"></div>
        </div>
      </div>
      {isOpen && <DropdownMenu />}
    </header>
  );
};
export default Header;
