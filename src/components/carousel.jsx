import Slider from "react-slick";
import "../styles/carouselstyle.scss";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const Carousel = () => {
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
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerPadding: "30px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings} className='carousel-self'>
        <div className='carousel-item'>
          <FaGithub className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>Özel Yazılım</h3>
          </div>
          <div className='carousel-item-paragraph'>
            <p className='deneme' style={{ color: "white" }}>
              {" "}
              Paket Programlar ile istediği proje yönetimini sağlayaman firmalar
              için özel olarak yazılımlar geliştiriyoruz.{" "}
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <FaGithub className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>asdfasafasg</h3>
          </div>
          <div className='carousel-item-paragraph'>
            <p style={{ color: "white" }}> asfas</p>
          </div>
        </div>
        <div className='carousel-item'>
          <FaGithub className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>asdfasafasg</h3>
          </div>
          <div className='carousel-item-paragraph'>
            <h3 style={{ color: "white" }}>
              {" "}
              asdfasafasgasdfasafasgasdfasafasg
            </h3>
          </div>
        </div>
        <div className='carousel-item'>
          <FaGithub className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>asdfasafasg</h3>
          </div>
          <div className='carousel-item-paragraph'>
            <p style={{ color: "white" }}> asfas</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
