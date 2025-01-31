import { useState } from "react";
import { Card } from "@components/Card/Card.jsx";
import { InputText } from "@/components/forms/InputText/InputText.jsx";
import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm.jsx";
import { TextArea } from "@/components/forms/InputText/TextArea.jsx";

import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import axios from "@config/axios-instance.js";

export function NewListPage() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validaciones del frontend
    if (titulo.trim() === "") {
      alert("El título es obligatorio.");
      return;
    }

    if (titulo.length > 255) {
      alert("El título no puede exceder los 255 caracteres.");
      return;
    }

    if (descripcion.length > 0 && descripcion.length > 1000) {
      alert("La descripción no puede exceder los 1000 caracteres.");
      return;
    }

    try {
      await axios.post("/book-lists", {
        title: titulo,
        description: descripcion,
        isPublic: isPublic,
      });

      alert(`Lista creada exitosamente`);
      navigate("/my-account");
    } catch (error) {
      alert(`Error al crear la lista: ${error.response.data.message}`);
      console.error("Error al crear la lista:", error.response.data.message);
    }
  };

  const handleCancell = () => {
    navigate("/my-account");
  };

  return (
    <Card h1Text="Crea una nueva lista" h1Center cardDialog>
      <form onSubmit={handleSubmit}>
        <label className="input__label" htmlFor="isPublic">
          La lista es publica?{" "}
        </label>
        <Switch
          id="isPublic"
          onChange={() => {
            setIsPublic(!isPublic);
          }}
        />
        <InputText
          holder="P. ej Movie Dick"
          type="text"
          text="Titulo"
          value={titulo}
          onChange={handleTituloChange}
        />
        <TextArea
          holder="Escribe la descripción de tu lista"
          type="text"
          text="Descripcion"
          value={descripcion}
          onChange={handleDescripcionChange}
        />

        <PrimaryBtnForm text="Crear" cssClasses="formCustomBtn black2Btn" />
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
