import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="wrapper">
      <div className="box">
        {[...Array(10)].map((_, index) => (
          <div key={index} className={`square square-${index + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;