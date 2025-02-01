import "./UploadBookPage.css";
import { useState, useEffect } from "react";

//components
import { Card } from "@components/Card/Card.jsx";
import { InputText } from "@components/forms/InputText/InputText.jsx";
import { TextArea } from "@components/forms/InputText/TextArea.jsx";
import { PrimaryBtnForm } from "@components/PrimaryBtn/PrimaryBtnForm.jsx";
import { DragAndDropFiles } from "../../components/DragAndDropFiles/DragAndDropFiles.jsx";
import { InputFileBtn } from "../../components/InputFileBtn/InputFileBtn.jsx";
import Select from "react-select";

//api related
import useFetch from "@hooks/useFetch.js";
import { useAuth } from "@hooks/useAuth.js";
import { createBook } from "../../services/upload-book.service.js";

//others
import { mainLanguages } from "@utils/languagesArray.js";

const defaultBookData = {
  title: "",
  description: "",
  isbn: "",
  numberOfPages: "",
  yearReleased: "",
  volume: "",
  publisher: "",
  authors: [""],
  languages: [],
  subcategoryIds: [],
};

export function UploadBookPage() {
  const { user } = useAuth();

  //form fields
  const [bookData, setBookData] = useState(...defaultBookData);

  // files
  const [bookFiles, setBookFiles] = useState([]);
  const [coverBookImage, setCoverImage] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Debe iniciar sesión para subir un libro");
      return;
    }
    // Validación de campos requeridos
    if (!bookData.title.trim()) {
      alert("El título no puede estar vacío");
      return;
    }
    if (!bookData.description.trim()) {
      alert("La descripción no puede estar vacía");
      return;
    }
    if (
      bookData.authors.length === 0 ||
      bookData.authors.some((author) => !author.trim())
    ) {
      alert(
        "Debe haber al menos un autor y los nombres de los autores no pueden estar vacíos",
      );
      return;
    }
    if (bookData.languages.length === 0) {
      alert("Debe seleccionar al menos un idioma");
      return;
    }
    if (bookFiles.length === 0) {
      alert("Debe subir al menos un archivo del libro");
      return;
    }
    try {
      createBook(bookData, bookFiles, coverBookImage);

      alert("Libro creado exitosamente!");

      // clear inputs
      setBookData(...defaultBookData);
    } catch (error) {
      console.error("Error al crear el libro:", error);
      alert("Hubo un error al crear el libro. Por favor, inténtelo de nuevo.");
    }
  };

  const handleCancell = (e) => {
    e.navigate("/my-account");
  };

  const handleFilesSelected = (selectedFiles) => {
    setBookFiles(selectedFiles);
  };

  const handleCoverBookImage = (selectedFile) => {
    setCoverImage(selectedFile);
  };

  const handleSelectedLanguagesChange = (selectedOption) => {
    setBookData((prevBookData) => ({
      ...prevBookData,
      languages: selectedOption,
    }));
  };

  const addAuthorInput = () => {
    if (bookData.authors[bookData.authors.length - 1].trim() !== "") {
      setBookData((prevBookData) => ({
        ...prevBookData,
        authors: [...bookData.authors, ""],
      }));
    } else {
      alert(
        "Por favor, complete el campo de autor antes de agregar uno nuevo.",
      );
    }
  };

  const handleAuthorChange = (index, value) => {
    const updatedAuthors = [...bookData.authors];
    updatedAuthors[index] = value;
    setBookData((prevBookData) => ({
      ...prevBookData,
      authors: updatedAuthors,
    }));
  };

  const {
    data: catData,
    isPending: catIsPending,
    error: catError,
  } = useFetch(`/book-categories`);

  useEffect(() => {
    setBookData((prevBookData) => ({
      ...prevBookData,
      selectedCategory: selectedCategory,
    }));
  }, [selectedCategory]);

  if (catError) {
    console.error(catError);
    return <p>{catError}</p>;
  } else if (catIsPending) {
    return <p>Loading...</p>;
  } else if (catData) {
    const categories = catData.data.map((cat) => ({
      value: cat.id,
      label: cat.name,
    }));
    return (
      <Card cardDialog h1Text="Sube un libro" h1Center>
        <form className="uploadBook" onSubmit={handleSubmit}>
          <InputText
            text="Titulo"
            holder="P. ej Movie Dick"
            value={bookData.title}
            onChange={(e) =>
              setBookData((prevBookData) => ({
                ...prevBookData,
                title: e.target.value,
              }))
            }
          />
          {bookData.authors.map((author, index) => (
            <InputText
              key={index}
              text={`Autor ${index + 1}`}
              holder={`Autor ${index + 1}`}
              value={author}
              onChange={(e) => handleAuthorChange(index, e.target.value)}
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
            value={bookData.isbn}
            onChange={(e) =>
              setBookData((prevBookData) => ({
                ...prevBookData,
                isbn: e.target.value,
              }))
            }
          />

          <InputText
            text={`Año de publicación`}
            holder={`pej. 1973`}
            type="number"
            value={bookData.yearReleased}
            onChange={(e) =>
              setBookData((prevBookData) => ({
                ...prevBookData,
                yearReleased: e.target.value,
              }))
            }
          />
          <InputText
            text={`Número de páginas`}
            holder={`pej. 273`}
            type="number"
            value={bookData.numberOfPages}
            onChange={(e) =>
              setBookData((prevBookData) => ({
                ...prevBookData,
                numberOfPages: e.target.value,
              }))
            }
          />
          <InputText
            text={`Número de volumen`}
            holder={`pej. 1`}
            type="number"
            value={bookData.volume}
            onChange={(e) =>
              setBookData((prevBookData) => ({
                ...prevBookData,
                volume: e.target.value,
              }))
            }
          />
          <InputText
            text={`Editorial / Publicador`}
            holder={`pej. Fondo de Cultura Económica`}
            type="text"
            value={bookData.publisher}
            onChange={(e) =>
              setBookData((prevBookData) => ({
                ...prevBookData,
                publisher: e.target.value,
              }))
            }
          />
          <label className="input__label" htmlFor="languages">
            Idiomas{" "}
          </label>
          <p className="label_extra">Puede seleccionar uno o más</p>
          <Select
            id="languages"
            options={mainLanguages}
            onChange={handleSelectedLanguagesChange}
            placeholder="Idiomas..."
            name="languages"
            value={bookData.languages}
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
            onChange={(option) => setSelectedCategory(option)}
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
            selectedSubCategories={bookData.selectedSubCategories}
            onSubCategoriesChange={bookData.setSelectedSubCategories}
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
            value={bookData.description}
            onChange={(e) =>
              setBookData((prevBookData) => ({
                ...prevBookData,
                description: e.target.value,
              }))
            }
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
}

// Aux components
function SubCategorySelect({
  selectedCategory,
  selectedSubCategories,
  onSubCategoriesChange,
}) {
  const {
    data: subCatData,
    isPending: subCatIsPending,
    error: subCatError,
  } = useFetch(
    selectedCategory
      ? `book-categories/subcategories/${selectedCategory}`
      : null,
  );

  /** Clear selected subcategories when main selected category changes */
  useEffect(() => {
    if (subCatData && onSubCategoriesChange) {
      onSubCategoriesChange([]);
    }
  }, [selectedCategory, subCatData, onSubCategoriesChange]);

  if (!selectedCategory) return null;

  if (subCatError) {
    return <p>{subCatError}</p>;
  } else if (subCatIsPending) {
    return <p>Loading subcategories...</p>;
  } else if (subCatData) {
    return (
      <>
        <label className="input__label" htmlFor="subcategories">
          Subcategorias
        </label>
        <p className="label_extra">Puede seleccionar una o más</p>
        <Select
          options={subCatData.data.map((subCat) => ({
            value: subCat.id,
            label: subCat.subcategoryName,
          }))}
          onChange={(selectedOptions) => onSubCategoriesChange(selectedOptions)}
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
}
