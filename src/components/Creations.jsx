import './Creations.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AppImage from '../assets/img/App.jpeg';
import WebImage from '../assets/img/Web.jpeg'; // Replace with your web image
import PosterImage from '../assets/img/Design-page.jpg'; // Replace with your poster image

const Creations = () => {
    return (
        <motion.div
            className="creation-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}>

            <div className="creations-container">
                <h2 className="section-title">My Creations</h2>
                <div className="creations-grid">
                    {/* Card 1 - App */}
                    <div className="creation-card">
                        <img src={AppImage} alt="Attendance App" />
                        <h3>Attendance Management System</h3>
                        <p>Mobile app for tracking student attendance using real-time features.</p>
                        <p><strong>Tech Stack:</strong> Android Studio, Java, Firebase</p>
                        <Link to="/attendance_app" className="bttn">View More</Link>
                    </div>

                    {/* Card 2 - Web */}
                    <div className="creation-card">
                        <img src={WebImage} alt="Hostel Allotment" />
                        <h3>Hostel Allotment System</h3>
                        <p>Web application for managing student hostel room allocations.</p>
                        <p><strong>Tech Stack:</strong> React, HTML, CSS, PHP, etc.</p>
                        <Link to="/hallallotment" className="bttn">View More</Link>
                    </div>

                    {/* Card 3 - Poster */}
                    <div className="creation-card">
                        <img src={PosterImage} alt="Creative Posters" />
                        <h3>Poster Design Services</h3>
                        <p>Creative posters for marketing campaigns and college admissions View More image Click!</p>
                        <p><strong>Tools:</strong> Photoshop, Figma, Canva</p>
                        <Link to="/gallery" className="bttn">View More</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Creations;