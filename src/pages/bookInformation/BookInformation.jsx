import "./bookInformation.css";
import Card from "../../components/card/Card.jsx";

//to fetch data
import {useParams} from "react-router-dom";
import useFetch from "../../utils/useFetch.js";
import axios from "./../../api/axios.js";
import {useAuth} from "../../contexts/authContext.jsx";
import {rateBookApi,getBookRatingApi} from "../../api/rateBook.js";

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



const BookInfoSection = (
  
  {
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
  bookFiles ,
}) => {
  const {isAuthenticated, user} = useAuth();
  const generateDownloadOptions = bookFiles => {
    return bookFiles.map(file => {
      const fileExtension = file.split(".").pop().toUpperCase();
      return {
        iconPath: iconMap[fileExtension],
        text: fileExtension,
        onClick: () => handleDownload(`/book/download`),
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
          filename,
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

  const [rate, setRate] = useState(null);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const getRate = async () => {
      try {
        const response = await getBookRatingApi(id);
        setRate(response.data.data.rate);
      } catch (error) {
        console.error("Error fetching book rating:", error);
      }
    };

    getRate();
  }, [id]);
    console.log(rate);
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
  } = useFetch(`/book/${id}`);
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
        isbn={bookData.data.isbn || "None"}
        bookName={bookData.data.title}
        bookDescription={bookData.data.description}
        year={bookData.data.yearReleased}
        vol={bookData.data.volume || "None"}
        pages={bookData.data.numberOfPages || "None"}
        editory={bookData.data.publisher || "None"}
        bookImg={bookData.data.coverImgPath}
        rank={bookData.data.rate}
        authorName={bookData.data.authors?.join(", ")}
        language={bookData.data.languages?.join(", ")}
        fileType={bookData.data.fileExtensions?.join(", ")}
        categories={bookData.data.subcategories.subcategories
        ?.concat(bookData.data?.subcategories.category)
        .join(", ")}
        numComments={bookData.data.comments.length}
        bookFiles={bookData.data.files}
      />
      <RateStarsSection id={bookData.data.id} />
      <BookPageRelated books={bookData.data.relatedBooks} />
      <BookPageComments
        comments={bookData.data.comments}
        bookId={bookData.data.id}
      />
      </>
    );
  }

  return null;
};

export default BookPage;
