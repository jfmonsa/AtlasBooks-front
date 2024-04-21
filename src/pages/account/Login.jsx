import "./Account.css";
import { PrimaryBtn } from "../../components/primaryBtn/PrimaryBtn.jsx";
import { InputText } from "../../components/inputText/InputText.jsx";
import { useState } from "react";

export function Login({ setUsuario }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user == "" || password == "") {
      setError(true);
      return;
    }
    setError(false);

    setUsuario([user]);
  };

  return (
    <section className="accountContainer">
      <h1 className="account__title">Iniciar Sesion</h1>
      <form  id="accountContainer" onSubmit={handleSubmit}>
        <InputText
          type={"text"}
          holder={"usuario@mail.com"}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          typecss={"access"}
          text={"Email "}
        />
        <InputText
          type={"password"}
          holder={"********"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          typecss={"access"}
          text={"Contraseña"}
        />

        <PrimaryBtn text="Iniciar Sesion" type={"signin"} id="1" />
      </form>
      
      <p>
        <a className="forgot-link" href="#">Olvidaste tu Contraseña?</a>
      </p>
      <PrimaryBtn text="Crear Cuenta" type={"signup"} id="2" />
      {error && (
        <p style={{ color: "var(--error)" }}>*Todos los campos son obligatorios</p>
      )}
    </section>
  );
}
