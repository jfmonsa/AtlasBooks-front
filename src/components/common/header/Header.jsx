import "./Header.sass";
import logo_Atlas from "../../../assets/logo_Atlas.svg";
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

      <div>
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

          <ul
            className={isOpen ? "menu-button-opened" : "menu-button"}
            onClick={() => setOpenedState()}
          >
            <ul className="menu-button-burger"></ul>
          </ul>
        </ul>

        {/* <div
          className={isOpen ? "menu-button-opened" : "menu-button"}
          onClick={() => setOpenedState()}
        >
          <div className="menu-button-burger"></div>
        </div> */}
      </div>
    </header>
  );
};

const DropdownItem = props => {
  return (
    <a href="#" className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
};

const DropdownMenu = () => {};

export default Header;
