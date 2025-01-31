import { Card } from "@components/Card/Card.jsx";
import { InputText } from "@components/forms/InputText/InputText.jsx";
import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm.jsx";
import { useNavigate } from "react-router-dom";

export function ConfirmPassword() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/changeEmail");
    //Este componente debe ser instanciado en cada opción de usuario como:
    // cambiar contraseña, cambiar email, o editar detalles
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
}
