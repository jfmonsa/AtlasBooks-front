import "./searcher.css";
import PrimaryBtnForm from "../buttons/primaryBtn/PrimaryBtnForm";
import {useNavigate} from "react-router-dom";
import DropdownBtn from "../dropDownButtons/DropdownBtn";
import {useState} from "react";
import timeIcon from "../../../src/assets/icons/time-svgrepo-com.svg";
import languajeIcon from "../../../src/assets/icons/language-svgrepo-com.svg";
import fileIcon from "../../../src/assets/icons/file-zipper-svgrepo-com.svg";
const Searcher = ({type = "text", holder, toNavigate}) => {
  const navigate = useNavigate();

  const handleSearch = event => {
    event.preventDefault();
    navigate(toNavigate /*,{replace: true}*/);
  };

  const [viewMoreOptions, setViewMoreOptions] = useState(false);
  const handleMoreOptions = () => {
    setViewMoreOptions(!viewMoreOptions);
  };

  const yearOptions = [
    {toLink: "#", iconPath: timeIcon, text: "2010"},
    {toLink: "#", iconPath: timeIcon, text: "2009"},
    {toLink: "#", iconPath: timeIcon, text: "2008"},
    {toLink: "#", iconPath: timeIcon, text: "2007"},
  ];

  const languajes = [
    {toLink: "#", iconPath: languajeIcon, text: "Español"},
    {toLink: "#", iconPath: languajeIcon, text: "Ingles"},
    {toLink: "#", iconPath: languajeIcon, text: "Aleman"},
    {toLink: "#", iconPath: languajeIcon, text: "Frances"},
    {toLink: "#", iconPath: languajeIcon, text: "Italiano"},
  ];
  const filesFormat = [
      {toLink: "#", iconPath: fileIcon, text: "PDF"},
      {toLink: "#", iconPath: fileIcon, text: "Ebook"},
    ];

  return (
    <section>
      <form className={"searcher"} onSubmit={handleSearch}>
        <input type={type} className={"searcher__input"} placeholder={holder} />
        <PrimaryBtnForm
          text="Buscar"
          cssClasses=" searcher__button black2Btn"
        />
        {viewMoreOptions && (
          <div className="more-options__buttons">
            <DropdownBtn
              boxCssClasses="btnDropDown btnDropDown--purple"
              textCssClasses="btnDropDown__text"
              text={"Año desde..."}
              options={yearOptions}
            ></DropdownBtn>
            <DropdownBtn
              boxCssClasses="btnDropDown btnDropDown--purple"
              textCssClasses="btnDropDown__text"
              text={"Año hasta..."}
              options={yearOptions}
            ></DropdownBtn>
            <DropdownBtn
              boxCssClasses="btnDropDown btnDropDown--purple"
              textCssClasses="btnDropDown__text"
              text={"Lenguaje..."}
              options={languajes}
            ></DropdownBtn>
            <DropdownBtn
              boxCssClasses="btnDropDown btnDropDown--purple"
              textCssClasses="btnDropDown__text"
              text={"Formato..."}
              options={filesFormat}
            ></DropdownBtn>
          </div>
        )}
      </form>
      <PrimaryBtnForm
        cssClasses=" more-options__button black2Btn"
        onClick={handleMoreOptions}
        text={"Más opciones..."}
      />
    </section>
  );
};

export default Searcher;
