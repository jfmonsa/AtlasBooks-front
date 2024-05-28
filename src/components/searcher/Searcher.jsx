import "./searcher.css";
import PrimaryBtnForm from "../buttons/primaryBtn/PrimaryBtnForm";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import MultiSelectSearch from "../multiSelectSearch/MultiSelectSearch";
import MultiSelectNoSearch from "../multiSelecNoSearch/MultiSelectNoSearch";
import {SEARCH} from "../../utils/placeholder.js";
import axios from 'axios';
import Book from "../book/Book.jsx";


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
    {label:"English", value: "English"},
    {label:"spanish", value: "spanish"},

    
    // Add more languages as needed
];

//Main function
const Searcher = ({holder = SEARCH, toUrl}) => {
    //handle action (search)
    
    const navigate = useNavigate();
    const handleSearch = async (event) => {
       
        event.preventDefault();
        await booksResults(search,yearFrom.value,yearTo.value, selectedLanguages[0] ? selectedLanguages[0].label : '');
       
        navigate(toUrl /*,{replace: true}*/);
    };


    //Aux fuctions an states for inputs
    const [viewMoreOptions, setViewMoreOptions] = useState(false);
    // -- states for filters
    const [yearToOptions, setYearToOptions] = useState(Years);
    const [yearFrom, setYearFrom] = useState({value: "1789", label: "1789"});
    const [yearTo, setYearTo] = useState({value: "1789", label: "1789"});
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [search, setSearch] = useState('');
    



    const booksResults = async () => {
        try {
          const response = await axios.get("http://localhost:3000/api/searchFilter", {
            params: {
              search: search,
              language: selectedLanguages[0].value ? selectedLanguages.map(lang => lang.value).join(',') : '',
              yearFrom: yearFrom ? yearFrom.value : '',
              yearTo: yearTo ? yearTo.value : ''
            }
          });
          const data = response.data;
          console.log(data);
          
        } catch (error) {
          console.error(error);
        }
      }

     

   const handleTextChange = ({target}) => {
        setSearch(target.value);
   }

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

    
    console.log( search,yearFrom.value,yearTo.value,selectedLanguages[0] ? selectedLanguages[0].label : ''
    );
    
    return (
        <section className="searcher">
          
            <form onSubmit={handleSearch}>
                <div className="searcher__inputContainer">
                    <input type="text" className="searcher__input" placeholder={holder} onChange={handleTextChange}/>
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

