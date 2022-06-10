import { motion } from "framer-motion";
import React, { useState } from "react";

export const Navigation = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header' style={{ alignItems: "center" }}>
          <a className='' href='#page-top'>
            <img src='logobuyuk.png' alt='logo' style={{ width: "100px" }} />
          </a>{" "}
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {" "}
            <span className='sr-only'>Toggle navigation</span>{" "}
            <span className='icon-bar'></span>{" "}
            <span className='icon-bar'></span>{" "}
            <span className='icon-bar'></span>{" "}
          </button>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#header' className='page-scroll'>
                ANA SAYFA
              </a>
            </li>

            <li>
              <a href='#about' className='page-scroll'>
                HAKKIMIZDA
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                HİZMETLERİMİZ
              </a>
            </li>

            <li>
              <a href='#testimonials' className='page-scroll'>
                BLOG
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                İLETİŞİM
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
