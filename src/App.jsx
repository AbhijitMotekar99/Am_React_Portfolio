import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Preloader from './components/Preloader/PreLoader';

function App() {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  // Hide Preloader after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsPreloaderVisible(false), 5000);
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
      {isPreloaderVisible ? (
        <Preloader />
      ) : (
        <>
          <Header />

          <main className='main'>
            <Home />
            <About />
            <Skills />
            <Qualification />
            <Projects />
            <Contact />
          </main>

          <Footer />
          <ScrollUp />
        </>
      )}
    </>
  );
}

export default App;
