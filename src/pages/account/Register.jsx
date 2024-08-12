/* eslint-disable no-useless-escape */
import "./account.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../utils/useAuth.js";
import ErrorFormAccount from "../../components/errorFormAccountMsg/ErrorFormAccountMsg.jsx";

// components
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import FormInput from "../../components/FormInput/FormInput.jsx";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";

// utils
import {NAME, NICK, EMAIL, PASSWD} from "../../utils/placeholder.js";

const Register = () => {
  const navigate = useNavigate();
  const {signup, isAuthenticated, errors: registerErrors} = useAuth();

  // state for inputs
  const [values, setValues] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    countryCode: "",
  });

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  // fetching
  // don't use useFetch custom hook here cause cors error with axios instance
  // because we're acceding different api from the baseUrl defined in axios instance
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(data =>
        setValues(prev => ({...prev, countryCode: data.country_code})),
      )
      .catch(error => console.error("Error fetching country data:", error));
  }, []);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  //validations and api request
  const handleSubmit = async e => {
    e.preventDefault();
    signup({
      name: values.name,
      nickName: values.nickname,
      email: values.email,
      password: values.password,
      country: values.countryCode,
    });
  };

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: NAME,
      errorMessage:
        "El nombre de usuario no debe tener caracteres especiales y no tener mas de 16 caracteres",
      pattern: "^[a-zA-Z0-9]{0,16}$",
      required: true,
    },
    {
      id: 2,
      name: "nickname",
      type: "text",
      placeholder: NICK,
      errorMessage:
        "El nickname no debe tener caracteres especiales y no tener mas de 16 caracteres",
      pattern: "^[a-zA-Z0-9]{0,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: EMAIL,
      errorMessage: "El email ingresado no es valido",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: PASSWD,
      errorMessage:
        "La clave debe tener al menos: 8 caracteres, 1 mayuscula, 1 minuscula y 1 numero",
      pattern: "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: PASSWD,
      errorMessage: "Las contraseñas no coinciden",
      pattern: values.password,
      required: true,
    },
  ];

  return (
    <>
      <form className="form__likeLogin" onSubmit={handleSubmit}>
        <h1 className="account__title">Crear una cuenta nueva</h1>

        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        {
          // TODO: test this
          registerErrors?.map((error, index) => (
            <ErrorFormAccount key={index} errors={error} />
          ))
        }
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
    </>
  );
};

export default Register;
