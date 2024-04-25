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

      <div className="right-elements">
        <a className="button-donar" href="#">
          Donar
        </a>

        {/* <a className="right-elements__item" href="#">Registrarse</a> */}
        {/* <a className="right-elements__item" href="#">Iniciar Sesion</a> */}
        <a className="right-elements__item">Mi Perfil</a>

        <div
          className={isOpen ? "menu-button-opened" : "menu-button"}
          onClick={() => setOpenedState()}
        >
          <div className="menu-button-burger"></div>
        </div>
      </div>
    </header>
  );
};
export default Header;
