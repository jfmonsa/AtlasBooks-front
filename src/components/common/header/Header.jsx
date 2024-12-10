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

import { useAuth } from "../../../hooks/useAuth.js";

import { NavLink } from "react-router-dom";
import DropMenu from "../../dropMenu/DropMenu.jsx";
import { useNavigate } from "react-router-dom";
import { useToggleState } from "../../../hooks/useToggleState.js";

// Aux functions
const userConditionalRenderingMenu = (userData, logout, navigate) => {
  let menuOptions = [
    {
      toLink: "/",
      iconPath: MenuSearchIcon,
      text: "Buscar libro",
    },
    { toLink: "/categories", iconPath: MenuCategoriesIcon, text: "Categorias" },
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

  if (userData) {
    if (userData.role === "ADMIN") {
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
      onClick: () => {
        logout();
        navigate("/login");
      },
      iconPath: MenuLogoutIcon,
      text: "Salir",
    });
  } else {
    menuOptions.push({
      toLink: "/login",
      iconPath: MenuLoginIcon,
      text: "Iniciar sesión",
    });
    menuOptions.push({
      toLink: "/new-account",
      iconPath: MenuSingupIcon,
      text: "Registrarse",
    });
  }
  return menuOptions;
};
const userConditionalRenderingHederOptions = (userData) => {
  if (userData) {
    return [{ url: "/my-account", text: "Mi Cuenta" }];
  }
  return [
    { url: "/new-account", text: "Registrarse" },
    { url: "/login", text: "Iniciar Sesion" },
  ];
};

const VisibleHeaderOptions = ({ opts }) => {
  return (
    <>
      {opts.map((opt, index) => {
        return (
          <li key={index}>
            <NavLink to={opt.url} className="navbar-right__item">
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
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  // const context = contextValue;
  const [isSidebarOpen, toggleSidebar] = useToggleState();

  return (
    <header className="navbar">
      <NavLink to="/">
        <img src={logo_Atlas} alt="logo AtlassBook" />
      </NavLink>

      <div className="navbar-right">
        <ul className="navbar-right">
          <li>
            <PrimaryBtnLink
              tolink="https://paypal.me/Joker222735?country.x=CO&locale.x=es_XC"
              cssClasses="navbar-right__item navbar-right__item--donar"
            >
              Donar
            </PrimaryBtnLink>
          </li>
          <VisibleHeaderOptions
            opts={userConditionalRenderingHederOptions(user)}
          />
        </ul>
        <div
          className={isSidebarOpen ? "menu-button-opened" : "menu-button"}
          onClick={toggleSidebar}
        >
          <div className="menu-button-burger"></div>
        </div>
      </div>
      {isSidebarOpen && (
        <DropMenu
          options={userConditionalRenderingMenu(user, logout, navigate)}
        />
      )}
    </header>
  );
};
export default Header;
