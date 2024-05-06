import "./account.css";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {PASSWD} from "../../utils/placeholder.js";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const ChangePass = () => {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (pass1 == "") {
      setError(true);
    }
    else{
      setError(false);

      setPass1([pass1]);
    }
    navigate("/my-account");
  };

  return (
    <>
      <h1 className="account__title account__title--useSubtitle">
        Crear una nueva contraseña
      </h1>
      <p className="account__subtitle">
        Ingresa una nueva contraseña para su cuenta
      </p>

      <form onSubmit={handleSubmit}>
        <InputText
          type={"password"}
          holder={PASSWD}
          onChange={e => setPass1(e.target.value)}
          typecss={"access"}
          text={"Nueva contraseña"}
        />

        <InputText
          type={"password"}
          holder={PASSWD}
          onChange={e => setPass2(e.target.value)}
          typecss={"access"}
          text={"Repite tu nueva contraseña"}
        />

        <PrimaryBtnForm
            text="Enviar"
            cssClasses="formCustomBtn purpleBtn"
            id="3"
        />       
      </form>

      {error && (
        <p style={{color: "var(--error)"}}>*Llenar el campo es obligatorios</p>
      )}
    </>
  );
};

export default ChangePass;
