import "./account.css";
import icon_mail from "../../assets/icons/icon-mail.svg";
import {PrimaryBtn} from "../../components/primaryBtn/PrimaryBtn.jsx";

const SendEmail = () => {
  return (
    <>
      <h1 className="account__title">Un correo ha sido enviado</h1>

      <p className="account__subtitle">
        Por favor revisa tu correo para ver las instrucciones sobre como
        recuperar tu contraseña
      </p>

      <img src={icon_mail} alt="" className="icon_mail" />

      <PrimaryBtn text="Iniciar Sesion" type={"signin"} id="4" />

      <p className="text-link">
        No recibió el email?
        <a className="forgot-link" href="#">
          Volver a enviar
        </a>
      </p>
    </>
  );
};

export default SendEmail;
