import "./account.css";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {EMAIL, PASSWD, NICK} from "../../utils/placeholder.js";
import {useAuth} from "../../utils/useAuth.js";
import {useNavigate} from "react-router-dom";

// components
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";
import FormInput from "../../components/FormInput/FormInput.jsx";
import ErrorFormAccountMsg from "../../components/errorFormAccountMsg/ErrorFormAccountMsg.jsx";

export const Login = () => {
  const navigate = useNavigate();
  const {login, isAuthenticated, errors: loginErrors} = useAuth();
  const [values, setValues] = useState({
    userNickname: "",
    userPassword: "",
  });

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  //Validations and post request to api
  const handleSubmit = e => {
    e.preventDefault();

    // only validations in inputs array

    //api request to backend using auth context
    login({
      userNickname: values.userNickname,
      userPassword: values.userPassword,
    });
  };

  const inputs = [
    {
      id: 1,
      name: "userNickname",
      type: "text",
      placeholder: EMAIL + ", " + NICK,
      errorMessage: "email o nickname no valido",
      required: true,
    },
    {
      id: 2,
      name: "userPassword",
      type: "password",
      placeholder: PASSWD,
      errorMessage: "Ingrese una contraseña valida",
      required: true,
    },
  ];

  return (
    <>
      <h1 className="account__title">Iniciar Sesion</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        {loginErrors.map((error, index) => (
          <ErrorFormAccountMsg key={index} error={error} />
        ))}
        <PrimaryBtnForm
          text="Iniciar Sesion"
          cssClasses="formCustomBtn purpleBtn"
        />
      </form>

      <Link to="/recovery-account" className="account__forgot-link">
        Olvidaste tu Contraseña?
      </Link>

      <PrimaryBtnLink
        tolink="/new-account"
        text="Crear Cuenta"
        cssClasses="formCustomBtn black1Btn"
      />
    </>
  );
};
