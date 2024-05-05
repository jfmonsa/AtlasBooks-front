import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {Link} from "react-router-dom";

const ConfPassDel = () => {
  return (
    <Card cardDialog h1_text="Confirma tu contraseña">
      <form>
        <InputText
          holder="Contraseña actual"
          type={"password"}
          text="Contraseña actual"
        />
        <Link to="/Login">
          <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
        </Link>
      </form>
    </Card>
  );
};

export default ConfPassDel;
