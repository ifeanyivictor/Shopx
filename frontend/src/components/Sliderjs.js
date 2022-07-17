import React from "react";
import Slider from "react-slick";

const Main = [
  {
    image: "/images/banner1.jpg",
  },
  {
    image: "/images/banner2.jpg",
  },
  {
    image: "/images/banner3.jpg",
  },
];

function Sliderjs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {Main.map((b) => (
          <div className="slider-banner">
            <img src={b.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sliderjs;
