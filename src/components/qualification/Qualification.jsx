import React from 'react'
import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification"> 
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState == 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState == 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech in Computer Science</h3>
                <span className="qualification__subtitle">
                  Pimpri Chinchwad College of Engineering, Pune
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2021 - 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">HSC (12th)</h3>
                <span className="qualification__subtitle">
                Sahakar Vidya Mandir, Pune
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC (10th)</h3>
                <span className="qualification__subtitle">
                Bharat Vidhyalaya, Buldhana
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2019 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

             
             <div className="qualification__data">
              <div></div>

            {/*
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">
                
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i>
                </div>
              </div>
          </div>*/}
          </div>
          </div>
        

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Osis Infobyte</h3>
                <span className="qualification__subtitle">
                Web Development and Designing Intern
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> September 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">AWS Cloud</h3>
                <span className="qualification__subtitle">
                  Intership
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> Dec 2023 - Mar 1024 
                </div>
              </div>
            </div>
            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Celebal Technologies</h3>
                <span className="qualification__subtitle">
                ReactJS Devloper
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> Mar 2024 - July 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">JS KG</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">HAcker</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2021 - Present
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
