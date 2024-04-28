import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";

const ConfPassUs = () => {
  return (
    <Card cardDialog h1_text="Confirma tu contraseña">
      <form method="post" action="/change-pass">
        <InputText
          holder="Contraseña antigua"
          type={"password"}
          typecss={"access"}
          text="Contraseña antigua"
        />
        <PrimaryBtnForm
          text="Corroborar"
          cssClasses="formCustomBtn black2Btn"
        />
      </form>
    </Card>
  );
};

export default ConfPassUs;
