import "./searcher.css";
import PrimaryBtnForm from "../buttons/primaryBtn/PrimaryBtnForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import { SEARCH } from "../../utils/placeholder.js";
import { mainLanguages } from "../../utils/languagesArray.js";

//Aux function for data of the select inputs
const genYearArray = (to = 1799) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= to; year--) {
    // append the year generated to the years array
    years.push({ value: `${year}`, label: `${year}` });
  }
  return years;
};
const Years = genYearArray();

//Main function
const Searcher = ({ holder = SEARCH }) => {
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    navigate(
      `/search-results?search=${search}&yearFrom=${yearFrom.value}&yearTo=${yearTo.value}&language=${selectedLanguages[0] ? selectedLanguages[0].label : ""}`,
    );
  };

  // localhost:3000/api/searchFilter?search=a&language=spanish&yearTo=2020&yearFrom=2008
  //Aux fuctions an states for inputs
  const [viewMoreOptions, setViewMoreOptions] = useState(false);
  // -- states for filters
  const [yearToOptions, setYearToOptions] = useState(Years);
  const [yearFrom, setYearFrom] = useState({ value: "1", label: "1" });
  const [yearTo, setYearTo] = useState({ value: "2030", label: "2030" });
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [search, setSearch] = useState("");

  const handleTextChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleYearFromChange = (selectedOption) => {
    setYearFrom(selectedOption);
    setYearToOptions(
      Years.filter(
        (year) => parseInt(year.value) >= parseInt(selectedOption.value),
      ),
    );
  };
  const handleYearToChange = (selectedOption) => {
    setYearTo(selectedOption);
  };
  const handleSelectedLanguagesChange = (selectedOption) => {
    setSelectedLanguages(selectedOption);
  };

  return (
    <section className="searcher">
      <form onSubmit={handleSearch}>
        <div className="searcher__inputContainer">
          <input
            type="text"
            className="searcher__input"
            placeholder={holder}
            onChange={handleTextChange}
          />
          <PrimaryBtnForm
            text="Buscar"
            cssClasses=" searcher__button black2Btn"
          />
        </div>
        <div>
          <button
            type="button"
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
                <Select
                  options={Years}
                  onChange={handleYearFromChange}
                  placeholder="Desde..."
                  name="fromYear"
                  isSearchable
                  classNamePrefix="select"
                />
                <Select
                  options={yearToOptions}
                  onChange={handleYearToChange}
                  placeholder="Hasta..."
                  name="toYear"
                  isSearchable
                  classNamePrefix="select"
                />
                <Select
                  isMulti
                  isSearchable
                  isClearable
                  options={mainLanguages}
                  onChange={handleSelectedLanguagesChange}
                  placeholder="Idiomas..."
                  name="languages"
                  classNamePrefix="select"
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
