import Card from "../../components/card/Card.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {Link} from "react-router-dom";
import InputText from "../../components/inputText/InputText.jsx";
// import DropDownButtonReport from "../../components/dropDownButtons/dropDownReport.jsx";
//import DropDownButtonReport from "../../components/dropDownButtons/dropDownReport.jsx";

const Report = () => {
  return (
    <Card cardDialog h1_text="Reportar">
      {/* <DropDownButtonReport /> */}
      <form>
        <InputText holder="Contexto reporte" type={"text"} text="Reporte:" />
        <Link to="/book-information">
          <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
        </Link>
      </form>
    </Card>
  );
};

export default Report;
