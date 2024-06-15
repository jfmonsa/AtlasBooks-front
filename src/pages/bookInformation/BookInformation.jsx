import "./bookInformation.css";
import Card from "../../components/card/Card.jsx";

//to fetch data
import {useParams} from "react-router-dom";
import baseUrl from "../../api/baseUrl.js";
import useFetch from "../../utils/useFetch.js";
import axios from "./../../api/axios.js";
import {useAuth} from "../../contexts/authContext.jsx";
import {rateBookApi} from "../../api/rateBook.js";

//Rate starts
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useEffect, useState} from "react";

//Book Info
import DropdownBtn from "../../components/dropDownButtons/DropdownBtn.jsx";
import AddBookToList from "../../components/addBookToList/AddBookToList.jsx";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";
// -- Download option's icon
import PdfIcon from "../../assets/icons/pdfIcon.svg";
import EpubIcon from "../../assets/icons/otherFile.svg";
// -- Share option's icon
import {FaRegHeart, FaHeart} from "react-icons/fa";
import Facebook from "../../assets/icons/Icon-facebook.svg";
import Instagram from "../../assets/icons/Icon-instagram.svg";
import Telegram from "../../assets/icons/Icon-telegram.svg";
import WhatsApp from "../../assets/icons/Icon-whatsapp.svg";
import Enlace from "../../assets/icons/Icon-link.svg";
import coment from "../../assets/icons/comentario-icon.svg";
import mark from "../../assets/icons/marcador-icon.svg";
//Relacionados
import Slider from "../../components/slider/Slider.jsx";
//Comments
import Comments from "./commentarySection/Comments.jsx";

//Aux functions
const HeartButton = ({className}) => {
  const [likeBook, setLikeBook] = useState(false);
  return likeBook ? (
    <FaHeart
      style={{
        color: "var(--error)",
      }}
      className={className}
      onClick={() => setLikeBook(false)}
    />
  ) : (
    <FaRegHeart onClick={() => setLikeBook(true)} className={className} />
  );
};

const BookInfoSectionSpecs = ({left, right}) => {
  return (
    <li className="specs__item">
      <span className="specs__item__left">{left}</span>
      <span className="specs__item__right">{right}</span>
    </li>
  );
};

const iconMap = {
  PDF: PdfIcon,
  EPUB: EpubIcon,
};

