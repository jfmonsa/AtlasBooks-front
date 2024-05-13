import "./account.css";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {EMAIL, PASSWD, NICK} from "../../utils/placeholder.js";
import {Link} from "react-router-dom";
import {useState} from "react";
import {
  valEmail,
  valNickname,
  valNoEmpty,
} from "../../utils/validateFormFields.js";
import ErrorFormAccountMsg from "./ErrorFormAccountMsg.jsx";

export const Login = () => {
  const [userNickname, setUserNickname] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //El error es una string, cuando no hay error es null,
  //cuando el error existe se settea a una string que se va mostrar
  //como mensaje de error al usuario
  const [error, setError] = useState(null);

  //Validations and post request to api
  const handleSubmit = e => {
    e.preventDefault();
    if (!valNoEmpty(userNickname) || !valNoEmpty(userPassword)) {
      setError("Todos los campos son obligatorios");
      return;
    }
    //validar que sea un email o nickname validos
    //nota: puede loggearse con nickname o email
    if (!valNickname(userNickname) || !valEmail(userNickname)) {
      setError("Email o nickname no valido");
      return;
    }
    setError(null);
    //hacer validaciones en el backend para verificar que el usuario
    //exista
  };

  return (
    <>
      <h1 className="account__title">Iniciar Sesion</h1>
      <form onSubmit={handleSubmit} method="post">
        <InputText
          type="text"
          holder={EMAIL + ", " + NICK}
          value={userNickname}
          id="email"
          text="Email o Nickname"
          onChange={e => setUserNickname(e.target.value)}
        />
        <InputText
          type="password"
          holder={PASSWD}
          value={userPassword}
          id="password"
          text="Contraseña"
          onChange={e => setUserPassword(e.target.value)}
        />

        <ErrorFormAccountMsg error={error} />
        <PrimaryBtnForm
          text="Iniciar Sesion"
          cssClasses="formCustomBtn purpleBtn"
        />
      </form>

      <Link to="/recovery-account" className="account__forgot-link">
        Olvidaste tu Contraseña?
      </Link>

      <PrimaryBtnLink
        tolink="/new-account"
        text="Crear Cuenta"
        cssClasses="formCustomBtn black1Btn"
      />
    </>
  );
};
