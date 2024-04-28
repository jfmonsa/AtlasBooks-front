import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imagen1 from "../../assets/img/image1.png";
import Imagen2 from "../../assets/img/image2.png";
import Imagen3 from "../../assets/img/image3.png";
import Imagen4 from "../../assets/img/image4.png";
import Imagen5 from "../../assets/img/image5.png";
import Right from "../../assets/icons/icon-arrowRight.svg";
import Left from "../../assets/icons/icon-arrowLeft.svg";


const SliderRelacionados = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (

    <div className="slider-container1">
      <Slider {...settings}>
        <div className="card">
          <img src={Imagen1} alt="" />
          <h3>Autores</h3>
        </div>
        <div className="card">
          <img src={Imagen2} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen3} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen4} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen1} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen5} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen4} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen1} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen5} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen4} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen1} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen5} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen4} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen1} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen5} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen4} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen1} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
        <div className="card">
          <img src={Imagen5} alt="" />
          <h3>Titulo</h3>
          <h4>Autores</h4>
        </div>
      </Slider>
      <div className="Buttons">
        <a className="Left"><img src={Left} alt="" /></a>
        <a className="Right"><img src={Right} alt="" /></a>
      </div>
    </div>

  )
}

export default SliderRelacionados
