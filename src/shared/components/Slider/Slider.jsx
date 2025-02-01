import "./Slider.css";
import BaseSlider from "react-slick";
import { Book } from "@components/Book/Book.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowLeft from "@assets/icons/icon-arrowLeft.svg";
import ArrowRight from "@assets/icons/icon-arrowRight.svg";

export function Slider({ books }) {
  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        onClick={onClick}
        className={`arrow ${className}`}
        src={ArrowRight}
        alt="Slider arrow right"
      />
    );
  };

  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        onClick={onClick}
        className={`arrow ${className}`}
        src={ArrowLeft}
        alt="Slider arrow left"
      />
    );
  };

  const settings = {
    draggable: false,
    infinite: books.length > 6,
    speed: 500,
    slidesToShow: Math.min(books.length, 6),
    slidesToScroll: Math.min(books.length, 6),
    prevArrow: <SampleNextArrow to="next" />,
    nextArrow: <SamplePrevArrow to="prev" />,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          infinite: books.length > 6,
          slidesToShow: Math.min(books.length, 6),
          slidesToScroll: Math.min(books.length, 6),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: books.length > 5,
          slidesToShow: Math.min(books.length, 5),
          slidesToScroll: Math.min(books.length, 5),
        },
      },
      {
        breakpoint: 800,
        settings: {
          infinite: books.length > 4,
          slidesToShow: Math.min(books.length, 4),
          slidesToScroll: Math.min(books.length, 4),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(books.length, 3),
          slidesToScroll: Math.min(books.length, 3),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(books.length, 2),
          slidesToScroll: Math.min(books.length, 2),
        },
      },
    ],
  };

  return (
    <>
      {books.length > 0 ? (
        <BaseSlider {...settings}>
          {Array.isArray(books) && books.length > 0 ? (
            books.map((book, index) => (
              <Book
                key={index}
                bookId={book.bookId}
                authors={book.authors}
                title={book.title}
                img={book.pathBookCover}
              />
            ))
          ) : (
            <p>No books available</p>
          )}
        </BaseSlider>
      ) : (
        <p>
          You haven’t downloaded any books yet. Explore our library and find
          your next great read!
        </p>
      )}
    </>
  );
}
