import React from 'react';
import './KayarepeWebsite.css';
import { motion } from 'framer-motion';
import KayarepeImage from '../assets/img/kayarepewebsite.png';

const KayarepeWebsite = () => {
    return (
        <motion.section
            className="kayarepe-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}>

            <div className="kayarepe-circles">
                <div className="circle kayarepe-top-left-line"></div>
                <div className="kayarepe-thin-arc-circle"></div>
                <div className="circle kayarepe-right-accent-circle"></div>
                <div className="circle kayarepe-left-circle-smooth"></div>
            </div>

            <div className="kayarepe-container">
                
                <div className="kayarepe-image">
                    <img src={KayarepeImage} alt="Kayarepe Technology Website" />
                </div>

                <div className="kayarepe-text">
                    <h1>Kayarepe Technology (Company Website)</h1>

                    <p>A modern and responsive website developed for Kayarepe Technology to establish its digital presence and showcase its services. Built with HTML, CSS, and JavaScript, the site features clean navigation, smooth animations, and mobile-friendly design to deliver a professional experience.</p>

                    <div className="tech-stack">
                        <span className="tech-item">HTML</span>
                        <span className="tech-item">CSS</span>
                        <span className="tech-item">JavaScript</span>
                        <span className="tech-item">Netlify</span>
                    </div>

                    <div className="features">
                        <h2>Features:</h2>
                        <ul>
                            <li>Responsive multi-device design</li>
                            <li>Smooth UI animations</li>
                            <li>Optimized for speed and SEO</li>
                            <li>Custom branding and visuals</li>
                            <li>Live deployment with Netlify</li>
                        </ul>
                    </div>

                    <div className="goal-section">
                        <p><strong>Goal:</strong> To provide Kayarepe Technology with a modern digital platform that communicates its services, builds trust with clients, and enhances online visibility.</p>
                    </div>

                    <div className="live-link">
                        <a href="https://kayarepe.netlify.app" target="_blank" rel="noopener noreferrer">
                            Visit Live Site
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default KayarepeWebsite;
