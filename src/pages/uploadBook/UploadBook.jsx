import "./uploadBook.css";

//components
import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import TextArea from "../../components/inputText/TextArea.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import DragAndDropFiles from "../../components/DragAndDropFiles/DragAndDropFiles.jsx";
import InputFileBtn from "../../components/inputFileBtn/InputFileBtn.jsx";
import Select from "react-select";
import {useNavigate} from "react-router-dom";

//api related
import baseUrl from "../../api/baseUrl.js";
import useFetch from "../../utils/useFetch.js";
import axios from "../../api/axios.js";
import {useAuth} from "../../utils/useAuth.js";

//others
import {useState, useEffect} from "react";
import {mainLanguages} from "../../utils/languagesArray.js";

const SubCategorySelect = ({
  selectedCategory,
  selectedSubCategories,
  onSubCategoriesChange,
}) => {
  const {
    data: subCatData,
    isPending: subCatIsPending,
    error: subCatError,
  } = useFetch(selectedCategory ? `categories/${selectedCategory}` : null);

  useEffect(() => {
    if (subCatData && onSubCategoriesChange) {
      onSubCategoriesChange([]); // Clear selected subcategories when category changes
    }
  }, [selectedCategory, subCatData, onSubCategoriesChange]);

  if (!selectedCategory) return null;

  if (subCatError) {
    return <p>{subCatError}</p>;
  } else if (subCatIsPending) {
    return <p>Loading subcategories...</p>;
  } else if (subCatData && subCatData.subcategories) {
    return (
      <>
        <label className="input__label" htmlFor="subcategories">
          Subcategorias
        </label>
        <p className="label_extra">Puede seleccionar una o más</p>
        <Select
          options={subCatData.subcategories.map(subCat => ({
            value: subCat.id,
            label: subCat.subcategoryname,
          }))}
          onChange={selectedOptions => onSubCategoriesChange(selectedOptions)}
          value={selectedSubCategories}
          placeholder="Subcategorias..."
          id="subcategories"
          name="subcategories"
          isMulti
          isSearchable
          className="basic-single formClassicSelector"
          classNamePrefix="select"
        />
      </>
    );
  } else {
    return <p>No subcategories found.</p>;
  }
};
const UploadBook = () => {
  const {isAuthenticated, user} = useAuth();
  const navigate = useNavigate();

  //form fields
  const [bookTitle, setBookTitle] = useState("");
  const [authors, setAuthors] = useState([""]);
  const [isbn, setIsbn] = useState("");
  const [nPages, setNPages] = useState("");
  const [yearReleased, setYearReleased] = useState("");
  const [nVol, setNVol] = useState("");
  const [publisher, setPublisher] = useState("");
  const [languages, setLanguages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [coverBookImage, setCoverBookImage] = useState(null);
  const [files, setFiles] = useState([]);
  const [descriptionB, setDescriptionB] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert("Debe iniciar sesión para subir un libro");
      return;
    }
    // Validación de campos requeridos
    if (!bookTitle.trim()) {
      alert("El título no puede estar vacío");
      return;
    }
    if (!descriptionB.trim()) {
      alert("La descripción no puede estar vacía");
      return;
    }
    if (authors.length === 0 || authors.some(author => !author.trim())) {
      alert(
        "Debe haber al menos un autor y los nombres de los autores no pueden estar vacíos",
      );
      return;
    }
    if (languages.length === 0) {
      alert("Debe seleccionar al menos un idioma");
      return;
    }
    if (files.length === 0) {
      alert("Debe subir al menos un archivo del libro");
      return;
    }
    try {
      const formData = new FormData();

      // Añadir los datos del formulario al FormData
      formData.append("isbn", isbn);
      formData.append("title", bookTitle);
      formData.append("descriptionB", descriptionB);
      formData.append("yearReleased", yearReleased);
      formData.append("vol", nVol);
      formData.append("nPages", nPages);
      formData.append("publisher", publisher);
      formData.append("authors", JSON.stringify(authors));
      formData.append(
        "languages",
        JSON.stringify(languages.map(lang => lang.value)),
      );
      formData.append(
        "subcategoryIds",
        JSON.stringify(selectedSubCategories.map(subCat => subCat.value)),
      );

      // Añadir la imagen de portada al FormData
      formData.append("cover", coverBookImage);

      // Añadir los archivos del libro al FormData
      files.forEach(file => {
        formData.append("bookFiles", file);
      });

      // Realizar la solicitud POST
      const response = await axios.post("/books", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Manejar la respuesta  response.data
      //if the book creating was done successfully then clear de inputs
      alert("Libro creado exitosamente!");
      setBookTitle("");
      setAuthors([""]);
      setIsbn("");
      setNPages("");
      setYearReleased("");
      setNVol("");
      setPublisher("");
      setLanguages([]);
      setSelectedCategory(null);
      setSelectedSubCategories([]);
      setCoverBookImage(null);
      setFiles([]);
      setDescriptionB("");
    } catch (error) {
      console.error("Error uploading book:", error);
      alert("An error occurred while uploading the book. Please try again.");
    }
  };

  const handleCancell = e => {
    navigate("/my-account");
  };

  const handleFilesSelected = selectedFiles => {
    setFiles(selectedFiles);
  };

  const handleCoverBookImage = selectedFile => {
    setCoverBookImage(selectedFile);
  };

  const handleSelectedLanguagesChange = selectedOption => {
    setLanguages(selectedOption);
  };

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

  const {
    data: catData,
    isPending: catIsPending,
    error: catError,
  } = useFetch(`${baseUrl}/categories/onlyCategories`);

  useEffect(() => {
    setSelectedSubCategories([]);
  }, [selectedCategory]);

  if (catError) {
    console.error(catError);
    return <p>{catError}</p>;
  } else if (catIsPending) {
    return <p>Loading...</p>;
  } else if (catData) {
    const categories = catData.categories.map(cat => ({
      value: cat.id,
      label: cat.categoryname,
    }));
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
            cssClasses="formCustomBtn black2Btn addAuthorBtn"
            onClick={addAuthorInput}
          />
          <InputText
            text={`ISBN`}
            holder={`978-3-16-148410-0`}
            value={isbn}
            onChange={e => setIsbn(e.target.value)}
          />

          <InputText
            text={`Año de publicación`}
            holder={`pej. 1973`}
            type="number"
            value={yearReleased}
            onChange={e => setYearReleased(e.target.value)}
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
          <InputText
            text={`Editorial / Publicador`}
            holder={`pej. Fondo de Cultura Económica`}
            type="text"
            value={publisher}
            onChange={e => setPublisher(e.target.value)}
          />
          <label className="input__label" htmlFor="languages">
            Idomas{" "}
          </label>
          <p className="label_extra">Puede seleccionar uno o más</p>
          <Select
            id="languages"
            options={mainLanguages}
            onChange={handleSelectedLanguagesChange}
            placeholder="Idiomas..."
            name="languages"
            value={languages}
            isMulti
            isSearchable
            className="basic-single formClassicSelector"
            classNamePrefix="select"
          />
          <label className="input__label" htmlFor="category">
            Categoria
          </label>
          <p className="label_extra">Selecciona solo una</p>
          <Select
            id="category"
            options={categories}
            onChange={option => setSelectedCategory(option)}
            placeholder="Categorias..."
            name="category"
            value={selectedCategory}
            isSearchable
            isClearable
            classNamePrefix="select"
            className="basic-single formClassicSelector"
          />
          <SubCategorySelect
            selectedCategory={selectedCategory ? selectedCategory.value : null}
            selectedSubCategories={selectedSubCategories}
            onSubCategoriesChange={setSelectedSubCategories}
          />
          <label className="input__label" htmlFor="coverBookImage">
            Imagen de portada
          </label>
          <p className="label_extra">Selecciona un archivo tipo imagen</p>
          <InputFileBtn
            onFilesSelected={handleCoverBookImage}
            id="coverBookImage"
            className="inputFileBookCover"
          />
          <label className="input__label" htmlFor="bookFiles">
            Archivos
          </label>
          <p className="label_extra">
            Sube uno o mas archivos en distintos formatos
          </p>
          <DragAndDropFiles
            onFilesSelected={handleFilesSelected}
            id="bookFiles"
            classNameContainer="inputFileBookBookFiles"
          />
          <TextArea
            text="Descripción"
            holder="Agrega la sipnosis del libro"
            value={descriptionB}
            onChange={e => setDescriptionB(e.target.value)}
          />
          <PrimaryBtnForm
            text="Subir libro"
            cssClasses="formCustomBtn black2Btn"
          />
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
};

export default UploadBook;
