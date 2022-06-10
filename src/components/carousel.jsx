import Slider from "react-slick";
import "../styles/carouselstyle.scss";
import React, { useEffect, useState } from "react";
import {
  AiOutlineSetting,
  AiOutlineMobile,
  AiOutlineDatabase,
} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BiCodeCurly } from "react-icons/bi";

const Carousel = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, []);

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
    autoplaySpeed: 1800,
    pauseOnHover: true,
    centerPadding: "30px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className='carousel-self'>
        <div className='carousel-item'>
          <AiOutlineMobile className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>{data ? data[0].name : "Loading"}</h3>
          </div>
          <div className='carousel-item-paragraph'>
            <p className='paragraph' style={{ color: "white" }}>
              {data ? data[0].text : "Loading"}
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <AiOutlineSetting className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>{data ? data[1].name : "Loading"}</h3>
          </div>
          <div className='carousel-item-paragraph'>
            <p className='paragraph' style={{ color: "white" }}>
              {data ? data[1].text : "Loading"}
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <CgWebsite className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>{data ? data[2].name : "Loading"}</h3>
          </div>

          <div className='carousel-item-paragraph'>
            <p className='paragraph' style={{ color: "white" }}>
              {data ? data[2].text : "Loading"}
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <AiOutlineDatabase className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>{data ? data[3].name : "Loading"}</h3>
          </div>

          <div className='carousel-item-paragraph'>
            <p className='paragraph' style={{ color: "white" }}>
              {data ? data[3].text : "Loading"}
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <BiCodeCurly className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>{data ? data[4].name : "Loading"}</h3>
          </div>

          <div className='carousel-item-paragraph'>
            <p className='paragraph' style={{ color: "white" }}>
              {data ? data[4].text : "Loading"}
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
