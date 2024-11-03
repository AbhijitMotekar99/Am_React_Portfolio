import React from 'react'
import "./projects.css";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Portfolio Showcase</span>

      <Swiper className="projects__container"
      loop={true}
      grabCursor={true}
      spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      }}
      modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, link1, link2 }) => {
          return (
            <SwiperSlide className="projects__card" key={id}>
                <img src={image} alt="" className="projects__img" />    
                
                <h3 className="projects__name">{title}</h3>
                <p className="projects__description">{description}</p>
                <div className="card__icons">
                   <a href={link1} target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                   <a href={link2} target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external' ></i></a>
                </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
