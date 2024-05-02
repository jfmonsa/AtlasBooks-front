import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {Link, Form} from "react-router-dom";
import DropdownBtn from "../../components/dropDownButtons/DropdownBtn.jsx";
import React, {useRef} from "react";

const UploadBook = () => {
  const CatOptions = [{text: "Accion"}, {text: "Fantasia"}];
  const IdiOptions = [{text: "Ingles"}, {text: "Español"}];
  const fileInput = useRef(null);
  const handleFileChange = () => {
    const selectedFile = fileInput.current.files[0];
    console.log("Archivo seleccionado:", selectedFile);
  };
  const handleUpload = () => {
    fileInput.current.click();
  };
  return (
    <Card cardDialog h1_text="Sube un libro">
      <Form method="post" action="">
        <h2>Subir un libro</h2>
        <InputText
          holder="P. ej Movie Dick"
          type={"text"}
          typecss={"access"}
          text="Titulo"
        />
        <InputText
          holder="Autor 1"
          type={"text"}
          typecss={"access"}
          text="Autor"
        />
        <PrimaryBtnForm
          text="Añadir autor"
          cssClasses="formCustomBtn black2Btn"
        />
        <InputText
          holder="978-3-16-148410-0"
          type={"text"}
          typecss={"access"}
          text="ISBN"
        />
        <InputText holder="1963" type={"text"} typecss={"access"} text="Año" />
        <InputText
          holder="273"
          type={"text"}
          typecss={"access"}
          text="Numero de paginas"
        />
        <InputText
          holder="vol 1"
          type={"text"}
          typecss={"access"}
          text="Numero de volumen"
        />
        <InputText
          holder="vol 1"
          type={"text"}
          typecss={"access"}
          text="Publicador / casa editorial"
        />
        <DropdownBtn
          options={CatOptions}
          text="Categoria"
          boxCssClasses="btnDropDown btnDropDown--black"
          textCssClasses="btnDropDown__text"
        />
        <DropdownBtn
          options={IdiOptions}
          text="Idioma"
          boxCssClasses="btnDropDown btnDropDown--black"
          textCssClasses="btnDropDown__text"
        />
        <h3>Imagen de portada</h3>
        <PrimaryBtnForm
          text="Sube una imagen"
          cssClasses="formCustomBtn black2Btn"
        />
        <h3>Archivos</h3>
        <p>Sube uno o mas archivos en distintos formatos</p>
        <input
          type="file"
          ref={fileInput}
          style={{display: "none"}}
          onChange={handleFileChange}
          name="files"
        />
        <PrimaryBtnForm
          onClick={handleUpload}
          text="Sube un archivo"
          cssClasses="formCustomBtn black2Btn"
        />
        <Link to="/">
          <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
        </Link>
      </Form>
    </Card>
  );
};

export default UploadBook;
