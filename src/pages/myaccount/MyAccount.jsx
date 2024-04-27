import "./myaccount.css";
import BtnIconAdd from "../../assets/icons/btnIcon-add.svg";
import PrimaryBtnLink from "../../components/primaryBtn/PrimaryBtnLink.jsx";
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

const MyAccountUploadABook = () => {
  return (
    <Card h1_text="Subir un libro" h1_center={false}>
      <p>
        Contribuye con la comunidad añadiendo nuevos libros, click al boton para
        hacerlo
      </p>
      {/* TODO: el link para este */}
      <PrimaryBtnLink tolink="" cssClasses="btn-add">
        <img src={BtnIconAdd} alt="Add a book icon for button" />
      </PrimaryBtnLink>
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
      <MyAccountUploadABook />
      <MyAccountOtherOpts />
    </>
  );
};
export default MyAccount;
