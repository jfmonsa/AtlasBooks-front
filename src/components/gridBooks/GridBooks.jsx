import "./gridBooks.css";
import Book from "../book/Book.jsx";

const GridBooks = ({books}) => {
  return (
    <section className="gridBooks">
      <div className="gridBooks__grid">
        {books.map(book => (
          <Book
            bookId={book.bookId}
            key={book.bookId}
            title={book.title}
            authors={book.authors}
            img={book.pathBookCover}
          />
        ))}
      </div>
      <div className="gridBooks__loadMoreContainer">
        <button className="formCustomBtn gridBooks__loadMoreBtn baseBtn black2Btn">
          Ver mas
        </button>
      </div>
    </section>
  );
};
export default GridBooks;
