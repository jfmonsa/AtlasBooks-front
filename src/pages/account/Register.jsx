import "./account.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/authContext.jsx";

// components
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import FormInput from "../../components/FormInput/FormInput.jsx";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";

// utils
import {NAME, NICK, EMAIL, PASSWD} from "../../utils/placeholder.js";

const Register = () => {
  const navigate = useNavigate();
  const {signup, isAuthenticated, errors: RegisterErrors, user} = useAuth();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setValues(prev => ({...prev, countryCode: data.country_code}));
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountry();
  }, []);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

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
        "El nombre de usuario debe tener entre 3 a 16 y no incluir caracteres especiales",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "nickname",
      type: "text",
      placeholder: NICK,
      errorMessage:
        "El nickname debe tener entre 3 a 16 y no incluir caracteres especiales",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: EMAIL,
      errorMessage: "El email ingresado no es valido",
      pattern: "[^@s]+@[^@s]+.[^@s]",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: PASSWD,
      errorMessage:
        "La clave debe tener entre 8 a 20 caracteres, una mayuscula, un numero y un caracter especial",
      pattern: "(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}",
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
      validate: value => value === values.password,
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
