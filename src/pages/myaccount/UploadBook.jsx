import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {Link, Form} from "react-router-dom";
import DropdownBtn from "../../components/dropDownButtons/DropdownBtn.jsx";
import {useState, useCallback} from "react";
import {useDropzone} from "react-dropzone";
import "./UploadBook.css";

const UploadBook = () => {
  const CatOptions = [{text: "Accion"}, {text: "Fantasia"}];
  const IdiOptions = [{text: "Ingles"}, {text: "Español"}];
  const [file, setFile] = useState();
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0]);
  }, []);
  const {getRootProps, getInputProps, IsDragActive} = useDropzone({onDrop});
  const handleSubmit = e => {
    e.preventDefault();

    console.log(e.target[0].files[0]);
    console.log(file);
  };

  return (
    <Card cardDialog h1_text="Sube un libro" classname="UploadBook">
      <Form method="post" action="" onSubmit={handleSubmit}>
        <h2>Subir un libro</h2>
        <InputText holder="P. ej Movie Dick" type={"text"} text="Titulo" />
        <InputText holder="Autor 1" type={"text"} text="Autor" />
        <PrimaryBtnForm
          text="Añadir autor"
          cssClasses="formCustomBtn black2Btn"
        />
        <InputText holder="978-3-16-148410-0" type={"text"} text="ISBN" />
        <InputText holder="1963" type={"text"} text="Año" />
        <InputText holder="273" type={"text"} text="Numero de paginas" />
        <InputText holder="vol 1" type={"text"} text="Numero de volumen" />
        <InputText
          holder="vol 1"
          type={"text"}
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

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {IsDragActive ? (
            <p>Sube la imagen aqui</p>
          ) : (
            <p>Sube la imagen aqui</p>
          )}
        </div>

        <h3>Archivos</h3>
        <p>Sube uno o mas archivos en distintos formatos</p>

        <input type="file" onChange={e => setFile(e.target.files[0])} />

        <InputText holder="Mi lista" type={"TextArea"} text="Descripcion" />
        {/* <Link to="/my-account"> */}
        <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
        {/* </Link> */}
        <Link to="/my-account">
          <PrimaryBtnForm
            text="Cancelar"
            cssClasses="formCustomBtn black2Btn"
          />
        </Link>
      </Form>
    </Card>
  );
};

export default UploadBook;
