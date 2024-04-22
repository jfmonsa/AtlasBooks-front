import "./Account.css"
import { PrimaryBtn } from "../../components/primaryBtn/PrimaryBtn.jsx";
import { InputText } from "../../components/inputText/InputText.jsx";
import { useState } from "react";

const recoveryAccount = ({setUsuario}) => {

  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user == "" ) {
      setError(true);
      return;
    }
    setError(false);

    setUsuario([user]);
  };

  return (
    <section className="accountContainer">

      <h1 className="account__title">Crear una nueva contraseña</h1>

      <p className="text" >Ingresa una nueva contraseña para su cuenta</p>

      <form  id="accountContainer" onSubmit={handleSubmit}>
        <InputText
          type={"password"}
          holder= {'*******'}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          typecss={"access"}
          text={"Nueva contraseña"}
        />

        <InputText
          type={"password"}
          holder= {'*******'}
          value={password}
          onChange={(e) => setUser(e.target.value)}
          typecss={"access"}
          text={"Repite tu nueva contraseña"}
        />

        <PrimaryBtn text="Enviar" type={"signin"} id="3" />
      </form>

      {error && (
        <p style={{ color: "var(--error)" }}>*Llenar el campo es obligatorios</p>
      )}

    </section>
  )
}

export default recoveryAccount