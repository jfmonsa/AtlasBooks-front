import "./myaccount.css";
import IconPaypal from "../../assets/icons/icon-paypal.svg";
import IconLogout from "../../assets/icons/menu-logout.svg";
import IconShieldPass from "../../assets/icons/icon-shieldpass.svg";
import IconDelAccount from "../../assets/icons/icon-delaccount.svg";
import PrivateListIcon from "./../../assets/icons/icon-privatelist.svg";
import PublicListIcon from "./../../assets/icons/icon-publiclist.svg";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";
import BtnAdd from "../../components/buttons/BtnAdd/BtnAdd.jsx";
import Card from "../../components/card/Card.jsx";
import {Link} from "react-router-dom";

// Aux functions
const MyAccountMyData = () => {
  return (
    <Card h1_text="Mis datos" h1_center={false}>
      <ul>
        <li className="card-myData">
          <span className="card-myData__left">Nombre</span>
          <span className="card-myData__right">Pepito Perez</span>
        </li>
        <li className="card-myData">
          <span className="card-myData__left">Email</span>
          <span className="card-myData__right">pepito@p.com</span>
        </li>
        <li className="card-myData">
          <span className="card-myData__left">País</span>
          <span className="card-myData__right">Palestina</span>
        </li>
        <li className="card-myData">
          <span className="card-myData__left">Fecha de Registro</span>
          <span className="card-myData__right">11/09/2001</span>
        </li>
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
    <Link to={props.path} className="listCard">
      <span>
        <span>{props.listName}</span>
        <img className="listCard-icon" src={iconpath} alt={alticon} />
      </span>
      <span>{props.desc}</span>
      <span>{props.num + " Libros"}</span>
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

const MyAccountOtherOpts = () => {
  return (
    <Card h1_text="Otras Opciones" h1_center={false}>
      <ul>
        <li>
          <Link to="#" className="options navHover">
            <img
              src={IconPaypal}
              alt="icono opción donar"
              className="options__icon"
            />
            <span>Donar</span>
          </Link>
        </li>
        <li>
          <Link to="/Login" className="options navHover">
            <img
              src={IconLogout}
              alt="icono de cerrar sesión"
              className="options__icon"
            />
            <span>Cerrar sesión</span>
          </Link>
        </li>
        <li>
          <Link to="/confirm-password" className="options navHover">
            <img
              src={IconShieldPass}
              alt="icono de inicio de sesión"
              className="options__icon"
            />
            <span>Cambiar contraseña</span>
          </Link>
        </li>
        <li>
          <Link to="/confirm-password" className="options navHover">
            <img
              src={IconDelAccount}
              alt="icono de eliminar cuenta"
              className="options__icon"
            />
            <span>Eliminar cuenta</span>
          </Link>
        </li>
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
