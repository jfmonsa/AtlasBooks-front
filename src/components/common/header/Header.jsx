import "./Header.sass";
import PrimaryBtnLink from "../../buttons/primaryBtn/PrimaryBtnLink.jsx";
import logo_Atlas from "../../../assets/logo_Atlas.svg";
import MenuProfileIcon from "../../../assets/icons/menu-profile.svg";
import MenuCategoriesIcon from "../../../assets/icons/menu-categories.svg";
//import MenuControlpanelIcon from "../../../assets/icons/menu-controlPanel.svg";
import MenuDiscoverlistsIcon from "../../../assets/icons/menu-discoverLists.svg";
//import MenuLoginIcon from "../../../assets/icons/menu-login.svg";
import MenuLogoutIcon from "../../../assets/icons/menu-logout.svg";
import MenuMylistsIcon from "../../../assets/icons/menu-myLists.svg";
import MenuRecommendedIcon from "../../../assets/icons/menu-recommended.svg";
import MenuSearchIcon from "../../../assets/icons/menu-search.svg";
//import MenuSingupIcon from "../../../assets/icons/menu-singup.svg";

import {useContext, useState} from "react";
import LoginContext from "../../../contexts/LoginContext.jsx"

import {NavLink} from "react-router-dom";
import DropMenu from "../../dropMenu/DropMenu.jsx";


const IsLoggedMenuOption = () => {
  const context = useContext(LoginContext)

  if (context.logged)
    return menuOptions.splice(0, 0, {toLink: "/my-account", iconPath: MenuProfileIcon, text: "Mi cuenta"})
  else return menuOptions.splice(0, 0, {toLink: "/login", iconPath: MenuProfileIcon, text: "Mi cuenta"});
}

const menuOptions = [
  
  IsLoggedMenuOption,
  //Si el usuario es admin
  //  {toLink: "/", iconPath: MenuControlpanelIcon, text: "Panel de control"},
  {toLink: "/book-information", iconPath: MenuSearchIcon, text: "Buscar libro"},
  {toLink: "/categories", iconPath: MenuCategoriesIcon, text: "Categorias"},
  {toLink: "/recommended", iconPath: MenuRecommendedIcon, text: "Recomendados"},
  {
    toLink: "/discover-list",
    iconPath: MenuDiscoverlistsIcon,
    text: "Explorar listas",
  },
  {
    toLink: "/my-account#my-lists",
    iconPath: MenuMylistsIcon,
    text: "Mis listas",
  },
  {toLink: "/login", iconPath: MenuLogoutIcon, text: "Salir"},
];



const UnLoggedHeader = () => {

  return(
    <>
      <li>
          <NavLink to="/new-account" className="navbar-right__item">
              Registrarse
          </NavLink>
      </li>
      <li>
          <NavLink to="/login" className="navbar-right__item">
            Iniciar Sesion
          </NavLink>
      </li>
    </> 
  )
}

const LoggedHeader = () => {

  return(

    <li>
      <NavLink to="/my-account" className="navbar-right__item">
        Mi Perfil
      </NavLink>
    </li>
  )
}

const IsLoggedHeader = () => {
  const context = useContext(LoginContext)

  if (context.logged)
    return <LoggedHeader/>;
  else return <UnLoggedHeader/>;

}

// Main header component
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const setOpenedState = () => {
    setIsOpen(!isOpen);
  };

  return (

    

    <header className="navbar">
      <NavLink to="/">
        <img src={logo_Atlas} alt="logo AtlassBook" />
      </NavLink>

      <div className="navbar-right">
        <ul className="navbar-right">
          <li>
            <PrimaryBtnLink
              to="/"
              cssClasses="navbar-right__item navbar-right__item--donar"
            >
              Donar
            </PrimaryBtnLink>
          </li>
            <IsLoggedHeader/>
        </ul>
        <div
          className={isOpen ? "menu-button-opened" : "menu-button"}
          onClick={() => setOpenedState()}
        >
          <div className="menu-button-burger"></div>
        </div>
      </div>
      {isOpen && <DropMenu options={menuOptions} />}
    </header>
  );
};
export default Header;
