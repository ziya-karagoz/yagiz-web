import React, { Component } from "react";
import Slider from "react-slick";

const CarouselService = (speed, autoplaySpeed) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: speed || 5000,
    autoplaySpeed: autoplaySpeed || 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div className='categories-main-carousel'>
          <img
            style={{
              width: "100%",
              margin: "0px 5px 0px 0px",
              objectFit: "cover",
            }}
            src='logobuyuk.png'
            alt='test'
          />
        </div>
        <div className='categories-main-carousel'>
          <img
            style={{
              width: "100%",
              margin: "0px 5px 0px 0px",
              objectFit: "cover",
            }}
            src='logobuyuk.png'
            alt='test'
          />
        </div>
        <div className='categories-main-carousel'>
          <img
            style={{
              width: "100%",
              margin: "0px 5px 0px 0px",
              objectFit: "cover",
            }}
            src='logobuyuk.png'
            alt='test'
          />
        </div>
        <div className='categories-main-carousel'>
          <img
            style={{
              width: "100%",
              margin: "0px 5px 0px 0px",
              objectFit: "cover",
            }}
            src='logobuyuk.png'
            alt='test'
          />
        </div>
        <div className='categories-main-carousel'>
          <img
            style={{
              width: "100%",
              margin: "0px 5px 0px 0px",
              objectFit: "cover",
            }}
            src='logobuyuk.png'
            alt='test'
          />
        </div>
        <div className='categories-main-carousel'>
          <img
            style={{
              width: "100%",
              margin: "0px 5px 0px 0px",
              objectFit: "cover",
            }}
            src='logobuyuk.png'
            alt='test'
          />
        </div>
        <div className='categories-main-carousel'>
          <img
            style={{
              width: "100%",
              margin: "0px 5px 0px 0px",
              objectFit: "cover",
            }}
            src='logobuyuk.png'
            alt='test'
          />
        </div>
        <div className='categories-main-carousel'>
          <img
            style={{
              width: "100%",
              margin: "0px 5px 0px 0px",
              objectFit: "cover",
            }}
            src='logobuyuk.png'
            alt='test'
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselService;
