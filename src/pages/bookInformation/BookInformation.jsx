import "./bookInformation.css";
import Card from "../../components/card/Card.jsx";

//to fetch data
import {useParams} from "react-router-dom";
import useFetch from "../../utils/useFetch.js";

//Rate starts
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useState} from "react";

//Book Info
import DropdownBtn from "../../components/dropDownButtons/DropdownBtn.jsx";
import IconDropDown from "../../components/iconDropDown/IconDropDown.jsx";
import {FaRegBookmark} from "react-icons/fa";
import PrimaryBtnLink from "../../components/buttons/primaryBtn/PrimaryBtnLink.jsx";
// -- Download option's icon
import Mega from "../../assets/icons/Icon-mega.svg";
import Mediafire from "../../assets/icons/Icon-mediafire.svg";
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

const BookInfoSection = ({
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
}) => {
  const shareOptions = [
    {toLink: "#", iconPath: Facebook, text: "Facebook"},
    {toLink: "#", iconPath: Instagram, text: "Instagram"},
    {toLink: "#", iconPath: Telegram, text: "Telegram"},
    {toLink: "#", iconPath: WhatsApp, text: "WhatsApp"},
    {toLink: "#", iconPath: Enlace, text: "Copiar enlace"},
    // Puedes agregar más opciones aquí
  ];
  const downloadOptions = [
    {toLink: "#", iconPath: Mega, text: "Mega"},
    {toLink: "#", iconPath: Mediafire, text: "Mediafire"},
  ];
  const listsOpts = [
    {toLink: "#", iconPath: mark, text: "Lista Punk"},
    {toLink: "#", iconPath: mark, text: "Lista Punk"},
    {toLink: "#", iconPath: mark, text: "Lista Punk"},
    {toLink: "#", iconPath: mark, text: "Lista Punk"},
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
                <IconDropDown
                  icon={<FaRegBookmark className="relevantInfo__icon2" />}
                  options={listsOpts}
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
          options={downloadOptions}
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
          tolink="/report"
        />
      </div>
    </Card>
  );
};

const RateStarsSection = () => {
  const [number, setNumber] = useState(0);

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
                onClick={() => setNumber(index + 1)}
              />
            ) : (
              <AiOutlineStar
                key={index}
                className="stars"
                style={{color: "black"}}
                onClick={() => setNumber(index + 1)}
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

const BookPageComments = ({comments}) => {
  return (
    <Card h1Text="Comentarios" id="comments">
      <Comments />
    </Card>
  );
};

//main function
const BookPage = () => {
  const {id} = useParams();

  const {data, error, isPending} = useFetch(
    `http://localhost:3000/api/books/${id}`,
  );

  if (error) {
    return <div>{error}</div>;
  }
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (data) {
    return (
      <>
        <BookInfoSection
          isbn={data.isbn}
          bookName={data.title}
          bookDescription={data.description}
          year={data.year}
          vol={data.vol}
          pages={data.n_pages}
          editory={data.publisher}
          bookImg={`http://localhost:3000/storage/books/${data.cover_path}`}
          rank={data.book_rate}
          authorName={data.book_authors.join(", ")}
          language={data.book_lang.join(", ")}
          //TODO: pass files
          fileType={data.book_files_type.join(", ")}
          categories={data.book_subcategories.join(", ")}
          // TODO: edit this when edit comments
          numComments={2}
        />
        <RateStarsSection />
        <BookPageRelated books={data.related_books} />
        <BookPageComments comments={null} />
      </>
    );
  }
};

export default BookPage;
