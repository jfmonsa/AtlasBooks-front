import "./Account.css"
import icon_mail from "../../assets/icons/icon-mail.svg"
import { PrimaryBtn } from "../../components/primaryBtn/PrimaryBtn.jsx";



const SendEmail = () => {

  return (
    <>

      <h1 className="account__title">Un correo ha sido enviado</h1>

      <p className="text" >Por favor revisa tu correo para ver las instrucciones sobre como recuperar tu contraseña</p>

      <img src={icon_mail} alt="" className="icon_mail" />

      <PrimaryBtn text="Iniciar Sesion" type={"signin"} id="4" />

      <p className ="text-link" >
        <p className="text">No recibió el email?</p>
        <a className="forgot-link" href="#">Volver a enviar</a>
      </p>

    </>
  )
}

export default SendEmail