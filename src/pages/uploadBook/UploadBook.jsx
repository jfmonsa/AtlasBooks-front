import "./uploadBook.css";

//components
import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import TextArea from "../../components/inputText/TextArea.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import MultiSelectSearch from "../../components/multiSelectSearch/MultiSelectSearch.jsx";
import SingleSelect from "../../components/singleSelect/SingleSelect.jsx";
import DragAndDropFiles from "../../components/DragAndDropFiles/DragAndDropFiles.jsx";
import InputFileBtn from "../../components/inputFileBtn/InputFileBtn.jsx";

//api related
import baseUrl from "../../api/baseUrl.js";
import useFetch from "../../utils/useFetch.js";
import axios from "../../api/axios.js";
import {useAuth} from "../../contexts/authContext.jsx";

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
  } = useFetch(
    selectedCategory ? `${baseUrl}/categories/${selectedCategory}` : null,
  );

  useEffect(() => {
    if (subCatData && onSubCategoriesChange) {
      onSubCategoriesChange([]); // Clear selected subcategories when category changes
    }
  }, [selectedCategory, subCatData, onSubCategoriesChange]);

  if (!selectedCategory) return null;

  return (
    <>
      {subCatError && <p>{subCatError}</p>}
      {subCatIsPending && <p>Loading subcategories...</p>}
      {subCatData && (
        <>
          <h3>Subcategorias</h3>
          <p>Puede seleccionar una o más</p>
          <MultiSelectSearch
            options={subCatData.subcategories.map(subCat => ({
              value: subCat.id,
              label: subCat.subcategoryname,
            }))}
            onChangeCallback={selectedOptions =>
              onSubCategoriesChange(selectedOptions)
            }
            value={selectedSubCategories} // Pass the selected subcategories
          />
        </>
      )}
    </>
  );
};

const UploadBook = () => {
  const {isAuthenticated, user} = useAuth();

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

    console.log("bookTitle:", bookTitle);
    console.log("authors:", authors);
    console.log("isbn:", isbn);
    console.log("nPages:", nPages);
    console.log("yearReleased:", yearReleased);
    console.log("nVol:", nVol);
    console.log("publisher:", publisher);
    console.log("languages:", languages);
    console.log("selectedCategory:", selectedCategory);
    console.log("selectedSubCategories:", selectedSubCategories);
    console.log("coverBookImage:", coverBookImage);
    console.log("files:", files);
    console.log("descriptionB:", descriptionB);
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

      // Manejar la respuesta
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading book:", error);
      alert("An error occurred while uploading the book. Please try again.");
    }
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
          <h3>Idomas </h3>
          <p>Puede seleccionar uno o más</p>
          <MultiSelectSearch
            options={mainLanguages}
            onChangeCallback={handleSelectedLanguagesChange}
            placeholder="Idiomas..."
            selectName="languages"
            value={languages}
          />
          <h3>Categoria</h3>
          <SingleSelect
            options={categories}
            onChangeCallback={option => setSelectedCategory(option.value)}
          />
          <SubCategorySelect
            selectedCategory={selectedCategory}
            selectedSubCategories={selectedSubCategories}
            onSubCategoriesChange={setSelectedSubCategories}
          />
          <h3>Imagen de portada</h3>
          <InputFileBtn onFilesSelected={handleCoverBookImage} />
          <h3>Archivos</h3>
          <p>Sube uno o mas archivos en distintos formatos</p>
          <DragAndDropFiles onFilesSelected={handleFilesSelected} />
          <TextArea
            text="Descripción"
            holder="Agrega la sipnosis del libro"
            value={descriptionB}
            onChange={e => setDescriptionB(e.target.value)}
          />
          <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
          <PrimaryBtnForm
            type="button"
            text="Cancelar"
            cssClasses="formCustomBtn black1Btn"
          />
        </form>
      </Card>
    );
  }
};

export default UploadBook;
