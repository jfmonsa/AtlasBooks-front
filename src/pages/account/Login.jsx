import "./account.css";
import Searcher from "../../components/searcher/Searcher.jsx";
import {EMAIL, PASSWD, SEARCH} from "../../utils/placeholder.js";
import PrimaryBtn from "../../components/primaryBtn/PrimaryBtn.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {useState} from "react";
import RateStars from "../../components/rate-stars/RateStars.jsx";

const Login = ({setUsuario}) => {
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

    setUsuario([user]);
  };

  return (
    <>
      <h1 className="account__title">Iniciar Sesion</h1>
      <form onSubmit={handleSubmit}>
        <InputText
          type={"text"}
          holder={EMAIL}
          value={user}
          onChange={e => setUser(e.target.value)}
          typecss={"access"}
          text={"Email"}
        />
        <InputText
          type={"password"}
          holder={PASSWD}
          value={password}
          onChange={e => setPassword(e.target.value)}
          typecss={"access"}
          text={"Contraseña"}
        />

        <PrimaryBtn text="Iniciar Sesion" type={"signin"} id="1" />
      </form>

      <a className="account__forgot-link" href="#">
        Olvidaste tu Contraseña?
      </a>

      <PrimaryBtn text="Crear Cuenta" type={"signup"} id="2" />
      {error && (
        <p style={{color: "var(--error)"}}>
          *Todos los campos son obligatorios
        </p>
      )}
    </>
  );
};
export default Login;
