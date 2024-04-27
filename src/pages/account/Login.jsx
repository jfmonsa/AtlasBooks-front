import "./account.css";
import {EMAIL, PASSWD, SEARCH} from "../../utils/placeholder.js";
import PrimaryBtnForm from "../../components/primaryBtn/PrimaryBtnForm.jsx";
import PrimaryBtnLink from "../../components/primaryBtn/PrimaryBtnLink.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import RateStars from "../../components/rate-stars/RateStars.jsx";
import Book from "../../components/book/Book.jsx";
import image1 from "../../assets/img/image1.png"
import Recommended from "../../components/recommended/Recommended.jsx";

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
    <Recommended/>
      
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

        <PrimaryBtnForm text="Iniciar Sesion" type={"purpleBtn"} id="1" />
      </form>

      <Link tolink="/recovery-account" className="account__forgot-link">
        Olvidaste tu Contraseña?
      </Link>

      <PrimaryBtnLink
        tolink="/new-account"
        text="Crear Cuenta"
        type={"black1Btn"}
      />
      {error && (
        <p style={{color: "var(--error)"}}>
          *Todos los campos son obligatorios
        </p>
      )}
    </>
  );
};
export default Login;
