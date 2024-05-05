import "./bookInformation.css";
import Card from "../../components/card/Card.jsx";

//Rate starts
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useState} from "react";

//Book Info
import BookImage from "../../assets/img/image1.png";
import DropdownBtn from "../../components/dropDownButtons/DropdownBtn.jsx";
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
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm";
import coment from "../../assets/icons/comentario-icon.svg";
import heart from "../../assets/icons/corazon-icon.svg";
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
  const moreOpts = [{toLink: "#", iconPath: mark, text: "Lista Punk"}];

  /*
  <DropdownItemListUser toLink="" text="Favoritos"></DropdownItemListUser>
        <DropdownItemListUser toLink="" text="Leyendo"></DropdownItemListUser>
  */

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
                <img
                  className="relevantInfo__icon2"
                  src={mark}
                  alt="icon to save this book in whistlist"
                />
              </div>
            </div>
          </div>
          <h3 className="bookInfo__right__sipnosisTitle">Sinopsis</h3>
          <p className="bookInfo__right__sipnosisText">
            Thousands of miles away from the small township of Salem's Lot, two
            terrified people, a man and a boy, still share the secrets of those
            clapboard houses and tree-lined streets. They must return to
            'Salem's Lot for a final confrontation with the unspeakable evil
            that lives on in the town.
          </p>
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
        {/* Hacer una card dialog mejor para esta
        
        <DropdownBtn
          options={moreOpts}
          text="Guardar más..."
          boxCssClasses="btnDropDown--small btnDropDown--outline btnDropDown--moreOptions"
          textCssClasses="btnDropDown__text"
        /> */}
        <PrimaryBtnForm
          text="Reportar"
          cssClasses="warningBtn warningBtn--reportBook"
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

//main function
const BookPage = () => {
  return (
    <>
      <BookInfoSection
        bookName="Salem's Lot"
        authorName="King Stephen"
        rank="5.0"
        categories="Horror, crime"
        editory="Radom Peguin"
        isbn="978-3-16-148410-0"
        fileType="EPUB"
        year="1987"
        language="English"
        pages="431"
        vol={3}
        bookImg={BookImage}
        numComments={2}
      />

      <RateStarsSection />

      <Card h1Text="Relacionados" id="Books-relacionados">
        <Slider />
      </Card>
      <Card h1Text="Comentarios" id="comments">
        <Comments />
        {/* <Comentarios userId={"1"} userName={"Jose"}></Comentarios> */}
      </Card>
    </>
  );
};

/*
const Card = ({
  h1Text,
  children,
  customCssClassesSection = "",
  customCssClasesH1 = "",
  id,
  h1Center = false,
  cardDialog = false,
})
*/

export default BookPage;
