import React from 'react';
import './Attendance_App.css';
import Animated from './Animated';
import { motion } from 'framer-motion';
import App_login from '../assets/img/App_login.png';

const Attendance_App = () => {
    return (
        <motion.section
            className="Attendance_App-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}>

                <div className="Attendance_App-circles">
                    <div className="circle Attendance_App-top-left-line"></div>
                    <div className="Attendance_App-thin-arc-circle"></div>
                    <div className="circle Attendance_App-right-accent-circle"></div>
                    <div className="circle Attendance_App-left-circle-smooth"></div>
                </div>
                    <div className="Attendance_App-container"><div className="App_login">
                        <img src={App_login} alt="App_login" />
                        </div>
                        <div className="Attendance_App-text">
                            <h1>Attendance Management System (Mobile App)</h1>
                            <p>A smart and efficient mobile app built to simplify student attendance tracking. 
                            This system allows faculty to mark students as Present or Absent with a single tap. It features a modern UI, 
                            built-in database connectivity, and provides real-time insights into attendance data. Designed for ease of use, 
                            this app ensures accurate records, reduces manual work, and improves classroom management.</p>
                        <div className="tech-stack">
                            <span className="tech-item">Android Studio</span>
                            <span className="tech-item">Java</span>
                            <span className="tech-item">Firebase</span></div>
                            <div className="features">
                            <h2>Features:</h2>
                            <ul>
                                <li>Student database management</li>
                                <li>Real-time attendance marking</li>
                                <li>Present/Absent buttons with status indicator</li>
                                <li>Admin dashboard integration</li>
                            </ul></div>
                            <div className="goal-section">
                            <p><strong>Goal:</strong> To streamline attendance tracking for educational institutions by offering a digital, fast, and reliable solution.</p>
                            </div>
                        </div>
                    </div>

        </motion.section>
    );
};
export default Attendance_App;