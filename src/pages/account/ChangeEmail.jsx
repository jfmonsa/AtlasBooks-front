import "./account.css";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {UseChangeEmail} from "../../contexts/ChangeEmailContext.jsx";
import {useNavigate} from "react-router-dom";
import {EMAIL} from "../../utils/placeholder.js";
import {useState} from "react";
import {valEmail, valNoEmpty} from "../../utils/validateFormFields.js";
import ErrorFormAccountMsg from "../../components/errorFormAccountMsg/ErrorFormAccountMsg.jsx";

const ChangeEmail = () => {
  const [mail1, setMail1] = useState("");
  const [mail2, setMail2] = useState("");
  const [error, setError] = useState(null);
  const {createChangeEmail} = UseChangeEmail();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (!valNoEmpty(mail1) || !valNoEmpty(mail2)) { 
      setError("Todos los campos son obligatorios");
      return;
    }else if (mail1 === mail2) {
      setError("Verifique que los correos ingresadas sean diferentes");
      return;
    } else if (!valEmail(mail1) || !valEmail(mail2)) {
      setError(
        "Emails no validos, verifique que los correos ingresados sean validos",
      );
      return;
    }
    //enviar datos post al api
    createChangeEmail({currentEmail: mail1, newEmail: mail2});
    //navegar hacia la pagina indicada
    navigate("/send-email");
  };

  return (
    <form className="form__likeLogin" onSubmit={handleSubmit}>
      <h1 className="account__title account__title--useSubtitle">
        Crear un nuevo correo
      </h1>

      <p className="account__subtitle">
        Ingresa tu correo actual y el nuevo correo que deseas tener.
      </p>
      <InputText
        type="text"
        holder={EMAIL}
        value={mail1}
        onChange={e => setMail1(e.target.value)}
        text="Correo actual"
      />

      <InputText
        type="text"
        holder={EMAIL}
        value={mail2}
        onChange={e => setMail2(e.target.value)}
        text="Correo nuevo"
      />

      <ErrorFormAccountMsg error={error} />
      <PrimaryBtnForm
        text="Enviar"
        cssClasses="formCustomBtn purpleBtn"
        id="3"
      />
    </form>
  );
};

export default ChangeEmail;
