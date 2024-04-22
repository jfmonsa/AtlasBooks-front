import "./account.css";
import {EMAIL} from "../../utils/placeholder.js";
import {PrimaryBtn} from "../../components/primaryBtn/PrimaryBtn.jsx";
import {InputText} from "../../components/inputText/InputText.jsx";
import {useState} from "react";

const recoveryAccount = ({setUsuario}) => {
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

        <PrimaryBtn text="Enviar" type={"signin"} id="3" />
      </form>

      <a className="account__forgot-link" href="#">
        Volver al inicio de sesión
      </a>

      {error && (
        <p style={{color: "var(--error)"}}>*Llenar el campo es obligatorios</p>
      )}
    </>
  );
};

export default recoveryAccount;
