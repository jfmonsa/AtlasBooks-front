import "./account.css"
import {PASSWD} from "../../utils/placeholder.js"
import { PrimaryBtn } from "../../components/primaryBtn/PrimaryBtn.jsx";
import { InputText } from "../../components/inputText/InputText.jsx";
import { useState } from "react";

const ChangePass = ({setUsuario}) => {

  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");

  /*
  TODO:

  Esta función que la usamos repetidamente en varios archivos la podríamos
  meterla en una carpeta llamada utils que contenga funciones repetidas a lo
  largo de la app
  */
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
    <>
      <h1 className="account__title account__title--useSubtitle">Crear una nueva contraseña</h1>
      <p className="account__subtitle">Ingresa una nueva contraseña para su cuenta</p>

      <form onSubmit={handleSubmit}>
        <InputText
          type={"password"}
          holder= {PASSWD}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          typecss={"access"}
          text={"Nueva contraseña"}
        />

        <InputText
          type={"password"}
          holder= {PASSWD}
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
  </>
  )
}

export default ChangePass