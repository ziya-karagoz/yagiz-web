import { motion } from "framer-motion";
import React, { useState } from "react";
import "../styles/theme.css";

export const Navigation = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
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
          <a className='navbar-brand page-scroll' href='#page-top'>
            Yagiz Bilisim
          </a>{" "}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Hakkımızda
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Hizmetlerimiz
              </a>
            </li>

            <li>
              <a href='#testimonials' className='page-scroll'>
                Blog
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                İletişim
              </a>
            </li>
            <li onClick={handleThemeChange}>
              {darkTheme ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='2em'
                  height='2em'
                  viewBox='0 0 50 50'
                  className='theme-toggle'
                >
                  <path
                    d='M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z'
                    fill='currentColor'
                  />
                </svg>
              ) : (
                <svg
                  width='2em'
                  height='2em'
                  viewBox='0 0 24 24'
                  className='theme-toggle'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='11.9998'
                    cy='11.9998'
                    r='5.75375'
                    fill='currentColor'
                  />
                  <g>
                    <circle
                      cx='3.08982'
                      cy='6.85502'
                      r='1.71143'
                      transform='rotate(-60 3.08982 6.85502)'
                      fill='currentColor'
                    />
                    <circle
                      cx='3.0903'
                      cy='17.1436'
                      r='1.71143'
                      transform='rotate(-120 3.0903 17.1436)'
                      fill='currentColor'
                    />
                    <circle
                      cx='12'
                      cy='22.2881'
                      r='1.71143'
                      fill='currentColor'
                    />
                    <circle
                      cx='20.9101'
                      cy='17.1436'
                      r='1.71143'
                      transform='rotate(-60 20.9101 17.1436)'
                      fill='currentColor'
                    />
                    <circle
                      cx='20.9101'
                      cy='6.8555'
                      r='1.71143'
                      transform='rotate(-120 20.9101 6.8555)'
                      fill='currentColor'
                    />
                    <circle
                      cx='12'
                      cy='1.71143'
                      r='1.71143'
                      fill='currentColor'
                    />
                  </g>
                </svg>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
