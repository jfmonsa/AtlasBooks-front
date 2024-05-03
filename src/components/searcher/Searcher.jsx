import "./searcher.css";
import PrimaryBtnForm from "../buttons/primaryBtn/PrimaryBtnForm";
import {useNavigate} from "react-router-dom";

const Searcher = ({type = "text", holder, toNavigate}) => {
  const navigate = useNavigate();

  const handleSearch = event => {
    event.preventDefault();
    navigate(toNavigate /*,{replace: true}*/);
  };

  return (
    <form className={"searcher"} onSubmit={handleSearch}>
      <input type={type} className={"searcher__input"} placeholder={holder} />
      <PrimaryBtnForm text="Buscar" cssClasses=" searcher__button black2Btn" />
    </form>
  );
};

export default Searcher;
