import "../styles/base-form.css";

import { useEffect, useState } from "react";
import { useAuth } from "@hooks/useAuth.js";
import { useNavigate } from "react-router-dom";

import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm.jsx";
import { InputText } from "@components/forms/InputText/InputText.jsx";
import { ErrorFormAccountMsg } from "@components/forms/ErrorFormAccountMsg/ErrorFormAccountMsg.jsx";
import { PrimaryBtnLink } from "@components/PrimaryBtn/PrimaryBtnLink.jsx";

import { NAME, NICK, EMAIL, PASSWD } from "@utils/placeholder.js";
import {
  valEmail,
  valNickname,
  valNoEmpty,
  valPassword,
} from "@utils/validateFormFields.js";

export function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [userNick, setUserNick] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass1, setUserPass1] = useState("");
  const [userPass2, setUserPass2] = useState("");
  const [countryCode, setCountryCode] = useState(null);

  const navigate = useNavigate();
  const { signup, user, errors: RegisterErrors } = useAuth();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setCountryCode(data.country_code);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountry();
  }, []);

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  //validations and api request
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !valNoEmpty(userName) ||
      !valNoEmpty(userNick) ||
      !valNoEmpty(userEmail) ||
      !valNoEmpty(userPass1) ||
      !valNoEmpty(userPass2)
    ) {
      setError("Todos los campos son obligatorios");
      return;
    } else if (!valNickname(userNick)) {
      setError("No se permiten espacios en el nickname");
      return;
    } else if (!valEmail(userEmail)) {
      setError("El email ingresado no es valido");
      return;
    } else if (!valPassword(userPass1) || !valPassword(userPass2)) {
      setError(
        "Verifique que la clave tenga: minimo 8 caracteres, máximo 20, una mayuscula, un numero y un caracter especial (@#$%^&+=).",
      );
      return;
    } else if (userPass1 !== userPass2) {
      setError("Verifique que ambas contraseñas ingresadas sean iguales");
      return;
    }
    setError(null);

    signup({
      fullName: userName,
      nickname: userNick,
      email: userEmail,
      password: userPass1,
      country: countryCode,
    });
  };

  return (
    <>
      <div>
        <form className="form__likeLogin" onSubmit={handleSubmit}>
          <h1 className="account__title">Crear una cuenta nueva</h1>
          <InputText
            text="Nombre"
            holder={NAME}
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputText
            text="Nickname (Nombre de usuario)"
            holder={NICK}
            type="text"
            value={userNick}
            onChange={(e) => setUserNick(e.target.value)}
          />
          <InputText
            text="Email"
            holder={EMAIL}
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <InputText
            text="Contraseña"
            holder={PASSWD}
            type="password"
            value={userPass1}
            onChange={(e) => setUserPass1(e.target.value)}
          />
          <InputText
            text="Confirmar Contraseña"
            holder={PASSWD}
            type="password"
            value={userPass2}
            onChange={(e) => setUserPass2(e.target.value)}
          />
          <ErrorFormAccountMsg error={error} />
          {RegisterErrors.map((error, index) => (
            <ErrorFormAccountMsg error={error} key={index} />
          ))}

          <PrimaryBtnForm
            text="Crear cuenta"
            cssClasses="formCustomBtn purpleBtn"
            id="1"
          />
        </form>
        <PrimaryBtnLink
          tolink="/login"
          text="Iniciar Sesion"
          cssClasses="formCustomBtn black1Btn"
        />
      </div>
    </>
  );
}
