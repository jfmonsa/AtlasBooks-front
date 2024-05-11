import "./searcher.css";
import PrimaryBtnForm from "../buttons/primaryBtn/PrimaryBtnForm";
import {useNavigate} from "react-router-dom";
import DropdownBtn from "../dropDownButtons/DropdownBtn";
import {useState} from "react";
import timeIcon from "../../../src/assets/icons/time-svgrepo-com.svg";
import languajeIcon from "../../../src/assets/icons/language-svgrepo-com.svg";
import fileIcon from "../../../src/assets/icons/file-zipper-svgrepo-com.svg";
import MultiSelectSearch from "../multiSelectSearch/MultiSelectSearch";

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

const genYearArray = (to = 1799) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= to; year--) {
    // append the year generated to the years array
    years.push({value: `${year}`, label: `${year}`});
  }
  return years;
};

const Years = genYearArray();

//Main functions
const Searcher = ({holder, toUrl}) => {
  const navigate = useNavigate();
  const handleSearch = event => {
    event.preventDefault();
    navigate(toUrl /*,{replace: true}*/);
  };

  //Aux fuctions an states for inputs
  const [viewMoreOptions, setViewMoreOptions] = useState(false);
  const [yearFrom, setYearFrom] = useState({value: "1789", label: "1789"});
  const [yearTo, setYearTo] = useState({value: "1789", label: "1789"});
  const [yearToOptions, setYearToOptions] = useState([]);

  const handleYearFromChange = selectedOption => {
    setYearFrom(selectedOption);
    setYearToOptions(
      Years.filter(
        year => parseInt(year.value) >= parseInt(selectedOption.value),
      ),
    );
  };
  const handleYearToChange = selectedOption => {
    setYearTo(selectedOption);
  };

  return (
    <section className="searcher">
      <form onSubmit={handleSearch}>
        <div className="searcher__inputContainer">
          <input type="text" className="searcher__input" placeholder={holder} />
          <PrimaryBtnForm
            text="Buscar"
            cssClasses=" searcher__button black2Btn"
          />
        </div>
        <div className="searcher__moreOptions">
          <button
            className="searcher__moreOpts"
            onClick={() => {
              setViewMoreOptions(!viewMoreOptions);
            }}
          >
            Más opciones
          </button>
          {viewMoreOptions && (
            <>
              <MultiSelectSearch
                labelText="Año desde"
                selectName="fromYear"
                options={Years}
                onChangeCallback={handleYearFromChange}
              />
              <MultiSelectSearch
                labelText="Año hasta"
                selectName="toYear"
                options={yearToOptions}
                onChangeCallback={handleYearToChange}
              />
            </>
          )}
        </div>
      </form>
    </section>
  );
};

export default Searcher;
