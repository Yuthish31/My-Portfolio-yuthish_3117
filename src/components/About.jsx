// src/components/About.jsx
import React from 'react';
import './About.css';
import Animated from './Animated';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import aboutImg1 from '../assets/img/1.png';
import aboutImg2 from '../assets/img/2.png';
import aboutImg3 from '../assets/img/3.png';
import aboutImg_Work from '../assets/img/Work.jpg';
import aboutImg4 from '../assets/img/4.png';
import aboutImg_cat from '../assets/img/cat.png';
import aboutImg5 from '../assets/img/5.png';

const About = () => {
  useEffect(() => {
    console.log("About mounted");
    return () => {
      console.log("About unmounted");
    };
  }, []);

  return (
    <div className="about-wrapper">

      {/* Section 1 - About */}
      <motion.section
        className="about-section about1"
        id="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}>

        <div className="about-circles">
          <div className="circle about-top-left-line"></div>
          <div className="circle about-top-right-line"></div>
          <div className="About-thin-arc-circle"></div>
          <div className="circle about-right-accent-circle"></div>
          <div className="circle about-left-circle-smooth"></div>
        </div>  
        
        <div className="about-container">
          <div className="about-text">
            <h1>Hello,</h1>
            <h2>I'M Yuthishthira senthil M</h2>
            <div className='P1'><p>Web Developer / Web Designer / Poster & Video Editor</p></div>
            <p>
              I'm a passionate <strong>Web Developer</strong>, <strong>Designer</strong>, and <strong>Visual Creator</strong>
              based in Coimbatore. I enjoy creating unique digital experiences using modern tech and design.
            </p>
            <p>
              I've completed my Bachelor of Science in Computer Science at Akshaya College of Arts and Science, 
              with my final exam finished on May 9, 2025. My journey into web development and creative design started
              with a love for anime, animated content, and the desire to bring similar experiences to life through coding and design.
            </p>
          </div>  
          
          <div className="about-image1">
            <img src={aboutImg1} alt="About" />
          </div>
        </div>
        
        <a href="#what-i-do" className="scroll-down">↓</a>
      </motion.section>

      {/* Section 2 - What I Do */}
      <motion.section
        className="about-section next-about-section"
        id="what-i-do"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>

        <div className="about2-circles">
          <div className="circle about2-top-left-line"></div>
          <div className="About2-thin-arc-circle"></div>
          <div className="circle about2-right-accent-circle"></div>
          <div className="circle about2-left-circle-smooth"></div>
        </div>
        
        <div className="about-container second-section">
          <div className="about-text">
            <Animated delay={0.2}><h2>What I Do</h2></Animated>
            <Animated delay={0.3}>
              <p>I enjoy building clean, modern websites and intuitive user
                interfaces. I also love blending creativity with technology —
                whether it's designing in Figma, editing videos in
                CapCut/KineMaster, or designing visually appealing posters
                in Canva.</p>
            </Animated>
            
            <Animated delay={0.4}><h3>Skills:</h3></Animated>
            <Animated delay={0.5}>
              <ul className="S">
                <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React JS, PHP</li>
                <li><strong>Creative Tools:</strong> Figma, Canva, CapCut, KineMaster</li>
                <li><strong>Frameworks & Tools:</strong> React JS, Firebase, Git</li>
              </ul>
            </Animated>
            
            <Animated delay={0.6}><h3>Education:</h3></Animated>
            <Animated delay={0.7}>
              <p>
                B.Sc. [Computer Science], Akshaya College of Arts and
                Science, Coimbatore — 2022 - 2025<br />
                HSC: Computer Science, Sri Vaisvari Vidya Mandir
                Matriculation Higher Secondary School, Pollachi — 2021 - 2022<br />
                SSLC: State Board of TamilNadu, Sri Vaisvari Vidya Mandir
                Matriculation Higher Secondary School, Pollachi — 2019 - 2020
              </p>
            </Animated>
          </div>
          
          <Animated delay={0.3}>
            <div className="about-image2">
              <img src={aboutImg2} alt="About2" />
            </div>
          </Animated>
        </div>
        
        <a href="#internships" className="scroll-down1">↓</a>
      </motion.section>

      {/* Section 3 - Internships */}
      <motion.section
        className="about-section next-about-section"
        id="internships"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>

        <div className="about3-circles">
          <div className="circle about3-top-left-line"></div>
          <div className="About3-thin-arc-circle"></div>
          <div className="circle about3-right-accent-circle"></div>
          <div className="circle about3-left-circle-smooth"></div>
        </div>
        
        <div className="about-container third-section">
    <div className="left-images-column3">
      <Animated delay={0.3}>
        <div className="about-Work">
          <img src={aboutImg_Work} alt="About_Work" />
        </div>
      </Animated>

      <Animated delay={0.4}>
        <div className="about-image3">
          <img src={aboutImg3} alt="About3" />
        </div>
      </Animated>
    </div>
    
      <div className="about-text A3T">
        <Animated delay={0.2}><h3>Internships</h3></Animated>
              <Animated delay={0.3}>
              <p>
                <strong>MJ Biocare Solutions</strong><br />
                Web Development & Digital Marketing
                April 02, 2024 – April 25, 2024<br />
                <strong>Kayarepe Technology</strong><br />
                Backend Development – Hall Allotment Software
                October 09, 2024 – November 15, 2024
              </p>
            </Animated>
            
            <Animated delay={0.4}><h3>Certifications & Achievements</h3></Animated>
            <Animated delay={0.5}>
              <ul className="C_A">
                <li><strong>Java Programming Beginner –</strong> Great Learning</li>
                <li><strong>National Level Seminar –</strong> Futuristic AI and Open Source</li>
                <li><strong>TCS iON Certificate –</strong> Communicative English</li>
                <li><strong>Upskill Cambridge University –</strong> Communication Skills</li>
                <li><strong>PHP Programming Course (1 month) –</strong> CADD Technology</li>
              </ul>
            </Animated>
      </div>
    </div>
        
        <a href="#passions" className="scroll-down2">↓</a>
      </motion.section>

      {/* Section 4 - Passions */}
      <motion.section
        className="about-section next-about-section"
        id="passions"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>

        {/* Compass Background */}
          <div className="compass-background"></div>
          <div className="compass-needle"></div>

        <div className="about4-circles">
          <div className="circle about4-top-left-line"></div>
          <div className="circle about4-left-circle-smooth"></div>
        </div>
        
        <div className="about-container fourth-section">
    <div className="left-images-column">
      <Animated delay={0.3}>
        <div className="about-image5">
          <img src={aboutImg5} alt="About5" />
        </div>
      </Animated>
      
      <Animated delay={0.4}>
        <div className="about-cat">
          <img src={aboutImg_cat} alt="About_cat" />
        </div>
      </Animated>
    </div>
    
    <div className="about-text">
            <Animated delay={0.2}>
              <div className="P_H"><h1>Passions & Hobbies</h1></div>
            </Animated>
            
            <div className="A4">
              <Animated delay={0.3}><strong><p>I Love to:</p></strong></Animated>
              <Animated delay={0.4}>
                <ul>
                  <li>Watch anime, Korean/Chinese dramas, and movies</li>
                  <li>Play online games</li>
                  <li>Create posters, edit videos, and try out new creative tools</li>
                  <li>Explore new design trends and build anime-inspired themes</li>
                </ul>
              </Animated>
            </div>
            
            <div className="path">
              <Animated delay={0.5}><h1>Why I Chose This Path</h1></Animated>
              <Animated delay={0.6}>
                <p>
                  Ever Since I started watching anime, I have had a desire
                  to create my own websites that are as creative as the
                  animes I watched. That passion enabled me to further
                  explore web design and development. Now whenever I
                  think of a product that I can create digitally, I turn it into
                  reality.
                </p>
              </Animated>
            </div>
            
            <div className="career">
              <Animated delay={0.7}><h1>Career Goals</h1></Animated>
              <Animated delay={0.8}>
                <p>
                  I aim to build a successful career where I can earn well,
                  work smart, and grow constantly. I'm committed to
                  giving my best in everything I do, with a mindset to learn
                  and adapt every day.
                </p>
              </Animated>
            </div>
          </div>  
          
          <Animated delay={0.3}>
            <div className="about-image4">
              <img src={aboutImg4} alt="About4" />
            </div>
          </Animated>
        </div>

        <a href="#about" className="scroll-down3">↑</a>
      </motion.section>
    </div>
  );
};

export default About;