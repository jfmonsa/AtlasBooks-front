import "./account.css";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {PASSWD} from "../../utils/placeholder.js";
import {Link} from "react-router-dom";
import {useState} from "react";

const ChangePass = ({setUsuario}) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (user == "") {
      setError(true);
      return;
    }
    setError(false);

    setUsuario([user]);
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
          value={user}
          onChange={e => setUser(e.target.value)}
          typecss={"access"}
          text={"Nueva contraseña"}
        />

        <InputText
          type={"password"}
          holder={PASSWD}
          onChange={e => setUser(e.target.value)}
          typecss={"access"}
          text={"Repite tu nueva contraseña"}
        />
        {/* <Link to="/my-account"> */}
          <PrimaryBtnForm
            text="Enviar"
            cssClasses="formCustomBtn purpleBtn"
            id="3"
          />
        {/* </Link> */}
      </form>

      {error && (
        <p style={{color: "var(--error)"}}>*Llenar el campo es obligatorios</p>
      )}
    </>
  );
};

export default ChangePass;
