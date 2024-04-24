import "./Searcher.css";

const Searcher = ({type,holder}) =>{
return (
    <div className={"searcher_container"}>
        <input
        type = {type}
        className={"searcher"}
        placeholder={holder}
        />
        <button className={"search_button"}>
            <p>
                Buscar
            </p>
        </button>       
    </div>    
    );
};

export default Searcher;