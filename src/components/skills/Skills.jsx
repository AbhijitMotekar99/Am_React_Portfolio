// Skills.js
import React from 'react';
import './skills.css';
import GSSOC from '../../assets/GSSoC24_Stats.png';

const Skills = () => {
  const skillIcons = [
    { url: 'https://skillicons.dev/icons?i=c', name: 'C' },
    { url: 'https://skillicons.dev/icons?i=cpp', name: 'C++' },
    { url: 'https://skillicons.dev/icons?i=python', name: 'Python' },
    { url: 'https://skillicons.dev/icons?i=java', name: 'Java' },
    { url: 'https://skillicons.dev/icons?i=html', name: 'HTML' },
    { url: 'https://skillicons.dev/icons?i=css', name: 'CSS' },
    { url: 'https://skillicons.dev/icons?i=js', name: 'JavaScript' },
    { url: 'https://skillicons.dev/icons?i=bootstrap', name: 'Bootstrap' },
    { url: 'https://skillicons.dev/icons?i=php', name: 'PHP' },
    { url: 'https://skillicons.dev/icons?i=react', name: 'React' },
    { url: 'https://skillicons.dev/icons?i=mysql', name: 'MySQL' },
    { url: 'https://skillicons.dev/icons?i=mongodb', name: 'MongoDB' },
    { url: 'https://skillicons.dev/icons?i=tailwind', name: 'Tailwind' },
    { url: 'https://skillicons.dev/icons?i=git', name: 'Git' },
    { url: 'https://skillicons.dev/icons?i=photoshop', name: 'Photoshop' },
    { url: 'https://skillicons.dev/icons?i=figma', name: 'Figma' },
    { url: 'https://skillicons.dev/icons?i=latex', name: 'LaTeX' },
    { url: 'https://skillicons.dev/icons?i=vite', name: 'Vite' },
    { url: 'https://skillicons.dev/icons?i=visualstudio', name: 'VisualStudio' },
    { url: 'https://skillicons.dev/icons?i=wordpress', name: 'WordPress' }
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Skills</span>

      <div className="skills__container">
        <div className="skills__grid">
          {skillIcons.map((icon, index) => (
            <div key={index} className="skills__icon-container">
              <img src={icon.url} alt={icon.name} className="skills__icon" />
              <span className="skills__icon-name">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills__badges">
        <a href="https://holopin.io/@shooter_99" target="_blank" rel="noopener noreferrer">
          <img
            src="https://holopin.me/shooter_99"
            alt="An image of @shooter_99's Holopin badges, which is a link to view their full Holopin profile"
            className="skills__badge-image"
          />
        </a>

        <img
          src={GSSOC}
          alt="An image of AbhijitMotekar99's Girls Script Summer of Code full profile"
          className="skills__badge-image gssoc"
        />
      </div>
    </section>
  );
};

export default Skills;
