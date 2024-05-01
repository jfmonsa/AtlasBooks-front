import "./BookInfoContainer.css";
import BookImage from "../../assets/img/image1.png";
import DropDownButtonCompartir from "../../../components/dropDownButtons/dropDownShare";
import DropDownButtonDescarga from "../../../components/dropDownButtons/dropDownDownload";
import DropDownButtonListUser from "../../../components/dropDownButtons/dropDownListUser";
import {Link} from "react-router-dom";
import PrimaryBtnForm from "../../../components/buttons/primaryBtn/PrimaryBtnForm";
import Star from "../../assets/icons/Star.svg";
import coment from "../../assets/icons/comentario-icon.svg";
import heart from "../../assets/icons/corazon-icon.svg";
import mark from "../../assets/icons/marcador-icon.svg";

export function BookInfoContainer({
  bookName,
  authorName,
  rank,
  categories = "None",
  editory = "None",
  isbn = "None",
  fileType = "None",
  year = "None",
  languaje = "None",
  pages = "None",
  vol = 1,
  bookImg,
}) {
  return (
    <div className="book-container-info">
      <h1 className="top-container-info">Inicio / libro</h1>
      <div className="book-info-content">
        <img src={BookImage} alt="bookImage book-image" />
        <div className="book-container-info-rigth-part">
          <div>
            <h2 className="book-name">{bookName}</h2>
            <h3 className="book-author-name">{authorName}</h3>
            <div className="book-more-info">
              <img src={Star} alt="star-book" className="rank-star" />
              <p>{rank}/ 5.0</p>
              <img src={coment} alt="coment-book" className="more-images" />
              <p> 2 comentarios</p>
              <button className="more-buttons">
                <img src={heart} alt="heart" />
              </button>
              <button className="more-buttons">
                <img src={mark} alt="" />
              </button>
              <DropDownButtonListUser />
            </div>
            <h3>Sinopsis</h3>
            <p>
              Thousands of miles away from the small township of 'Salem's Lot,
              two terrified people, a man and a boy, still share the secrets of
              those clapboard houses and tree-lined streets. They must return to
              'Salem's Lot for a final confrontation with the unspeakable evil
              that lives on in the town.
            </p>
            <div className="book-specs">
              <div className="specs">
                <ul className="column">
                  <li>Categorias:</li>
                  <li>Publicador:</li>
                  <li>ISBN:</li>
                  <li>Archivo:</li>
                </ul>
                <ul className="column">
                  <li>{categories}</li>
                  <li>{editory}</li>
                  <li>{isbn}</li>
                  <li>{fileType}</li>
                </ul>
              </div>
              <div className="specs">
                <ul className="column">
                  <li>Año:</li>
                  <li>Lenguaje:</li>
                  <li>Paginas:</li>
                  <li>Volumen:</li>
                </ul>
                <ul className="column">
                  <li>{year}</li>
                  <li>{languaje}</li>
                  <li>{pages}</li>
                  <li>{vol}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Buttons">
        <DropDownButtonDescarga />
        <DropDownButtonCompartir />

        <Link to="/Report">
          <PrimaryBtnForm
            text="Reportar"
            cssClasses="formCustomBtn black2Btn"
          />
        </Link>
      </div>
    </div>
  );
}
