import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import TextArea from "../../components/inputText/TextArea.jsx";

const ConfPassDel = () => {
  return (
    <Card h1Text="Crea una nueva lista" h1Center cardDialog>
      <form>
        <InputText holder="P. ej Movie Dick" type={"text"} text="Titulo" />
        <TextArea
          holder="Escribe la descripción de tu lista"
          type={"text"}
          text="Descripcion"
        />

        <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
      </form>
    </Card>
  );
};

export default ConfPassDel;
