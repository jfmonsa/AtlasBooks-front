import "./Header.sass";
import PrimaryBtnLink from "../../buttons/primaryBtn/PrimaryBtnLink.jsx";
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

import {useContext, useState} from "react";
import LoginContext from "../../../contexts/LoginContext.jsx";

import {NavLink} from "react-router-dom";
import DropMenu from "../../dropMenu/DropMenu.jsx";

// Aux functions
const userConditionalRenderingMenu = context => {
  const menuOptions = [
    {
      toLink: "/book-information",
      iconPath: MenuSearchIcon,
      text: "Buscar libro",
    },
    {toLink: "/categories", iconPath: MenuCategoriesIcon, text: "Categorias"},
    {
      toLink: "/recommended",
      iconPath: MenuRecommendedIcon,
      text: "Recomendados",
    },
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
  ];

  if (context.logged) {
    if (context.admin) {
      menuOptions.unshift({
        toLink: "/my-account",
        iconPath: MenuControlpanelIcon,
        text: "Panel de Control",
      });
    } else {
      menuOptions.unshift({
        toLink: "/my-account",
        iconPath: MenuProfileIcon,
        text: "Mi cuenta",
      });
    }
    menuOptions.push({
      toLink: "/login",
      iconPath: MenuLogoutIcon,
      text: "Salir",
    });
  } else {
    menuOptions.concat([
      {
        toLink: "/login",
        iconPath: MenuLoginIcon,
        text: "Iniciar sesión",
      },
      {
        toLink: "/new-account",
        iconPath: MenuSingupIcon,
        text: "Crear cuenta",
      },
    ]);
  }
  return menuOptions;
};
const userConditionalRenderingHederOptions = context => {
  if (context.logged) {
    return [{url: "/my-account", text: "Mi Cuenta"}];
  }
  return [
    {url: "/new-account", text: "Registrarse"},
    {url: "/login", text: "Iniciar Sesion"},
  ];
};
const VisibleHeaderOptions = ({opts}) => {
  console.log(opts);
  return (
    <>
      {opts.map((opt, index) => {
        return (
          <li>
            <NavLink key={index} to={opt.url} className="navbar-right__item">
              {opt.text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

// Main header component
const Header = () => {
  //Login context
  const context = useContext(LoginContext);

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
          <VisibleHeaderOptions
            opts={userConditionalRenderingHederOptions(context)}
          />
        </ul>
        <div
          className={isOpen ? "menu-button-opened" : "menu-button"}
          onClick={() => setOpenedState()}
        >
          <div className="menu-button-burger"></div>
        </div>
      </div>
      {isOpen && <DropMenu options={userConditionalRenderingMenu(context)} />}
    </header>
  );
};
export default Header;
