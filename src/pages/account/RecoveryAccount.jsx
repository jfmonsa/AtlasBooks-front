import "./account.css";
import {EMAIL} from "../../utils/placeholder.js";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {useNavigate, Link} from "react-router-dom";
import {useState} from "react";

const RecoveryAccount = ({setUsuario}) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/send-email")
  };

  return (
    <>
      <h1 className="account__title">Recuperación de contraseña</h1>

      <p className="account__subtitle">
        Ingresa el email usado para crear tu cuenta
      </p>
      <form onSubmit={handleSubmit}>
        <InputText
          type={"email"}
          holder={EMAIL}
          value={user}
          onChange={e => setUser(e.target.value)}
          text={"Email "}
        />
          <PrimaryBtnForm
            text="Enviar"
            cssClasses="formCustomBtn purpleBtn"
            id="3"
          />
      </form>

      <Link to="/login" className="account__forgot-link">
        Volver al inicio de sesión
      </Link>

      {error && (
        <p style={{color: "var(--error)"}}>*Llenar el campo es obligatorios</p>
      )}
    </>
  );
};
export default RecoveryAccount;
