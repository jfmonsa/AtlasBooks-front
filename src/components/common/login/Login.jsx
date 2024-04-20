import "./Login.css";
import { PrimaryBtn } from "../../primaryBtn/PrimaryBtn.jsx";
import { useState } from "react";
import { TxtArea } from "../../textArea/TextArea.jsx";

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
    <section className="login">
      <h1
        style={{
          fontSize: 32,
          textAlign: "center",
          fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        }}
      >
        Iniciar Sesion
      </h1>
      <form  id="login" onSubmit={handleSubmit}>
        <TxtArea
          type={"text"}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          typecss={"access"}
          text={"Email "}
        />
        <TxtArea
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          typecss={"access"}
          text={"Contraseña"}
        />
      </form>
      <PrimaryBtn text="Iniciar Sesion" type={"signin"} id="1" />
      <p>
        <a href="#">Olvidaste tu Contraseña?</a>
      </p>
      <PrimaryBtn text="Crear Cuenta" type={"signup"} id="1" />
      {error && (
        <p style={{ color: "red" }}>*Todos los campos son obligatorios</p>
      )}
    </section>
  );
}