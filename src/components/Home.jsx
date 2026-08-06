import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Animated from './Animated';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import character from '../assets/img/hero.png';

function Home() {

  return (
    <motion.div
      className="about-wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}>
    <div className="App">
      <div className="circle-background">
        <div className="circle top-left-circle"></div>
        <div className="circle bottom-left-dot-group">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="circle right-circle"></div>
        <div className="circle left-circle"></div>
        <div className="thin-arc-circle"></div>
        <div className="circle right-accent"></div>
      </div>

      <main className="home-section">
        <div className="content">
        <div className="im"><h1>I'M</h1></div>
        <h1>
          <span></span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('YUTHiSHTHiRA SENTHiL M')
                .start(); // just type once
            }}
            options={{
              loop: false,
              delay: 80, // typing speed
              cursor: '|', // remove cursor if you want
            }}
          />
        </h1>
          <Animated duration={2}><p className="subtitle">
          Dreams may not be real yet, but the pursuit makes them possible.
          </p></Animated>
          <div className="buttons">
            <Animated delay={0.4}><Link to="/career" className="btn RES">Career</Link></Animated>
            <Animated delay={0.5}><Link to="/creations" className="btn">My Creations</Link></Animated>
            <Animated delay={0.6}><Link to="/contact" className="btn CON">Contact</Link></Animated>
          </div>
        </div>
        <Animated delay={0.5}><div className="character">
          <img src={character} alt="Character" />
        </div></Animated>
      </main>

    </div>
</motion.div>    
  );
}

export default Home;
