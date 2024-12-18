import axios from "../../../api/axios.js";
import { useAuth } from "../../../hooks/useAuth.js";

// components
import DropdownBtn from "../../../components/dropDownButtons/DropdownBtn.jsx";
import AddBookToList from "../../../components/addBookToList/AddBookToList.jsx";
import PrimaryBtnLink from "../../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";
import { HeartButton } from "./HeartButton.jsx";
import { AiOutlineStar } from "react-icons/ai";
import Card from "../../../components/card/Card.jsx";
// import FeedbackPopup from "../../../components/popUp/popUp.jsx";

// icons
// -- Download option's icon
import PdfIcon from "../../../assets/icons/pdfIcon.svg";
import EpubIcon from "../../../assets/icons/otherFile.svg";
// -- Share option's icon
import Facebook from "../../../assets/icons/Icon-facebook.svg";
import Instagram from "../../../assets/icons/Icon-instagram.svg";
import Telegram from "../../../assets/icons/Icon-telegram.svg";
import WhatsApp from "../../../assets/icons/Icon-whatsapp.svg";
import Enlace from "../../../assets/icons/Icon-link.svg";
import coment from "../../../assets/icons/comentario-icon.svg";
import { useCallback } from "react";

function BookInfoSectionSpecs({ left, right }) {
  return (
    <li className="specs__item">
      <span className="specs__item__left">{left}</span>
      <span className="specs__item__right">{right}</span>
    </li>
  );
}

const iconMap = {
  PDF: PdfIcon,
  EPUB: EpubIcon,
};

const shareOptions = [
  { toLink: "#", iconPath: Facebook, text: "Facebook" },
  { toLink: "#", iconPath: Instagram, text: "Instagram" },
  { toLink: "#", iconPath: Telegram, text: "Telegram" },
  { toLink: "#", iconPath: WhatsApp, text: "WhatsApp" },
  {
    toLink: "#",
    iconPath: Enlace,
    text: "Copiar enlace",
    onClick: () => {
      const currentUrl = window.location.href;
      navigator.clipboard.writeText(currentUrl).then(() => {
        alert("Enlace copiado al portapapeles");
      });
    },
  },
];

export function BookDetailsSection({
  bookId,
  bookName,
  authorName,
  rank,
  bookDescription,
  categories,
  editory,
  isbn,
  fileType,
  year,
  language,
  pages,
  vol,
  bookImg,
  numComments,
  bookFiles,
  fileName,
}) {
  const { user } = useAuth();

  const handleDownload = useCallback(
    async (url) => {
      if (!user) {
        alert("You must be logged in to download this file.");
        return;
      }

      try {
        const response = await axios.post(url, {
          bookId,
          fileName,
        });
        const urlFile = response.data.data.fileCloudUrl;
        window.open(urlFile, "_blank");
      } catch (error) {
        console.error("Error downloading file:", error.response.data);
        alert(
          "An error occurred while downloading the file." +
            error.response.data.error,
        );
      }
    },
    [bookId, fileName, user],
  );

  const generateDownloadOptions = useCallback(
    (bookFiles) => {
      return bookFiles.map((file) => {
        const fileExtension = file.split(".").pop().toUpperCase();
        return {
          iconPath: iconMap[fileExtension],
          text: fileExtension,
          onClick: () => handleDownload(`/book/download`),
        };
      });
    },
    [handleDownload],
  );

  return (
    <Card h1Text="Inicio / libro" notFullWidth>
      {/* <FeedbackPopup /> */}
      <div className="bookInfo">
        <img
          className="bookInfo__img"
          src={bookImg}
          alt={`portada del libro ${bookName}`}
        />
        <div className="bookInfo__right">
          <h2 className="bookInfo__right__name">{bookName}</h2>
          <h3 className="bookInfo__right__author">{authorName}</h3>

          <div className="relevantInfo">
            <a className="relevantInfo__subCont" href="#rate-stars">
              <AiOutlineStar className="relevantInfo__icon1" />
              <span className="rank__real">{rank}</span>
              <span className="rank__total">/5.0</span>
            </a>

            <div className="relevantInfo__subCont">
              <a className="relevantInfo__subCont" href="#comments">
                <img
                  src={coment}
                  alt="icon of comments of this book"
                  className="relevantInfo__icon1"
                />
                <span> {numComments} comentarios</span>
              </a>

              <div>
                <HeartButton className="relevantInfo__icon2 heartLike" />
                {/*TODO: Agregarle un estado de disabled cuando el usuario no esta autenticado*/}
                {user && <AddBookToList bookId={bookId} userId={user.id} />}
              </div>
            </div>
          </div>
          <h3 className="bookInfo__right__sipnosisTitle">Sinopsis</h3>
          <p className="bookInfo__right__sipnosisText">{bookDescription}</p>
          <div className="bookInfo__specs">
            <ul className="specs">
              <BookInfoSectionSpecs left="Categorias:" right={categories} />
              <BookInfoSectionSpecs
                left="Publicador:"
                right={editory ?? "Desconocido"}
              />
              <BookInfoSectionSpecs
                left="ISBN:"
                right={isbn ?? "Desconocido"}
              />
              <BookInfoSectionSpecs left="Archivo:" right={fileType} />
            </ul>
            <ul className="specs">
              <BookInfoSectionSpecs left="Año:" right={year ?? "Desconocido"} />
              <BookInfoSectionSpecs left="Lenguaje:" right={language} />
              <BookInfoSectionSpecs
                left="Paginas:"
                right={pages ?? "Desconocido"}
              />
              <BookInfoSectionSpecs
                left="Volumen:"
                right={vol ?? "Desconocido"}
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="bookInfo-btns">
        <DropdownBtn
          options={generateDownloadOptions(bookFiles)}
          text="Descargar"
          boxCssClasses="btnDropDown btnDropDown--black"
          textCssClasses="btnDropDown__text"
        />
        <DropdownBtn
          options={shareOptions}
          text="Compatir"
          boxCssClasses="btnDropDown btnDropDown--blue"
          textCssClasses="btnDropDown__text"
        />
        <PrimaryBtnLink
          text="Reportar"
          cssClasses="warningBtn warningBtn--reportBook"
          tolink={`/report/${bookId}`}
        />
      </div>
    </Card>
  );
}
