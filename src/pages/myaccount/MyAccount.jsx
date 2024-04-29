import "./myaccount.css";
import IconPaypal from "../../assets/icons/icon-paypal.svg";
import IconLogout from "../../assets/icons/menu-logout.svg";
import IconEditEmail from "../../assets/icons/icon-edit-email.svg";
import IconEditDetails from "../../assets/icons/icon-edit-details.svg";
import IconShieldPass from "../../assets/icons/icon-shieldpass.svg";
import IconDelAccount from "../../assets/icons/icon-delaccount.svg";
import PrivateListIcon from "./../../assets/icons/icon-privatelist.svg";
import PublicListIcon from "./../../assets/icons/icon-publiclist.svg";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";
import BtnAdd from "../../components/buttons/BtnAdd/BtnAdd.jsx";
import Card from "../../components/card/Card.jsx";
import {Link} from "react-router-dom";

// Aux functions
const MyAccountMyDataDatum = props => {
  return (
    <li className="card-myData">
      <span className="card-myData__left">{props.left}</span>
      <span className="card-myData__right">{props.right}</span>
    </li>
  );
};

const MyAccountMyData = () => {
  return (
    <Card h1_text="Mis datos" h1_center={false}>
      <ul>
        <MyAccountMyDataDatum left="Nombre" right="Pepito Perez" />
        <MyAccountMyDataDatum left="Email" right="pepito@p.com" />
        <MyAccountMyDataDatum left="País" right="Palestina" />
        <MyAccountMyDataDatum left="Fecha de Registro" right="11/03/2003" />
      </ul>
    </Card>
  );
};

const MyAccountListCard = props => {
  const iconpath = props.publicList ? PublicListIcon : PrivateListIcon;
  const alticon = props.publicList
    ? "icono de lista de libros publica"
    : "icono de lista de libros privada";

  return (
    <Link to={props.path} className="listCard navHover">
      <span>
        <span className="listCard--itemss">{props.listName}</span>
        <img
          className="listCard-icon listCard--item"
          src={iconpath}
          alt={alticon}
        />
      </span>
      <span className="listCard--item">{props.desc}</span>
      <span className="listCard--item">{props.num + " Libros"}</span>
    </Link>
  );
};

const MyAccountLists = () => {
  return (
    <Card h1_text="Mis listas" id="my-lists">
      <div>
        <MyAccountListCard
          publicList
          path="/user/"
          listName="Mis Favoritos"
          desc="Lista de mis libros favoritos"
          num="14"
        />
        <MyAccountListCard
          path="/user/"
          listName="Mis Favoritos"
          desc="Lista de mis libros favoritos"
          num="14"
        />
        <MyAccountListCard
          publicList
          path="/user/"
          listName="Mis Favoritos"
          desc="Lista de mis libros favoritos"
          num="14"
        />
      </div>
      {/* TODO: el link para este */}
      <BtnAdd tolink="" />
    </Card>
  );
};

const MyAccountDownloadsHistory = () => {
  return <Card h1_text="Historial de descargas"></Card>;
};

const MyAccountUploadABook = () => {
  return (
    <Card h1_text="Subir un libro" h1_center={false}>
      <p>
        Contribuye con la comunidad añadiendo nuevos libros, click al boton para
        hacerlo
      </p>
      {/* TODO: el link para este */}
      <BtnAdd tolink="" />
    </Card>
  );
};
const MyAccountOpt = props => {
  return (
    <li>
      <Link to={props.toLink} className="options navHover">
        <img
          src={props.iconSrc}
          alt={`icono opción ${props.text}`}
          className="options__icon"
        />
        <span>{props.text}</span>
      </Link>
    </li>
  );
};

const MyAccountOtherOpts = () => {
  return (
    <Card h1_text="Opciones" h1_center={false}>
      <ul>
        <MyAccountOpt text="Donar" iconSrc={IconPaypal} toLink="#" />
        <MyAccountOpt
          text="Cerrar sesión"
          iconSrc={IconLogout}
          toLink="/login"
        />
        <MyAccountOpt
          text="Editar mi información"
          iconSrc={IconEditDetails}
          toLink="/login"
        />
        <MyAccountOpt
          text="Cambiar email"
          iconSrc={IconEditEmail}
          toLink="/login"
        />
        <MyAccountOpt
          text="Cambiar contraseña"
          iconSrc={IconShieldPass}
          toLink="/confirm-password"
        />
        <MyAccountOpt
          text="Eliminar cuenta"
          iconSrc={IconDelAccount}
          toLink="/PassDel"
        />
      </ul>
    </Card>
  );
};

// Main page
const MyAccount = () => {
  return (
    <>
      <MyAccountMyData />
      <MyAccountLists />
      <MyAccountDownloadsHistory />
      <MyAccountUploadABook />
      <MyAccountOtherOpts />
    </>
  );
};
export default MyAccount;
