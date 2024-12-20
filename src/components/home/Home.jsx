import React from 'react'
import "./home.css";
import Social from "./Social";
import Data from './Data';
import ScrollDown from "./ScrollDown";
import BackgroundAnimation1 from '../BackgroundAnimation1/AnimatedBackground';

const Home = () => {
  return (
    <section className="home section" id="home">
      <BackgroundAnimation1 />
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <div className="home__img"></div>

                <Data />
            </div>

            <ScrollDown />
        </div>

    </section>
  )
}

export default Home
