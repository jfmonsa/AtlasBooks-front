import Card from "../../components/card/Card.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {useNavigate} from "react-router-dom";
import TextArea from "../../components/inputText/TextArea.jsx";
import {valNoEmpty} from "../../utils/validateFormFields.js";
import {useState} from "react";
import ErrorFormAccountMsg from "../../components/errorFormAccountMsg/ErrorFormAccountMsg.jsx";

const Report = () => {
  const navigate = useNavigate();
  const [contextReportText, setContextReportText] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (!valNoEmpty()) {
      setError("Todos los valores");
      return;
    }
    navigate("/book-information");
  };
  return (
    <Card cardDialog h1_text="Reportar">
      {/* <DropDownButtonReport /> */}
      <form onSubmit={handleSubmit}>
        <TextArea
          holder="Contexto reporte"
          text="Reporte:"
          value={contextReportText}
          onChange={e => setContextReportText(e.target.value)}
        />
        <ErrorFormAccountMsg error={error} />
        <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
      </form>
    </Card>
  );
};

export default Report;
