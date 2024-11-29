import "./account.css";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import { useNavigate } from "react-router-dom";
import { PASSWD } from "../../utils/placeholder.js";
import { useState } from "react";
import { valNoEmpty, valPassword } from "../../utils/validateFormFields.js";
import ErrorFormAccountMsg from "../../components/errorFormAccountMsg/ErrorFormAccountMsg.jsx";
import { createRecoveryAccount } from "../../api/apiRecoveyAccount.js";
import { useParams } from "react-router-dom";

const NewPassword = () => {
  const [pass2, setPass2] = useState("");
  const [pass3, setPass3] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!valNoEmpty(pass2) || !valNoEmpty(pass3)) {
      setError("Todos los campos son obligatorios");
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
    createRecoveryAccount({ newPassword: pass2, token: token });

    //navegar hacia la pagina indicada
    navigate("/login");
  };

  return (
    <form className="form__likeLogin" onSubmit={handleSubmit}>
      <h1 className="account__title account__title--useSubtitle">
        Crear una nueva contraseña
      </h1>

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
};

export default NewPassword;
