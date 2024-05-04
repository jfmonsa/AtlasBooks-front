import "./gridBooks.css";
import Book from "../book/Book.jsx";

const GridBooks = ({books}) => {
  return (
    <>
      <div className="gridBooks">
        {/* list rendering  */}
        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            autor={book.autor}
            img={book.img}
          />
        ))}
      </div>
      <div className="gridBooks__loadMoreContainer">
        <button className="formCustomBtn gridBooks__loadMoreBtn baseBtn black2Btn">
          Ver mas
        </button>
      </div>
    </>
  );
};
export default GridBooks;
