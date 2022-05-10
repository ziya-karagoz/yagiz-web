import Slider from "react-slick";
import "../styles/carouselstyle.scss";
import React from "react";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <h2>Pause On Hover</h2>
      <Slider {...settings} className='carousel-self'>
        <div className='carousel-item'>
          <h3>1</h3>
        </div>
        <div className='carousel-item'>
          <h3>2</h3>
        </div>
        <div className='carousel-item'>
          <h3>3</h3>
        </div>
        <div className='carousel-item'>
          <h3>4</h3>
        </div>
        <div className='carousel-item'>
          <h3>5</h3>
        </div>
        <div className='carousel-item'>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
