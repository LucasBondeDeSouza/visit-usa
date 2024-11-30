import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FloridaImg from "../../public/images/florida.WEBP";
import NewYorkImg from "../../public/images/new-york.jpg";
import California from "../../public/images/california.WEBP";

export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const slides = [
    {
      image: California,
      city: "Califórnia",
    },
    {
      image: FloridaImg,
      city: "Flórida",
    },
    {
      image: NewYorkImg,
      city: "New York",
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};