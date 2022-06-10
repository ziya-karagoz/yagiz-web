import Slider from "react-slick";
import "../styles/carouselstyle.scss";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {AiOutlineSetting,AiOutlineDatabase,AiOutlineCloudServer} from "react-icons/ai";
import {CgWebsite} from "react-icons/cg";
import {BiCodeCurly} from "react-icons/bi";
//BiCodeCurly

const Carousel = () => {
  useEffect(() => {}, []);

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
    slidesToShow: 4,
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
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  };

  return (
    <div>
      <Slider {...settings} className='carousel-self'>
        <div className='carousel-item'>
          <AiOutlineCloudServer className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>Cloud Server</h3>
          </div>
          <div className='carousel-item-paragraph'>
            <p className='paragraph' style={{ color: "white" }}>
              {" "}
              Paket Programlar ile istediği proje yönetimini sağlayaman firmalar
              için özel olarak yazılımlar geliştiriyoruz.{" "}
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <AiOutlineSetting className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>Service</h3>
          </div>
          <div className='carousel-item-paragraph'>
            <p className='paragraph' style={{ color: "white" }}>
              {" "}
              Paket Programlar ile istediği proje yönetimini sağlayaman firmalar
              için özel olarak yazılımlar geliştiriyoruz.{" "}
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <CgWebsite className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>Web Site</h3>
          </div>

          <div className='carousel-item-paragraph'>
            <p className='paragraph' style={{ color: "white" }}>
              {" "}
              Paket Programlar ile istediği proje yönetimini sağlayaman firmalar
              için özel olarak yazılımlar geliştiriyoruz.{" "}
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <AiOutlineDatabase className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>Database</h3>
          </div>

          <div className='carousel-item-paragraph'>
            <p className='paragraph' style={{ color: "white" }}>
              {" "}
              Paket Programlar ile istediği proje yönetimini sağlayaman firmalar
              için özel olarak yazılımlar geliştiriyoruz.{" "}
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <BiCodeCurly className='carousel-item-icon' />
          <div className='carousel-item-title'>
            <h3>Software Support</h3>
          </div>

          <div className='carousel-item-paragraph'>
            <p className='paragraph' style={{ color: "white" }}>
              {" "}
              Paket Programlar ile istediği proje yönetimini sağlayaman firmalar
              için özel olarak yazılımlar geliştiriyoruz.{" "}
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
