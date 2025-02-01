import "../styles/base-form.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm.jsx";
import { InputText } from "@components/forms/InputText/InputText.jsx";
import { ErrorFormAccountMsg } from "@components/forms/ErrorFormAccountMsg/ErrorFormAccountMsg.jsx";

import { EMAIL } from "@utils/placeholder.js";
import { valEmail, valNoEmpty } from "@utils/validateFormFields.js";
import { verifyEmail } from "../services/apiRecoveyAccount.js";

export function RecoveryAccountPage() {
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valNoEmpty(userEmail)) {
      setError("Todos los campos son obligatorios");
      return;
    } else if (!valEmail(userEmail)) {
      setError("Formato de Email no valido");
      return;
    }
    //request al api
    verifyEmail({ email: userEmail });
    navigate("/send-email");
  };

  return (
    <>
      <h1 className="account__title">Recuperación de contraseña</h1>
      <p className="account__subtitle">
        Ingresa el email usado para crear tu cuenta
      </p>
      <form onSubmit={handleSubmit}>
        <InputText
          text="Email"
          type="email"
          holder={EMAIL}
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn purpleBtn" />
      </form>

      <Link to="/login" className="account__forgot-link">
        Volver al inicio de sesión
      </Link>
      <ErrorFormAccountMsg error={error} />
    </>
  );
}
