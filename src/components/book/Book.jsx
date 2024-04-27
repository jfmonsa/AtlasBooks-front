import "./book.css"

const Book = ({title,autor,img}) => {
return (
    <section className="bookContainer">
        <img className="img" src={img}/>
        <div>
        <h1 className="tittleContainer">{title}</h1>
        </div>
        <div>
        <h2 className="autorContainer">{autor}</h2>
        </div>
    </section>


);

};

export default Book;