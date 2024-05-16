import "./account.css";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {useNavigate, Link} from "react-router-dom";
import {useState} from "react";
import {EMAIL} from "../../utils/placeholder.js";
import ErrorFormAccountMsg from "../../components/errorFormAccountMsg/ErrorFormAccountMsg.jsx";
import {valEmail, valNoEmpty} from "../../utils/validateFormFields.js";

const RecoveryAccount = ({setUsuario}) => {
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!valNoEmpty(userEmail)) {
      setError("Todos los campos son obligatorios");
      return;
    } else if (!valEmail(userEmail)) {
      setError("Formato de Email no valido");
      return;
    }
    //request al api

    navigate("/send-email");
  };

  return (
    <>
      <h1 className="account__title">Recuperación de contraseña</h1>
      <p className="account__subtitle">
        Ingresa el email usado para crear tu cuenta
      </p>
      <form onSubmit={handleSubmit}>
        <InputText
          text="Email"
          type="email"
          holder={EMAIL}
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn purpleBtn" />
      </form>

      <Link to="/login" className="account__forgot-link">
        Volver al inicio de sesión
      </Link>
      <ErrorFormAccountMsg error={error} />
    </>
  );
};
export default RecoveryAccount;
