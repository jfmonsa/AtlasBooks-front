import "../base-form.css";
import icon_mail from "@assets/icons/icon-mail.svg";
import PrimaryBtnForm from "@components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import { Link } from "react-router-dom";

export function ReceivedEmailRecoveryPassword() {
  return (
    <>
      <h1 className="account__title">Un correo ha sido enviado</h1>

      <p className="account__subtitle">
        Por favor revisa tu correo para ver las instrucciones sobre como
        recuperar tu contraseña.
      </p>

      <img src={icon_mail} alt="" className="icon_mail" />
      <Link to="/login">
        <PrimaryBtnForm
          text="Iniciar Sesion"
          cssClasses="formCustomBtn purpleBtn"
          id="4"
        />
      </Link>
      <p className="text-link">
        No recibió el email?
        <Link to="/send-email" className="forgot-link">
          Volver a enviar
        </Link>
      </p>
    </>
  );
}
