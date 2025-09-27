import React from 'react';
import './TwoFaceWebsite.css';
import { motion } from 'framer-motion';
import TwoFaceImage from '../assets/img/Twofacewebsite.png';

const TwoFaceWebsite = () => {
    return (
        <motion.section
            className="twoface-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}>

            {/* Decorative Circles */}
            <div className="twoface-circles">
                <div className="circle twoface-top-left-line"></div>
                <div className="twoface-thin-arc-circle"></div>
                <div className="circle twoface-right-accent-circle"></div>
                <div className="circle twoface-left-circle-smooth"></div>
            </div>

            {/* Main Content */}
            <div className="twoface-container">
                
                {/* Image */}
                <div className="twoface-image">
                    <img src={TwoFaceImage} alt="Our 2-Face Website" />
                </div>

                {/* Text Content */}
                <div className="twoface-text">
                    <h1>Our 2-Face Website (Taxi & Electrical and Plumbing Services)</h1>

                    <p>
                        A dual-purpose website designed to provide <strong>Taxi Booking</strong> 
                        and <strong>Electrical & Plumbing Services</strong> under one digital platform. 
                        The site delivers seamless booking, service information, and professional branding 
                        with modern design and user-friendly navigation.
                    </p>

                    {/* Tech Stack */}
                    <div className="tech-stack">
                        <span className="tech-item">React</span>
                        <span className="tech-item">Vite</span>
                        <span className="tech-item">Firebase</span>
                        <span className="tech-item">WhatsApp API</span>
                        <span className="tech-item">Netlify</span>
                    </div>

                    {/* Features */}
                    <div className="features">
                        <h2>Features:</h2>
                        <ul>
                            <li>Taxi booking with WhatsApp integration</li>
                            <li>Electrical & Plumbing services showcase</li>
                            <li>Modern responsive design with animations</li>
                        </ul>
                    </div>

                    {/* Goal */}
                    <div className="goal-section">
                        <p>
                            <strong>Goal:</strong> To create a unified platform that provides 
                            easy taxi booking and professional electrical/plumbing services, 
                            improving customer experience and business growth.
                        </p>
                    </div>

                    {/* Live Link */}
                    <div className="live-link">
                        <a href="https://nagaquickservices.netlify.app" target="_blank" rel="noopener noreferrer">
                            Visit Live Site
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default TwoFaceWebsite;
