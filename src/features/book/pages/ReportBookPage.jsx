import { useNavigate, useParams } from "react-router-dom";

import { Card } from "@components/Card/Card.jsx";
import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm.jsx";
import { TextArea } from "@components/forms/InputText/TextArea.jsx";
import { useState } from "react";
import { ErrorFormAccountMsg } from "@components/forms/ErrorFormAccountMsg/ErrorFormAccountMsg.jsx";

import { valNoEmpty } from "@utils/validateFormFields.js";
import { createBookReport } from "../services/report-book.service.js";

export function ReportBookPage() {
  const navigate = useNavigate();
  const [contextReportText, setContextReportText] = useState("");
  const [error, setError] = useState(null);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valNoEmpty(contextReportText)) {
      setError("Por favor, ingrese un contexto para el reporte.");
      return;
    }
    //Api to send report
    createBookReport(id, contextReportText)
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
      <form onSubmit={handleSubmit}>
        <TextArea
          holder="Contexto reporte"
          text="Reporte:"
          value={contextReportText}
          onChange={(e) => setContextReportText(e.target.value)}
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
}
