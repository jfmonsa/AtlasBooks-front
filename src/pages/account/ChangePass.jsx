import "./account.css";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import { useAccount } from "../../contexts/AccountContext.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {PASSWD} from "../../utils/placeholder.js";
import {useEffect, useState} from "react";
import {valNoEmpty, valPassword} from "../../utils/validateFormFields.js";
import ErrorFormAccountMsg from "./ErrorFormAccountMsg.jsx";

const ChangePass = () => {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState(null);
  const {createAccount, getChangePass} = useAccount();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if(params){
      getChangePass(params.currentPassword, params.newPassword, params.confirmPassword);
    }
  }, []); 

  const handleSubmit = e => {
    e.preventDefault();

    if (!valNoEmpty(pass1) || !valNoEmpty(pass2)) { 
      setError("Todos los campos son obligatorios");
      return;
    } else if (pass1 != pass2) {
      setError("Verifique que ambsa contraseñas ingresadas sean iguales");
      return;
    } else if (!valPassword(pass1) || !valPassword(pass2)) {
      setError(
        "Verifique que ambas claves tengan: minimo 8 caracteres, una mayuscula, un numero, un caracter especial",
      );
      return;
    }
    //enviar datos post al api

    //navegar hacia la pagina indicada
    navigate("/my-account");
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
        value={pass1}
        onChange={e => setPass1(e.target.value)}
        text="Nueva contraseña"
      />

      <InputText
        type="password"
        holder={PASSWD}
        value={pass2}
        onChange={e => setPass2(e.target.value)}
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

export default ChangePass;
