import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container footer">
        <h1 className="footer__title">Abhijit</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/abhijit.motekar/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/abhijit-motekar-46017022a/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>{" "}
          </a>

          <a
            href="https://github.com/AbhijitMotekar99"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>
        </div>

        <span className="footer__copy">&#169;
        Copyright by Abhijit Motekar | All rights Resevered.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
