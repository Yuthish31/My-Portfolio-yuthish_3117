import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const GamingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hoverActive, setHoverActive] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Only rotate when hovering interactive elements
      if (hoverActive) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const angle = Math.atan2(
          e.clientY - window.innerHeight / 2,
          e.clientX - window.innerWidth / 2
        ) * (90 / Math.PI);
        
        setRotation(angle);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onHoverStart = () => setHoverActive(true);
    const onHoverEnd = () => {
      setHoverActive(false);
      setRotation(0); // Reset rotation when not hovering
    };

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);

      const hoverElements = document.querySelectorAll(
        'a, button, input, textarea, [data-cursor-hover]'
      );
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', onHoverStart);
        el.addEventListener('mouseleave', onHoverEnd);
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);

      const hoverElements = document.querySelectorAll(
        'a, button, input, textarea, [data-cursor-hover]'
      );
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', onHoverStart);
        el.removeEventListener('mouseleave', onHoverEnd);
      });
    };

    addEventListeners();
    return () => removeEventListeners();
  }, [hoverActive]);

  if (typeof window === 'undefined') return null;

  return (
    <div 
      className={`gaming-cursor ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${hoverActive ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      <div 
        className="cursor-arrow" 
        style={{
          transform: `rotate(${hoverActive ? rotation : 0}deg)`
        }} 
      />
      {hoverActive && <div className="cursor-hover-effect"></div>}
    </div>
  );
};

export default GamingCursor;
