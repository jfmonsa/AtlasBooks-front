import "./bookInformation.css";
import Card from "../../components/card/Card.jsx";
import Slider from "../../components/slider/Slider.jsx";

//Rate starts
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useState} from "react";

//Book Info
import BookImage from "../../assets/img/image1.png";
import DropDownButtonCompartir from "../../components/dropDownButtons/dropDownShare";
import DropDownButtonDescarga from "../../components/dropDownButtons/dropDownDownload";
import DropDownButtonListUser from "../../components/dropDownButtons/dropDownListUser";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm";
import Star from "../../assets/icons/Star.svg";
import coment from "../../assets/icons/comentario-icon.svg";
import heart from "../../assets/icons/corazon-icon.svg";
import mark from "../../assets/icons/marcador-icon.svg";

//Aux functions
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
  return (
    <Card h1Text="Inicio / libro">
      <div className="bookInfo">
        <img
          className="bookInfo__img"
          src={BookImage}
          alt={`portada del libro ${bookName}`}
        />
        <div className="bookInfo__right">
          <h2 className="bookInfo__right__name">{bookName}</h2>
          <h3 className="bookInfo__right__author">{authorName}</h3>

          <div className="relevantInfo">
            <div className="relevantInfo__subCont">
              <img className="relevantInfo__icon" src={Star} alt="star-book" />
              <span className="rank__real">{rank}</span> /
              <span className="rank__total"> 5.0</span>
            </div>

            <div className="relevantInfo__subCont">
              <div>
                <img
                  src={coment}
                  alt="coment-book"
                  className="relevantInfo__icon"
                />
                {/* TODO: Hacer que al clickear esto te redirija a la sección de comentarios */}
                <span> {numComments} comentarios</span>
              </div>

              <div>
                <img className="relevantInfo__icon" src={heart} alt="heart" />
                <img className="relevantInfo__icon" src={mark} alt="" />
              </div>
              {/* <DropDownButtonListUser /> */}
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
              <BookInfoSectionSpecs left="Publicador:" right={categories} />
              <BookInfoSectionSpecs left="ISBN:" right={categories} />
              <BookInfoSectionSpecs left="Archivo:" right={categories} />
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
      {/* <div className="Buttons">
        <DropDownButtonDescarga />
        <DropDownButtonCompartir />
        <PrimaryBtnForm text="Reportar" cssClasses="formCustomBtn black2Btn" />
      </div> */}
    </Card>
  );
};

const RateStarsSection = ({}) => {
  const [number, setNumber] = useState(0);

  return (
    <Card h1Text="Califica este libro" h1Center>
      <div className="stars_container">
        {Array(5)
          .fill()
          .map((_, index) =>
            number >= index + 1 ? (
              <AiFillStar
                className="stars"
                style={{color: "orange"}}
                onClick={() => setNumber(index + 1)}
              />
            ) : (
              <AiOutlineStar
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
        bookName={"Salem's Lot"}
        authorName={"King Stephen"}
        rank={"5.0"}
      />

      {/* <RateStarsSection /> */}

      {/*
      <Card h1Text="Relacionados" id="Books-relacionados">
        <Slider />
      </Card>

      <Card>
        <Comentarios userId={"1"} userName={"Jose"}></Comentarios>
      </Card> */}
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
