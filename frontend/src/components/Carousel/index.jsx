import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HollywoodImg from "../../public/images/hollywood.jpg";

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
      image: "https://via.placeholder.com/800x400?text=Slide+1",
      city: "New York",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Slide+2",
      city: "Los Angeles",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Slide+3",
      city: "Chicago",
    },
    {
      image: HollywoodImg,
      city: "Los Angeles, Califórnia",
    },
  ];

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={slide.image}
              alt={slide.city}
              style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20%", // Ajuste a posição do texto
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
                textAlign: "center",
                fontSize: "24px",
                whiteSpace: "nowrap",
              }}
            >
              {slide.city}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};