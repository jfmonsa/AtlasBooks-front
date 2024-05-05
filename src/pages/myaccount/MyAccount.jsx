import "./myaccount.css";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";
import BtnAdd from "../../components/buttons/BtnAdd/BtnAdd.jsx";
import Slider from "../../components/slider/Slider.jsx";
import Card from "../../components/card/Card.jsx";
import {Link} from "react-router-dom";
//icons for option's section
import IconPaypal from "../../assets/icons/icon-paypal.svg";
import IconLogout from "../../assets/icons/menu-logout.svg";
import IconEditEmail from "../../assets/icons/icon-edit-email.svg";
import IconEditDetails from "../../assets/icons/icon-edit-details.svg";
import IconShieldPass from "../../assets/icons/icon-shieldpass.svg";
import IconDelAccount from "../../assets/icons/icon-delaccount.svg";
//icons for my lists' section
import PrivateListIcon from "./../../assets/icons/icon-privatelist.svg";
import PublicListIcon from "./../../assets/icons/icon-publiclist.svg";
//Admin page
import Searcher from "../../components/searcher/Searcher.jsx";

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
        path="/user/"
        desc="Lista de mis libros favoritos"
        numBooks="14"
        publicList
      />
      <SectionListsListCard
        listName="Mis Favoritos"
        path="/user/"
        desc="Lista de mis libros favoritos"
        numBooks="14"
      />
      <SectionListsListCard
        listName="Mis Favoritos"
        path="/user/"
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
      {/* TODO: el link para este */}
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
  return (
    <Card h1Text="Opciones">
      <ul>
        <SectionOtherOptsOpt text="Donar" iconSrc={IconPaypal} toLink="#" />
        <SectionOtherOptsOpt
          text="Cerrar sesión"
          iconSrc={IconLogout}
          toLink="/login"
        />
        <SectionOtherOptsOpt
          text="Editar mi información"
          iconSrc={IconEditDetails}
          toLink="/login"
        />
        <SectionOtherOptsOpt
          text="Cambiar email"
          iconSrc={IconEditEmail}
          toLink="/login"
        />
        <SectionOtherOptsOpt
          text="Cambiar contraseña"
          iconSrc={IconShieldPass}
          toLink="/confirm-password"
        />
        <SectionOtherOptsOpt
          text="Eliminar cuenta"
          iconSrc={IconDelAccount}
          toLink="/PassDel"
        />
      </ul>
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
      <MyAccountAdmin />
      <SectionLists />
      <SectionDownloadsHistory />
      <SectionUploadABook />
      <SectionOtherOpts />
    </>
  );
};
export default MyAccount;
