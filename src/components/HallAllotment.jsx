import React from 'react';
import './HallAllotment.css';
import { motion } from 'framer-motion';
import HallAllotmentImage from '../assets/img/web_.png';

const HallAllotment = () => {
    return (
        <motion.section
            className="hall-allotment-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}>

            <div className="hall-allotment-circles">
                <div className="circle hall-allotment-top-left-line"></div>
                <div className="hall-allotment-thin-arc-circle"></div>
                <div className="circle hall-allotment-right-accent-circle"></div>
                <div className="circle hall-allotment-left-circle-smooth"></div>
            </div>
            
            <div className="hall-allotment-container">
            
                    <div className="hall-allotment-image">
                        <img src={HallAllotmentImage} alt="Hall Allotment System" />
                    </div>
                
                <div className="hall-allotment-text">
                        <h1>Hall Allotment System (Web App)</h1>
                    
                        <p>A web-based system developed to automate the process of exam or event hall allotment in colleges. Using HTML, CSS, JavaScript, and MySQL, the application dynamically allocates seats based on departments, years, and number of students. The interface is clean, responsive, and comes with a backend for uploading student data and managing layouts.</p>
                    
                        <div className="tech-stack">
                            <span className="tech-item">HTML</span>
                            <span className="tech-item">CSS</span>
                            <span className="tech-item">JavaScript</span>
                            <span className="tech-item">MySQL</span>
                        </div>
                    
                        <div className="features">
                            <h2>Features:</h2>
                            <ul>
                                <li>Automated seat allocation algorithm</li>
                                <li>Department/year-based filtering</li>
                                <li>Real-time hall capacity monitoring</li>
                                <li>Admin dashboard for layout management</li>
                                <li>Student data import/export</li>
                            </ul>
                        </div>
                    
                        <div className="goal-section">
                            <p><strong>Goal:</strong> To streamline the hall allocation process for educational institutions by providing an automated, fair, and efficient digital solution.</p>
                        </div>
                </div>
            </div>
        </motion.section>
    );
};

export default HallAllotment;