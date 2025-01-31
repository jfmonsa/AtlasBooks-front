import "./GridBooks.css";
import { Book } from "@components/Book/Book.jsx";

export function GridBooks({ books }) {
  if (!books) {
    return <div>No books in list. Please add books.</div>;
  }
  return (
    <section className="gridBooks">
      <div className="gridBooks__grid">
        {books.map((book) => (
          <Book
            bookId={book.id || book.bookId}
            key={book.id || book.bookId}
            title={book.title}
            authors={book.authors}
            img={book.pathBookCover || book.coverImgPath}
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
}
