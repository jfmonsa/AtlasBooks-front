import "../styles/base-form.css";

import { useState, useEffect } from "react";
import { useAuth } from "@hooks/useAuth.js";
import { Link, useNavigate } from "react-router-dom";

import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm.jsx";
import { PrimaryBtnLink } from "@components/PrimaryBtn/PrimaryBtnLink.jsx";
import { InputText } from "@components/forms/InputText/InputText.jsx";
import { ErrorFormAccountMsg } from "@components/forms/ErrorFormAccountMsg/ErrorFormAccountMsg.jsx";

import { EMAIL, PASSWD, NICK } from "@utils/placeholder.js";
import {
  valEmail,
  valNickname,
  valNoEmpty,
} from "@utils/validateFormFields.js";

export function LoginPage() {
  const [userNickname, setUserNickname] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const { login, user, errors: loginErrors } = useAuth();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  //El error es una string, cuando no hay error es null,
  //cuando el error existe se settea a una string que se va mostrar
  //como mensaje de error al usuario
  const [error, setError] = useState(null);

  //Validations and post request to api
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valNoEmpty(userNickname) || !valNoEmpty(userPassword)) {
      setError("Todos los campos son obligatorios");
      return;
    }
    //validar que sea un email o nickname validos
    //nota: puede loggearse con nickname o email
    if (userNickname.includes("@")) {
      if (!valEmail(userNickname)) {
        setError("Email o nickname no valido");
        return;
      }
    } else {
      if (!valNickname(userNickname)) {
        setError("Email o nickname no valido");
        return;
      }
    }
    setError(null);
    login({
      userNicknameOrEmail: userNickname,
      userPassword: userPassword,
    });
  };

  return (
    <div>
      <h1 className="account__title">Iniciar Sesion</h1>
      <form onSubmit={handleSubmit} method="post">
        <InputText
          type="text"
          holder={EMAIL + ", " + NICK}
          value={userNickname}
          id="email"
          text="Email o Nickname"
          onChange={(e) => setUserNickname(e.target.value)}
        />
        <InputText
          type="password"
          holder={PASSWD}
          value={userPassword}
          id="password"
          text="Contraseña"
          onChange={(e) => setUserPassword(e.target.value)}
        />

        <ErrorFormAccountMsg error={error} index={0} />
        {loginErrors.map((error, index) => (
          <ErrorFormAccountMsg error={error} key={index} />
        ))}
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
    </div>
  );
}
