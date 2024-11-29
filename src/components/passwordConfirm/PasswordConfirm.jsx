import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import { useNavigate } from "react-router-dom";

const ConfPassUs = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/changeEmail");
    //Este componente debe ser instanciado en cada opción de usuario como:
    // cambiar contraseña, cambiar email, o editar detalles
    //TODO: Aquí usar el useNavigate del routing para redirigir al redirectPath despues de hacer
    //la validación de que la password
  };

  return (
    <Card cardDialog h1_text="Confirma tu contraseña">
      <form onSubmit={handleSubmit}>
        <InputText
          holder="Contraseña actual"
          type={"password"}
          typecss={"access"}
          text="Contraseña actual"
        />
        <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
      </form>
    </Card>
  );
};

export default ConfPassUs;
