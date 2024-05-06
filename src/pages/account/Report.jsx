import Card from "../../components/card/Card.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {useNavigate} from "react-router-dom";
import InputText from "../../components/inputText/InputText.jsx";
// import DropDownButtonReport from "../../components/dropDownButtons/dropDownReport.jsx";
//import DropDownButtonReport from "../../components/dropDownButtons/dropDownReport.jsx";

const Report = () => {

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/book-information");
  };
  return (
    <Card cardDialog h1_text="Reportar">
      {/* <DropDownButtonReport /> */}
      <form onSubmit={handleSubmit}>
        <InputText holder="Contexto reporte" type={"text"} text="Reporte:" />
          <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
      </form>
    </Card>
  );
};

export default Report;
