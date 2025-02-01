import "../styles/base-form.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseChangeEmail } from "@/app/contexts/ChangeEmailContext.jsx";

import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm.jsx";
import { InputText } from "@components/forms/InputText/InputText.jsx";
import { ErrorFormAccountMsg } from "@components/forms/ErrorFormAccountMsg/ErrorFormAccountMsg.jsx";

import { EMAIL } from "@utils/placeholder.js";
import { valEmail, valNoEmpty } from "@utils/validateFormFields.js";

export function ChangeEmailPage() {
  const [mail1, setMail1] = useState("");
  const [mail2, setMail2] = useState("");
  const [error, setError] = useState(null);
  const { createChangeEmail } = UseChangeEmail();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!valNoEmpty(mail1) || !valNoEmpty(mail2)) {
      setError("Todos los campos son obligatorios");
      return;
    } else if (mail1 === mail2) {
      setError("Verifique que los correos ingresadas sean diferentes");
      return;
    } else if (!valEmail(mail1) || !valEmail(mail2)) {
      setError(
        "Emails no validos, verifique que los correos ingresados sean validos",
      );
      return;
    }
    createChangeEmail({ currentEmail: mail1, newEmail: mail2 });
    navigate("/send-email");
  };

  return (
    <form className="form__likeLogin" onSubmit={handleSubmit}>
      <h1 className="account__title account__title--useSubtitle">
        Crear un nuevo correo
      </h1>

      <p className="account__subtitle">
        Ingresa tu correo actual y el nuevo correo que deseas tener.
      </p>
      <InputText
        type="text"
        holder={EMAIL}
        value={mail1}
        onChange={(e) => setMail1(e.target.value)}
        text="Correo actual"
      />

      <InputText
        type="text"
        holder={EMAIL}
        value={mail2}
        onChange={(e) => setMail2(e.target.value)}
        text="Correo nuevo"
      />

      <ErrorFormAccountMsg error={error} />
      <PrimaryBtnForm
        text="Enviar"
        cssClasses="formCustomBtn purpleBtn"
        id="3"
      />
    </form>
  );
}
