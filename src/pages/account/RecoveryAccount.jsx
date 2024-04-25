import "./account.css";
import {EMAIL} from "../../utils/placeholder.js";
import PrimaryBtnForm from "../../components/primaryBtn/PrimaryBtnForm.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";

const RecoveryAccount = ({setUsuario}) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (user == "") {
      setError(true);
      return;
    }
    setError(false);

    setUsuario([user]);
  };

  return (
    <>
      <h1 className="account__title">Recuperación de contraseña</h1>

      <p className="account__subtitle">
        Ingresa el email usado para crear tu cuenta
      </p>
      <form onSubmit={handleSubmit}>
        <InputText
          type={"text"}
          holder={EMAIL}
          value={user}
          onChange={e => setUser(e.target.value)}
          typecss={"access"}
          text={"Email "}
        />

        <PrimaryBtnForm text="Enviar" type={"purpleBtn"} id="3" />
      </form>

      <Link tolink="/send-email" className="account__forgot-link">
        Volver al inicio de sesión
      </Link>

      {error && (
        <p style={{color: "var(--error)"}}>*Llenar el campo es obligatorios</p>
      )}
    </>
  );
};
export default RecoveryAccount;
