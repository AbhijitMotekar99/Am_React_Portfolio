import React from 'react'
import { useState, useEffect } from "react";
import "./header.css";
//import DarkMode from "../dark_mode/DarkMode";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const [theme, setTheme] = useState(() => {
    // Check if theme preference exists in local storage
    const storedTheme = localStorage.getItem("theme");
    // Return the stored theme, or default to 'light' if not found
    return storedTheme ? storedTheme : "light";
  });

  useEffect(() => {
    // Set the theme class on the body element
    document.body.setAttribute("data-theme", theme);
    // Save the current theme preference to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between 'light' and 'dark' themes
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  /*=================================================================================*/
  /*
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  } else setLightMode();

  const toggleTheme = () => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  setDarkMode();
  */
  /*===============================================================================*/

  /*===============================================================================*/
  /*let btn = document.getElementById("btn");

  btn.onClick = function(){
    document.body.classList.toggle("data-theme", "dark")
  }
  */
  /*===============================================================================*/

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Abhijit
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Qualification
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>

            <li className="nav_item">
              <div className="toggle__btn" onClick={toggleTheme}>
                <span>{theme === "light" ? "Dark" : "Light"}</span>
                <i
                  className={theme === "light" ? "bx bxs-moon" : "bx bxs-sun"}
                ></i>
              </div>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
