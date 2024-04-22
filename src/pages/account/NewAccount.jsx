import "./Account.css"
import { PrimaryBtn } from "../../components/primaryBtn/PrimaryBtn.jsx";
import { InputText } from "../../components/inputText/InputText.jsx";
import { useState } from "react";

function NewAccount({ setUsuario }) {
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
    }





return (
    <section className="accountContainer">
    <h1 className="account__title">Crear una cuenta nueva</h1>
    <form  id="accountContainer" onSubmit={handleSubmit}>
      <InputText
        type={"text"}
        holder={"pepito perez"}
        
        typecss={"access"}
        text={"Nombre "}
      />
      <InputText
        type={"text"}
        holder={"email"}
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

    <PrimaryBtn text="Crear cuenta" type={"signin"} id="1" /> 
    </form>
    
    {/* <PrimaryBtn text="Crear Cuenta" type={"signup"} id="2" /> */}
    {error && (
      <p style={{ color: "var(--error)" }}>*Todos los campos son obligatorios</p>
    )}
  </section>

);
}

export default NewAccount;