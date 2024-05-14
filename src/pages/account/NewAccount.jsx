import "./account.css";
import {NAME, NICK, EMAIL, PASSWD} from "../../utils/placeholder.js";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {useState} from "react";
import ErrorFormAccountMsg from "../../components/errorFormAccountMsg/ErrorFormAccountMsg.jsx";
import {
  valEmail,
  valNickname,
  valNoEmpty,
  valPassword,
} from "../../utils/validateFormFields.js";

const NewAccount = ({setUsuario}) => {
  const [userName, setUserName] = useState("");
  const [userNick, setUserNick] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass1, setUserPass1] = useState("");
  const [userPass2, setUserPass2] = useState("");

  const [error, setError] = useState(null);

  //validations and api request
  const handleSubmit = e => {
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
    }
    //val nickname
    else if (!valNickname(userNick)) {
      setError("No se permiten espacios en el nickname");
      return;
    }
    //val Email
    else if (!valEmail(userEmail)) {
      setError("El email ingresado no es valido");
      return;
    }
    //val pass
    else if (!valPassword(userPass1) || !valPassword(userPass2)) {
      setError(
        "Verifique que ambas claves tengan: minimo 8 caracteres, una mayuscula, un numero, un caracter especial",
      );
      return;
    } else if (userPass1 != userPass2) {
      setError("Verifique que ambsa contraseñas ingresadas sean iguales");
      return;
    }

    //Enviar request al api para crear un usuario
  };

  return (
    <>
      <form className="form__likeLogin" onSubmit={handleSubmit}>
        <h1 className="account__title">Crear una cuenta nueva</h1>
        <InputText
          text="Nombre"
          holder={NAME}
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <InputText
          text="Nickname (Nombre de usuario)"
          holder={NICK}
          type="text"
          value={userNick}
          onChange={e => setUserNick(e.target.value)}
        />
        <InputText
          text="Email"
          holder={EMAIL}
          type="email"
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
        />

        <InputText
          text="Contraseña"
          holder={PASSWD}
          type="password"
          value={userPass1}
          onChange={e => setUserPass1(e.target.value)}
        />

        <InputText
          text="Confirmar Contraseña"
          holder={PASSWD}
          type="password"
          value={userPass2}
          onChange={e => setUserPass2(e.target.value)}
        />
        <ErrorFormAccountMsg error={error} />

        <PrimaryBtnForm
          text="Crear cuenta"
          cssClasses="formCustomBtn purpleBtn"
          id="1"
        />
      </form>
    </>
  );
};

export default NewAccount;
