import "./account.css";
import {NAME, NICK, EMAIL, PASSWD} from "../../utils/placeholder.js";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import {useEffect, useState} from "react";
import ErrorFormAccountMsg from "../../components/errorFormAccountMsg/ErrorFormAccountMsg.jsx";
import {
  valEmail,
  valNickname,
  valNoEmpty,
  valPassword,
} from "../../utils/validateFormFields.js";
import useFetch from "../../utils/useFetch.js";
import {useAuth} from "../../contexts/authContext.jsx";
import {useNavigate} from "react-router-dom";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";

const NewAccount = ({}) => {
  const [userName, setUserName] = useState("");
  const [userNick, setUserNick] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass1, setUserPass1] = useState("");
  const [userPass2, setUserPass2] = useState("");
  const countryReq = useFetch("https://ipapi.co/json/");
  const navigate = useNavigate();

  const {signup, isAuthenticated, errors: RegisterErrors, user} = useAuth();

  const [error, setError] = useState(null);
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  //validations and api request
  const handleSubmit = async e => {
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
        "Verifique que ambas claves tengan: minimo 8 caracteres, una mayuscula, un numero, un caracter especial. máximo 20 caracteres",
      );
      return;
    } else if (userPass1 != userPass2) {
      setError("Verifique que ambsa contraseñas ingresadas sean iguales");
      return;
    }
    setError(null);
    //usemos country_code para almacenarlo en la columna de pais de usuario :)
    //si se quiere el nombre, .country_name
    console.log(countryReq.data.country_code);
    //Enviar request al api para crear un usuario
    signup({
      name: userName,
      nickName: userNick,
      email: userEmail,
      password: userPass1,
      country: countryReq.data.country_code,
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
          {RegisterErrors.map((error, index) => (
            <ErrorFormAccountMsg error={error} index={index} />
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
};

export default NewAccount;
