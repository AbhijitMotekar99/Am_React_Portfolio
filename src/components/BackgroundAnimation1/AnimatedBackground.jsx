import React, { useEffect } from 'react';
import './AnimatedBackground.css';

const BackgroundAnimation = () => {
  useEffect(() => {
    // Select the container for color boxes
    const bgAnimation = document.getElementById('bgAnimation');
    const numberOfColorBoxes = 400;

    // Clear any previous boxes in case of re-renders
    bgAnimation.innerHTML = '';

    // Create color boxes and append to bgAnimation
    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      bgAnimation.append(colorBox);
    }
  }, []);

  return (
    <div className="bgAnimation" id="bgAnimation">
      <div className="backgroundAnim"></div>
    </div>
  );
};

export default BackgroundAnimation;
