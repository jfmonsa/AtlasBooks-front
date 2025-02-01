import { Card } from "@components/Card/Card.jsx";
import { InputText } from "@components/forms/InputText/InputText.jsx";
import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm.jsx";
import { useNavigate } from "react-router-dom";

// TODO: refactor this completely, this should be a component not a page

export function ConfirmPassword() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/change-email");
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
