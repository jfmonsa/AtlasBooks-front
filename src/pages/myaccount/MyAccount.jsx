import "./myaccount.css";
import BtnAdd from "../../components/buttons/BtnAdd/BtnAdd.jsx";
import Slider from "../../components/slider/Slider.jsx";
import Card from "../../components/card/Card.jsx";
import {Link} from "react-router-dom";
//for option's section
import IconPaypal from "../../assets/icons/icon-paypal.svg";
import IconLogout from "../../assets/icons/menu-logout.svg";
import IconEditEmail from "../../assets/icons/icon-edit-email.svg";
import IconEditDetails from "../../assets/icons/icon-edit-details.svg";
import IconShieldPass from "../../assets/icons/icon-shieldpass.svg";
import IconDelAccount from "../../assets/icons/icon-delaccount.svg";
import DropMenu from "../../components/dropMenu/DropMenu.jsx";

//icons for my lists' section
import PrivateListIcon from "./../../assets/icons/icon-privatelist.svg";
import PublicListIcon from "./../../assets/icons/icon-publiclist.svg";
//Admin page
import Searcher from "../../components/searcher/Searcher.jsx";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext.jsx";

// Aux functions
const SectionMyDataDatum = ({left, right}) => {
  return (
    <li className="card-myData">
      <span className="card-myData__left">{left}</span>
      <span className="card-myData__right">{right}</span>
    </li>
  );
};

const SectionMyData = ({name, email, country, registerDate}) => {
  return (
    <Card h1Text="Mis datos">
      <ul>
        <SectionMyDataDatum left="Nombre" right={name} />
        <SectionMyDataDatum left="Email" right={email} />
        <SectionMyDataDatum left="País" right={country} />
        <SectionMyDataDatum left="Fecha de Registro" right={registerDate} />
      </ul>
    </Card>
  );
};

const SectionListsListCard = ({
  listName,
  path,
  desc,
  numBooks,
  publicList = false,
}) => {
  const iconpath = publicList ? PublicListIcon : PrivateListIcon;
  const alticon = publicList
    ? "icono de lista de libros publica"
    : "icono de lista de libros privada";

  return (
    <Link to={path} className="listCard navHover">
      <span className="listCard__items">
        <span>{listName}</span>
        <img
          className="listCard-icon listCard--item"
          src={iconpath}
          alt={alticon}
        />
      </span>
      <span className="listCard--item">{desc}</span>
      <span className="listCard--item">{numBooks + " Libros"}</span>
    </Link>
  );
};

const SectionLists = () => {
  return (
    <Card h1Text="Mis listas" id="my-lists">
      <SectionListsListCard
        listName="Mis Favoritos"
        path="/my-lists"
        desc="Lista de mis libros favoritos"
        numBooks="14"
        publicList
      />
      <SectionListsListCard
        listName="Mis Favoritos"
        path="/my-lists"
        desc="Lista de mis libros favoritos"
        numBooks="14"
      />
      <SectionListsListCard
        listName="Mis Favoritos"
        path="/my-lists"
        desc="Lista de mis libros favoritos"
        numBooks="14"
        publicList
      />
      {/* TODO: el link para este */}
      {/* <BtnAdd tolink="/new-list" /> */}
      <BtnAdd tolink="/new-list" />
    </Card>
  );
};

const SectionDownloadsHistory = () => {
  return (
    <Card h1Text="Historial de descargas">
      <Slider />
    </Card>
  );
};

const SectionUploadABook = () => {
  return (
    <Card h1Text="Subir un libro">
      <p>
        Contribuye con la comunidad añadiendo nuevos libros, click al boton para
        hacerlo
      </p>
      <BtnAdd tolink="/upload-book" />
    </Card>
  );
};

const SectionOtherOptsOpt = ({text, toLink, iconSrc}) => {
  return (
    <li>
      <Link to={toLink} className="options navHover">
        <img
          src={iconSrc}
          alt={`icono opción ${text}`}
          className="options__icon"
        />
        <span>{text}</span>
      </Link>
    </li>
  );
};

const SectionOtherOpts = () => {
  const SectionOtherOptsOptions = [
    {toLink: "#", iconPath: IconPaypal, text: "Donar"},
    {toLink: "/login", iconPath: IconLogout, text: "Cerrar sesión"},
    {
      toLink: "/confirm-password",
      iconPath: IconEditDetails,
      text: "Editar mi información",
    },
    {
      toLink: "/confirm-password",
      iconPath: IconEditEmail,
      text: "Cambiar email",
    },
    {
      toLink: "/confirm-password",
      iconPath: IconShieldPass,
      text: "Cambiar contraseña",
    },
    {toLink: "/confirm-password", iconPath: IconDelAccount, text: "Eliminar cuenta"},
  ];
  return (
    <Card h1Text="Opciones">
      <DropMenu
        options={SectionOtherOptsOptions}
        cssClassContainer=" nonFloating"
      />
      {/* <SectionOtherOptsOpt
          text="Eliminar cuenta"
          iconSrc={IconDelAccount}
          toLink="/PassDel"
        /> */}
    </Card>
  );
};

const MyAccountAdmin = () => {
  return (
    <>
      <Card h1Text="Administrar libros" h1Center>
        <Searcher holder="Buscar libros" toNavigate="/results" />
      </Card>
      <Card h1Text="Administrar usuarios" h1Center>
        <Searcher holder="Buscar libros" toNavigate="/results" />
      </Card>
      <Card h1Text="Administrar reportes" h1Center></Card>
    </>
  );
};

const LoggedAdmin = () => {
  const context = useContext(LoginContext)
  
  if (context.admin) {
    return <MyAccountAdmin />;
  } else {
    return <></>
  }

}

// Main page
const MyAccount = () => {
  return (
    <>
      <SectionMyData
        name="Pepito Perez"
        email="pepito@p.com"
        country="Palestina"
        registerDate="11/03/2003"
      />
      <LoggedAdmin  />
      <SectionLists />
      <SectionDownloadsHistory />
      <SectionUploadABook />
      <SectionOtherOpts />
    </>
  );
};
export default MyAccount;
