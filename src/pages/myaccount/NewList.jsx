import React, {useState} from "react";
import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import TextArea from "../../components/inputText/TextArea.jsx";
import {useAuth} from "../../contexts/authContext.jsx";
import {useNavigate} from "react-router-dom";

const CreateList = () => {
  const {user} = useAuth();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const Navigate = useNavigate();

  const handleTituloChange = event => {
    setTitulo(event.target.value);
  };

  const handleDescripcionChange = event => {
    setDescripcion(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const nuevaLista = {
      title: titulo,
      descriptionL: descripcion,
      dateL: new Date().toISOString(),
      idUserCreator: user.id,
      isPublic: true,
    };

    try {
      const response = await fetch("http://localhost:3000/api/lists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaLista),
      });

      const data = await response.json();
      if (data.error) {
        alert(data.message);
      } else {
        alert(`Lista creada exitosamente. ID: ${data.listId}`);
        Navigate("/my-account");
        //Navigate("/my-lists/" + data.listId); para que me mande a la lista recien creada
      }
    } catch (error) {
      console.error("Error al crear la lista:", error);
      alert("Error al crear la lista");
    }
  };

  return (
    <Card h1Text="Crea una nueva lista" h1Center cardDialog>
      <form onSubmit={handleSubmit}>
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

        <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
      </form>
    </Card>
  );
};

export default CreateList;
