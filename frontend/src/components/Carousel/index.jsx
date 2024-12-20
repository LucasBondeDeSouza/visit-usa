import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Florida from "../../public/images/florida.webp";
import California from "../../public/images/california.webp";
import NewYork from "../../public/images/new-york.webp";

export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const slides = [
    {
      image: California,
      city: "Califórnia",
      description: "Ponte Golden Gate, localizada em São Francisco.",
    },
    {
      image: Florida,
      city: "Flórida",
      description: "Miami Beach, um dos destinos mais icônicos da Flórida",
    },
    {
      image: NewYork,
      city: "Nova York",
      description: "Times Square, o coração vibrante da cidade que nunca dorme",
    },
  ];

  return (
    <div className="carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img className="carousel-image" src={slide.image} alt={slide.city} />
            
            <div className="carousel-caption">
                <h1>{slide.city}</h1>
                <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};