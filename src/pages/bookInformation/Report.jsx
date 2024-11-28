import Card from "../../components/card/Card.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {useNavigate, useParams} from "react-router-dom";
import TextArea from "../../components/inputText/TextArea.jsx";
import {valNoEmpty} from "../../utils/validateFormFields.js";
import {useState} from "react";
import ErrorFormAccountMsg from "../../components/errorFormAccountMsg/ErrorFormAccountMsg.jsx";
import {createReportApi} from "../../api/reports.js";

const Report = () => {
  const navigate = useNavigate();
  const [contextReportText, setContextReportText] = useState("");
  const [error, setError] = useState(null);
  const {id} = useParams();

  const handleSubmit = e => {
    e.preventDefault();
    if (!valNoEmpty(contextReportText)) {
      setError("Por favor, ingrese un contexto para el reporte.");
      return;
    }
    //Api to send report
    createReportApi({idBook: id, motivation: contextReportText})
      .then(() => {
        navigate(`/books/${id}`);
      })
      .catch(() => {
        setError("Ha ocurrido un error al enviar el reporte.");
      });
  };

  const handleCancell = () => {
    navigate(`/books/${id}`);
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
        <PrimaryBtnForm
          type="button"
          text="Cancelar"
          cssClasses="formCustomBtn black1Btn"
          onClick={handleCancell}
        />
      </form>
    </Card>
  );
};

export default Report;
