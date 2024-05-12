import "./searcher.css";
import PrimaryBtnForm from "../buttons/primaryBtn/PrimaryBtnForm";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import MultiSelectSearch from "../multiSelectSearch/MultiSelectSearch";
import MultiSelectNoSearch from "../multiSelecNoSearch/MultiSelectNoSearch";
import {SEARCH} from "../../utils/placeholder.js";

//Aux function for data of the select inputs
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
const mainLanguages = [
  {label: "English", value: "en"},
  {label: "Mandarin Chinese", value: "zh"},
  {label: "Spanish", value: "es"},
  {label: "Hindi", value: "hi"},
  {label: "Arabic", value: "ar"},
  {label: "Bengali", value: "bn"},
  {label: "Portuguese", value: "pt"},
  {label: "Russian", value: "ru"},
  {label: "Japanese", value: "ja"},
  {label: "German", value: "de"},
  // Add more languages as needed
];

//Main function
const Searcher = ({holder = SEARCH, toUrl}) => {
  //handle action (search)
  const navigate = useNavigate();
  const handleSearch = event => {
    event.preventDefault();
    navigate(toUrl /*,{replace: true}*/);
  };

  //Aux fuctions an states for inputs
  const [viewMoreOptions, setViewMoreOptions] = useState(false);
  // -- states for filters
  const [yearToOptions, setYearToOptions] = useState(Years);
  const [yearFrom, setYearFrom] = useState({value: "1789", label: "1789"});
  const [yearTo, setYearTo] = useState({value: "1789", label: "1789"});
  const [selectedLanguages, setSelectedLanguages] = useState([]);

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
  const handleSelectedLanguagesChange = selectedOption => {
    setSelectedLanguages(selectedOption);
    console.log(selectedOption);
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
        <div>
          <button
            className="searcher__moreOptsBtn"
            onClick={() => {
              setViewMoreOptions(!viewMoreOptions);
            }}
          >
            Más opciones
          </button>
          <div className="searcher__moreOpts">
            {viewMoreOptions && (
              <>
                <MultiSelectSearch
                  selectName="fromYear"
                  options={Years}
                  onChangeCallback={handleYearFromChange}
                  placeholder="Desde..."
                />
                <MultiSelectSearch
                  selectName="toYear"
                  options={yearToOptions}
                  onChangeCallback={handleYearToChange}
                  placeholder="Hasta..."
                />
                <MultiSelectNoSearch
                  labelText="Idiomas"
                  selectName="languages"
                  options={mainLanguages}
                  onChangeCallback={handleSelectedLanguagesChange}
                  placeholder="Idiomas..."
                />
              </>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Searcher;
