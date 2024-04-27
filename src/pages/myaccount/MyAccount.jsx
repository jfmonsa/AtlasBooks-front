import "./myaccount.css";
import BtnIconAdd from "../../assets/icons/btnIcon-add.svg";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";
import BtnAdd from "../../components/buttons/BtnAdd/BtnAdd.jsx";
import Card from "../../components/card/Card.jsx";

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

const MyAccountListCard = () => {
  return (
    <div className="listCard">
      <div></div>
      <div className="listCard__icons"></div>
    </div>
  );
};

const MyAccountLits = () => {
  return (
    <Card h1_text="Mis listas">
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
        <li>Donar </li>
        <li>Cerrar sesión</li>
        <li>Cambiar email</li>
        <li>Cambiar contraseña</li>
        <li>Eliminar cuenta</li>
      </ul>
    </Card>
  );
};

// Main page
const MyAccount = () => {
  return (
    <>
      <MyAccountMyData />
      <MyAccountLits />
      <MyAccountDownloadsHistory />
      <MyAccountUploadABook />
      <MyAccountOtherOpts />
    </>
  );
};
export default MyAccount;
