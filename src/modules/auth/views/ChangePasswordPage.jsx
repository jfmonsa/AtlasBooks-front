import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../base-form.css";
import PrimaryBtnForm from "@components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import InputText from "@components/inputText/InputText.jsx";
import { UseChangePass } from "@contexts/ChangePassContext.jsx";
import { PASSWD } from "@utils/placeholder.js";
import { valNoEmpty, valPassword } from "@utils/validateFormFields.js";
import ErrorFormAccountMsg from "@components/errorFormAccountMsg/ErrorFormAccountMsg.jsx";

export function ChangePasswordPage() {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [pass3, setPass3] = useState("");
  const [error, setError] = useState(null);
  const { createChangePass } = UseChangePass();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!valNoEmpty(pass1) || !valNoEmpty(pass2) || !valNoEmpty(pass3)) {
      setError("Todos los campos son obligatorios");
      return;
    } else if (pass1 == pass2) {
      setError("La nueva contraseña no puede ser igual a la actual");
      return;
    } else if (pass2 != pass3) {
      setError("Verifique que ambas contraseñas ingresadas sean iguales");
      return;
    } else if (!valPassword(pass2) || !valPassword(pass3)) {
      setError(
        "Verifique que la clave tenga: minimo 8 caracteres, máximo 20, una mayuscula, un numero y un caracter especial (@#$%^&+=).",
      );
      return;
    }
    //enviar datos post al api
    createChangePass({
      currentPassword: pass1,
      newPassword: pass2,
      confirmPassword: pass3,
    });
    //navegar hacia la pagina indicada
    navigate("/my-account");
  };

  return (
    <form className="form__likeLogin" onSubmit={handleSubmit}>
      <h1 className="account__title account__title--useSubtitle">
        Crear una nueva contraseña
      </h1>

      <p className="account__subtitle">
        Ingresa tu contraseña actual para confirmar tu identidad
      </p>

      <InputText
        type="password"
        holder={PASSWD}
        value={pass1}
        onChange={(e) => setPass1(e.target.value)}
        text="Contraseña actual"
      />

      <p className="account__subtitle">
        Ingresa una nueva contraseña para su cuenta
      </p>
      <InputText
        type="password"
        holder={PASSWD}
        value={pass2}
        onChange={(e) => setPass2(e.target.value)}
        text="Nueva contraseña"
      />

      <InputText
        type="password"
        holder={PASSWD}
        value={pass3}
        onChange={(e) => setPass3(e.target.value)}
        text="Repite tu nueva contraseña"
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
