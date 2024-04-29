import "./account.css";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {EMAIL, PASSWD, SEARCH} from "../../utils/placeholder.js";
import {Link} from "react-router-dom";
import {useState} from "react";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (user == "" || password == "") {
      setError(true);
      return;
    }
    setError(false);
    // setUser([user]);
  };

  return (
    <>
      <h1 className="account__title">Iniciar Sesion</h1>
      {/*TODO: En la logica interna del backend validar esto */}
      <form onSubmit={handleSubmit} method="post">
        <InputText
          type="text"
          holder={EMAIL}
          value={user}
          id="email"
          text="Email"
          onChange={e => setUser(e.target.value)}
        />
        <InputText
          type="password"
          holder={PASSWD}
          value={password}
          id="password"
          text="Contraseña"
          onChange={e => setPassword(e.target.value)}
        />

        <PrimaryBtnForm
          text="Iniciar Sesion"
          cssClasses="formCustomBtn purpleBtn"
        />
      </form>

      <Link tolink="/recovery-account" className="account__forgot-link">
        Olvidaste tu Contraseña?
      </Link>

      <PrimaryBtnLink
        tolink="/new-account"
        text="Crear Cuenta"
        cssClasses="formCustomBtn black1Btn"
      />
      {error && (
        <p style={{color: "var(--error)"}}>
          *Todos los campos son obligatorios
        </p>
      )}
    </>
  );
};