const BookInfoSection = ({
  bookId,
  bookName,
  authorName,
  rank,
  bookDescription = "None",
  categories = "None",
  editory = "None",
  isbn = "None",
  fileType = "None",
  year = "None",
  language = "None",
  pages = "None",
  vol = 1,
  bookImg,
  numComments,
  bookFiles,
}) => {
  const {isAuthenticated, user} = useAuth();

  const generateDownloadOptions = bookFiles => {
    return bookFiles.map(file => {
      const fileExtension = file.split(".").pop().toUpperCase();
      return {
        iconPath: iconMap[fileExtension],
        text: fileExtension,
        onClick: () => handleDownload(`/downloadBook/${file}`),
      };
    });
  };

  const handleDownload = async url => {
    if (!isAuthenticated) {
      alert("You must be logged in to download this file.");
    } else {
      try {
        const response = await axios.post(url, {
          bookId,
          userId: user.id,
        });
        const blob = new Blob([response.data]);
        const filename = url.split("/").pop(); // Obtenemos el nombre del archivo
        const objectURL = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = objectURL;
        a.download = filename; // Le asignamos el nombre al archivo descargado
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(objectURL);
      } catch (error) {
        console.error("Error downloading file:", error);
        alert("An error occurred while downloading the file.");
      }
    }
  };
  const shareOptions = [
    {toLink: "#", iconPath: Facebook, text: "Facebook"},
    {toLink: "#", iconPath: Instagram, text: "Instagram"},
    {toLink: "#", iconPath: Telegram, text: "Telegram"},
    {toLink: "#", iconPath: WhatsApp, text: "WhatsApp"},
    {toLink: "#", iconPath: Enlace, text: "Copiar enlace"},
  ];

  return (
    <Card h1Text="Inicio / libro">
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
              <span className="rank__real">{rank}</span>/
              <span className="rank__total">5.0</span>
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
                <AddBookToList
                  bookId={bookId}
                  isAuthenticated={isAuthenticated}
                  userId={user.id}
                />
              </div>
            </div>
          </div>
          <h3 className="bookInfo__right__sipnosisTitle">Sinopsis</h3>
          <p className="bookInfo__right__sipnosisText">{bookDescription}</p>
          <div className="bookInfo__specs">
            <ul className="specs">
              <BookInfoSectionSpecs left="Categorias:" right={categories} />
              <BookInfoSectionSpecs left="Publicador:" right={editory} />
              <BookInfoSectionSpecs left="ISBN:" right={isbn} />
              <BookInfoSectionSpecs left="Archivo:" right={fileType} />
            </ul>
            <ul className="specs">
              <BookInfoSectionSpecs left="Año:" right={year} />
              <BookInfoSectionSpecs left="Lenguaje:" right={language} />
              <BookInfoSectionSpecs left="Paginas:" right={pages} />
              <BookInfoSectionSpecs left="Volumen:" right={vol} />
            </ul>
          </div>
        </div>
      </div>
      <div className="bookInfo-btns">
        <DropdownBtn
          OnclickOptions={generateDownloadOptions(bookFiles)}
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
};

const RateStarsSection = ({id}) => {
  const [number, setNumber] = useState(0);
  const handleRate = async index => {
    setNumber(index);
    try {
      await rateBookApi({rate: index, idbook: id});
    } catch (error) {
      window.alert(error.response.data[0]);
    }
  };
  return (
    <Card h1Text="Califica este libro" h1Center id="rate-stars">
      <div className="stars_container">
        {Array(5)
          .fill()
          .map((_, index) =>
            number >= index + 1 ? (
              <AiFillStar
                key={index}
                className="stars"
                style={{color: "orange"}}
                onClick={() => handleRate(index + 1)}
              />
            ) : (
              <AiOutlineStar
                key={index}
                className="stars"
                style={{color: "black"}}
                onClick={() => handleRate(index + 1)}
              />
            ),
          )}
      </div>
    </Card>
  );
};

const BookPageRelated = ({books}) => {
  return (
    <Card h1Text="Relacionados" id="Books-relacionados">
      <Slider books={books} />
    </Card>
  );
};

const BookPageComments = ({comments, bookId}) => {
  return (
    <Card h1Text="Comentarios" id="comments">
      <Comments comments={comments} bookId={bookId} />
    </Card>
  );
};

// main function
const BookPage = () => {
  const {id} = useParams();

  // Fetch book data
  const {
    data: bookData,
    error: bookError,
    isPending: bookIsPending,
  } = useFetch(`${baseUrl}/books/${id}`);
  if (bookError) {
    return <p>{bookError}</p>;
  }
  if (bookIsPending) {
    return <p>Loading...</p>;
  }
  if (bookData) {
    return (
      <>
        <BookInfoSection
          bookId={id}
          isbn={bookData.isbn}
          bookName={bookData.title}
          bookDescription={bookData.description}
          year={bookData.year}
          vol={bookData.vol}
          pages={bookData.n_pages}
          editory={bookData.publisher}
          bookImg={`http://localhost:3000/storage/books/${bookData.cover_path}`}
          rank={bookData.book_rate}
          authorName={bookData.book_authors?.join(", ")}
          language={bookData.book_lang?.join(", ")}
          fileType={bookData.book_files_type?.join(", ")}
          categories={bookData.book_subcategories
            ?.concat(bookData?.book_category)
            .join(", ")}
          numComments={bookData.comments.length}
          bookFiles={bookData.book_files}
        />
        <RateStarsSection id={id} />
        <BookPageRelated books={bookData.related_books} />
        <BookPageComments
          comments={bookData.comments}
          bookId={bookData.idBook}
        />
      </>
    );
  }

  return null;
};

export default BookPage;
