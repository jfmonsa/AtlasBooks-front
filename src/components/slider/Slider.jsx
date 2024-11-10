import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "../../assets/icons/icon-arrowLeft.svg";
import ArrowRight from "../../assets/icons/icon-arrowRight.svg";
import Book from "../book/Book.jsx";

const CustomSlider = ({ books }) => {
  const SamplePrevArrow = props => {
    const {className, onClick} = props;
    return (
      <img
        onClick={onClick}
        className={`arrow ${className}`}
        src={ArrowRight}
        alt="Slider arrow right"
      />
    );
  };

  const SampleNextArrow = props => {
    const {className, onClick} = props;
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
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    centerPadding: 30,
    initialSlide: 0,
    className: "slides",
    prevArrow: <SampleNextArrow to="next" />,
    nextArrow: <SamplePrevArrow to="prev" />,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
console.log(books)
  return (
    <>
      <Slider {...settings}>
        {Array.isArray(books) && books.length > 0 ? (
          books.map(book => (
            <Book
              key={book.bookId}
              bookId={book.bookId}
              authors={book.authors}
              title={book.title}
              img={book.pathBookCover}
            />
          ))
        ) : (
          <p>No books available</p>
        )}
      </Slider>
    </>
  );
};

export default CustomSlider;
