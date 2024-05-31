import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import TextArea from "../../components/inputText/TextArea.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import MultiSelectSearch from "../../components/multiSelectSearch/MultiSelectSearch.jsx";
import {useState} from "react";
import {mainLanguages} from "../../utils/languagesArray.js";
import DragAndDropFiles from "../../components/DragAndDropFiles/DragAndDropFiles.jsx";
import "./uploadBook.css";

const UploadBook = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [authors, setAuthors] = useState([""] /*[{ id: 1, name: '' }]*/);
  const [isbn, setIsbn] = useState("");
  const [nPages, setNPages] = useState("");
  const [nVol, setNVol] = useState("");
  const [languages, setLanguages] = useState([]);
  const [files, setFiles] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Archivos seleccionados:", files);
  };

  const handleFilesSelected = selectedFiles => {
    setFiles(selectedFiles);
  };
  /*
  const CatOptions = [{text: "Accion"}, {text: "Fantasia"}];
  const IdiOptions = [{text: "Ingles"}, {text: "Español"}];

*/
  const addAuthorInput = () => {
    if (authors[authors.length - 1].trim() !== "") {
      setAuthors([...authors, ""]);
    } else {
      alert(
        "Por favor, complete el campo de autor antes de agregar uno nuevo.",
      );
    }
  };

  const handleAuthorChange = (index, value) => {
    const updatedAuthors = [...authors];
    updatedAuthors[index] = value;
    setAuthors(updatedAuthors);
  };
  return (
    <Card cardDialog h1Text="Sube un libro" h1Center>
      <form className="uploadBook" onSubmit={handleSubmit}>
        <InputText
          text="Titulo"
          holder="P. ej Movie Dick"
          value={bookTitle}
          onChange={e => setBookTitle(e.target.value)}
        />
        {authors.map((author, index) => (
          <InputText
            key={index}
            text={`Autor ${index + 1}`}
            holder={`Autor ${index + 1}`}
            value={author}
            onChange={e => handleAuthorChange(index, e.target.value)}
          />
        ))}
        <PrimaryBtnForm
          type="button"
          text="Añadir autor"
          cssClasses="formCustomBtn black2Btn"
          onClick={addAuthorInput}
        />
        <InputText
          text={`ISBN`}
          holder={`978-3-16-148410-0`}
          value={isbn}
          onChange={e => setIsbn(e.target.value)}
        />
        <InputText
          text={`Número de páginas`}
          holder={`pej. 273`}
          type="number"
          value={nPages}
          onChange={e => setNPages(e.target.value)}
        />
        <InputText
          text={`Número de volumen`}
          holder={`pej. 1`}
          type="number"
          value={nVol}
          onChange={e => setNVol(e.target.value)}
        />
        <h3>Idomas </h3>
        <p>Puede seleccionar uno o más</p>
        <MultiSelectSearch options={mainLanguages} />
        <h3>Subcategorias</h3>
        <p>Puede seleccionar una o más</p>
        <label>Categorias </label>
        <MultiSelectSearch options={mainLanguages} />
        <h3>Imagen de portada</h3>
        {/* TODO: Hacer el de subir portada */}
        <h3>Archivos</h3>
        <p>Sube uno o mas archivos en distintos formatos</p>
        <DragAndDropFiles onFilesSelected={handleFilesSelected} />
        <TextArea text="Descripción" holder="Agrega la sipnosis del libro" />
        <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
        <PrimaryBtnForm text="Cancelar" cssClasses="formCustomBtn black2Btn" />
      </form>
    </Card>
  );
};

export default UploadBook;
