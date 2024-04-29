import BookImage from "../../assets/img/image1.png";
import DropDownButtonCompartir from "../dropDownButtons/dropDownShare";
import DropDownButtonDescarga from "../dropDownButtons/dropDownDownload";
import DropDownButtonListUser from "../dropDownButtons/dropDownListUser";
import {Link} from "react-router-dom";
import PrimaryBtnForm from "../buttons/primaryBtn/PrimaryBtnForm";
import "./BookInfoContainer.css";
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
}) {
  return (
    <div className="book-container-info">
      <div className="top-container-info">
        <h1>Inicio / Libro</h1>
      </div>
      <div className="book-info-content">
        <div className="book-image">
          <img src={BookImage} alt="bookImage" />
        </div>
        <div className="book-container-info-rigth-part">
          <div>
            <h2 className="book-name">{bookName}</h2>
            <h3 className="book-author-name">{authorName}</h3>
            <div className="book-more-info">
              <div>
                <img src={Star} alt="star-book" className="rank-star" />
              </div>
              <div>{rank}/ 5.0</div>
              <div>
                <img src={coment} alt="coment-book" className="more-images" />
              </div>
              <div> 2 comentarios</div>
              <button className="more-buttons">
                <img src={heart} alt="heart" />
              </button>
              <button className="more-buttons">
                <img src={mark} alt="" />
              </button>
                <DropDownButtonListUser />
            </div>
            <h3>Sinopsis</h3>
            <h4 className="sinopsis">
              Thousands of miles away from the small township of 'Salem's Lot,
              two terrified people, a man and a boy, still share the secrets of
              those clapboard houses and tree-lined streets. They must return to
              'Salem's Lot for a final confrontation with the unspeakable evil
              that lives on in the town.
            </h4>
            <div className="book-specs">
              <div className="specs">
                <div className="column">
                  <p>Categorias:</p>
                  <p>Publicador:</p>
                  <p>ISBN:</p>
                  <p>Archivo:</p>
                </div>
                <div className="column">
                  <p>{categories}</p>
                  <p>{editory}</p>
                  <p>{isbn}</p>
                  <p>{fileType}</p>
                </div>
              </div>
              <div className="specs">
                <div className="column">
                  <p>Año:</p>
                  <p>Lenguaje:</p>
                  <p>Paginas:</p>
                  <p>Volumen:</p>
                </div>
                <dir className="column">
                  <p>{year}</p>
                  <p>{languaje}</p>
                  <p>{pages}</p>
                  <p>{vol}</p>
                </dir>
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
