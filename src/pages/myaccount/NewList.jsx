import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import TextArea from "../../components/textArea/TextArea.jsx";

const ConfPassDel = () => {
  return (
    <Card cardDialog h1_text="Confirma tu contraseña">
      <form>
        <h2>Crear nueva lista</h2>
        <InputText
          holder="P. ej Movie Dick"
          type={"text"}
          typecss={"access"}
          text="Titulo"
        />
        <InputText
          holder="Mi lista"
          type={"text"}
          typecss={"access"}
          text="Descripcion"
        />
        <TextArea holder="Mi lista" type={"text"} text="Descripcion" />

        <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
      </form>
    </Card>
  );
};

export default ConfPassDel;
