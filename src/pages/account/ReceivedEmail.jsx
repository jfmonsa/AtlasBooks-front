import "./account.css";
import icon_mail from "../../assets/icons/icon-mail.svg";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {GetChangeEmailToken} from "../../api/apiChangeEmail.js";
import {Link, useParams} from "react-router-dom";
import { verifyTokenEmail} from "../../api/auth.js";

const ReceivedEmail = () => {

  const {token} = useParams();
  
  const  OnClick = async() => {
    
    const user = await verifyTokenEmail({token});
    GetChangeEmailToken({id: user.data.user.id, newEmail: user.data.user.newEmail});
  }

  return (
    <>
      <h1 className="account__title">Cambio de correo</h1>

      <p className="account__subtitle">
        Por favor da click en el boton para confirmar el cambio de correo.
      </p>

      <img src={icon_mail} alt="" className="icon_mail" />
      <Link to="/my-account">
        <PrimaryBtnForm onClick={OnClick}
          text="Confirmar"
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
};
export default ReceivedEmail;
