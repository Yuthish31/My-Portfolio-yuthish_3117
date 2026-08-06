import React from "react";
import ResumePDF from '../assets/Yuthishthira_senthil_M_Resume.pdf';
import QRimg from '../assets/img/quick-link.png';
import "./Resume.css";
function Resume() {
    return (
        <div className="resume-page">
            <main className="resume">
                {/* Resume Action Buttons */}
                <div className="resume-actions">
                    <a
                        href={ResumePDF}
                        download="Yuthishthira_senthil_M_Resume.pdf"
                        className="action-btn download-btn"
                    >
                        <i className="fa-solid fa-download"></i>
                        Download Resume
                    </a>
                    <a
                        href="https://yuthish-3117.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn portfolio-btn"
                    >
                        <i className="fa-solid fa-globe"></i>
                        Portfolio
                    </a>
                    <a
                        href="/links"
                        className="action-btn links-btn"
                    >
                        <i className="fa-solid fa-link"></i>
                        Quick Links
                    </a>
                </div>
                {/* ================= CAREER-HEADER ================= */}
                <div className="career-header">
                    <h1 className="resume-name">
                        YUTHISHTHIRA SENTHIL M
                    </h1>
                    <p className="designation">
                        Lab Technician • Web Developer • IT Support
                    </p>
                    <div className="contact">
                        <span>
                            <i className="fa-solid fa-location-dot"></i>
                            Coimbatore, Tamil Nadu
                        </span>
                        <span>
                            <i className="fa-solid fa-phone"></i>
                            +91 93603 34471
                        </span>
                        <span>
                            <i className="fa-solid fa-envelope"></i>
                            yuthish2222k0156@gmail.com
                        </span>
                    </div>
                    <div className="links">
                        <a
                            href="https://yuthish-3117.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-solid fa-globe"></i>
                            Portfolio
                        </a>
                        <a
                            href="https://github.com/Yuthish31"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-github"></i>
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/yuthishthira-senthil-m-334767334"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                            LinkedIn
                        </a>
                    </div>
                </div>
                {/* ================= SUMMARY ================= */}
                <section className="summary">
                    <h2>
                        Professional Summary
                    </h2>
                    <p>
                        Lab Technician and Web Developer with hands-on experience
                        in computer laboratory administration, technical support,
                        networking, and full-stack web development.
                        Skilled in building responsive web applications using
                        React.js, JavaScript, PHP, Firebase, and MySQL while
                        maintaining reliable IT infrastructure and supporting
                        academic environments.
                    </p>
                </section>
                {/* ================= CONTENT ================= */}
                <section className="content">
                    {/* ================= LEFT ================= */}
                    <aside className="left">
                        {/* TECHNICAL SKILLS */}
                        <div className="card">
                            <h2>
                                Technical Skills
                            </h2>
                            <div className="skill-group">
                                <h3>
                                    Programming
                                </h3>
                                <p>
                                    HTML5 • CSS3 • JavaScript • PHP • Python • Java
                                </p>
                            </div>
                            <div className="skill-group">
                                <h3>
                                    Frontend Development
                                </h3>
                                <p>
                                    React.js • Vite • Responsive Web Design • REST API Integration
                                </p>
                            </div>
                            <div className="skill-group">
                                <h3>
                                    Backend & Database
                                </h3>
                                <p>
                                    PHP • Firebase Authentication • Firebase Firestore
                                </p>
                            </div>
                            <div className="skill-group">
                                <h3>
                                    IT Support
                                </h3>
                                <p>
                                    Networking • LAN Configuration • Printer Installation • Hardware & Software Troubleshooting
                                </p>
                            </div>
                            <div className="skill-group">
                                <h3>
                                    Development Tools
                                </h3>
                                <p>
                                    Git • GitHub • VS Code • Figma • Canva
                                </p>
                            </div>
                        </div>
                        {/* ================= EDUCATION ================= */}
                        <div className="card">
                            <h2>
                                Education
                            </h2>
                            <div className="education">
                                <h3>
                                    Bachelor of Science in Computer Science
                                </h3>
                                <span>
                                    Akshaya College of Arts and Science
                                </span>
                                <small>
                                    2022 – 2025
                                </small>
                                <p>
                                    <strong className="strong-tag">
                                        Percentage:
                                    </strong>
                                    75%
                                </p>
                            </div>
                            <hr />
                            <div className="education">
                                <h3>
                                    Higher Secondary Certificate (HSC)
                                </h3>
                                <span>
                                    Sri Vagisvari Vidya Mandir Matriculation Higher Secondary School
                                </span>
                                <small>
                                    2021 – 2022
                                </small>
                                <p>
                                    <strong className="strong-tag">
                                        Computer Science
                                    </strong>
                                    <br />
                                    <strong className="strong-tag">
                                        Percentage:
                                    </strong>
                                    45%
                                </p>
                            </div>
                            <hr />
                            <div className="education">
                                <h3>
                                    Secondary School Leaving Certificate (SSLC)
                                </h3>
                                <span>
                                    Sri Vagisvari Vidya Mandir Matriculation Higher Secondary School
                                </span>
                                <small>
                                    2019 – 2020
                                </small>
                                <p>
                                    <strong className="strong-tag">
                                        State Board of Tamil Nadu
                                    </strong>
                                    <br />
                                    <strong className="strong-tag">
                                        Percentage:
                                    </strong>
                                    65%
                                </p>
                            </div>
                        </div>
                        {/* ================= CERTIFICATIONS ================= */}
                        <div className="card">
                            <div className="certificate">
                                <h2>
                                    Certifications
                                </h2>
                                <ul>
                                    <li>
                                        Java Programming
                                    </li>
                                    <li>
                                        PHP Programming
                                    </li>
                                    <li>
                                        TCS iON Communicative English
                                    </li>
                                    <li>
                                        Cambridge Communication Skills
                                    </li>
                                    <li>
                                        National Seminar – AI & Open Source
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    {/* ================= RIGHT ================= */}
                    <section className="right">
                        {/* ================= EXPERIENCE ================= */}
                        <div className="card">
                            <h2>
                                Professional Experience
                            </h2>
                            <div className="job">
                                <h3>
                                    Lab Technician
                                    <span className="divider">
                                        |
                                    </span>
                                    <span className="company">
                                        Nehru Institute of Technology
                                    </span>
                                </h3>
                                <small>
                                    July 2025 – Present
                                </small>
                                <ul>
                                    <li>
                                        Manage and maintain computer laboratories with multiple desktop systems.
                                    </li>
                                    <li>
                                        Install, configure, and update Windows operating systems and essential software.
                                    </li>
                                    <li>
                                        Diagnose and resolve hardware, software, and network connectivity issues.
                                    </li>
                                    <li>
                                        Provide technical assistance to students and faculty during practical sessions.
                                    </li>
                                    <li>
                                        Configure printers and local network connections.
                                    </li>
                                    <li>
                                        Perform preventive maintenance to ensure uninterrupted laboratory operations.
                                    </li>
                                    <li>
                                        Assist in system setup for academic activities and examinations.
                                    </li>
                                    <li>
                                        Support software deployment and routine laboratory administration.
                                    </li>
                                </ul>
                                <p className="print-summary">
                                    Manage and maintain 60+ computer laboratory systems,
                                    install and configure Windows operating systems and essential
                                    software, troubleshoot hardware, software, printer, and LAN
                                    connectivity issues, provide technical support to students
                                    and faculty during practical sessions, and perform preventive
                                    maintenance to ensure reliable laboratory operations.
                                </p>
                            </div>
                        </div>
                        {/* ================= INTERNSHIPS ================= */}
                        <div className="card">
                            <h2>
                                Internships
                            </h2>
                            {/* MJ BIOCARE */}
                            <div className="internship">
                                <h3>
                                    Web Development & Digital Marketing Intern
                                    <span className="divider">
                                        |
                                    </span>
                                    <span className="company">
                                        MJ Biocare Solutions
                                    </span>
                                </h3>
                                <small>
                                    April 02, 2024 – April 25, 2024
                                </small>
                                <ul>
                                    <li>
                                        Designed promotional posters and responsive web pages for the company.
                                    </li>
                                    <li>
                                        Developed frontend components using HTML, CSS, and JavaScript.
                                    </li>
                                    <li>
                                        Assisted in digital marketing campaigns and basic SEO optimization.
                                    </li>
                                    <li>
                                        Gained practical experience in web design, branding, and client-focused development.
                                    </li>
                                </ul>
                                <p className="print-summary">
                                    Designed promotional posters and responsive web pages,
                                    developed frontend interfaces using HTML, CSS, and
                                    JavaScript, assisted with SEO and digital marketing
                                    campaigns, and improved website content and user experience.
                                </p>
                            </div>
                            <hr />
                            {/* KAYAREPE */}
                            <div className="internship">
                                <h3>
                                    Backend Developer Intern
                                    <span className="divider">
                                        |
                                    </span>
                                    <span className="company">
                                        Kayarepe Technology Pvt. Ltd.
                                    </span>
                                </h3>
                                <small>
                                    October 09, 2024 – November 15, 2024
                                </small>
                                <ul>
                                    <li>
                                        Developed backend connectivity for the Hall Allotment Software using PHP and MySQL.
                                    </li>
                                    <li>
                                        Participated in designing and developing the company's official website.
                                    </li>
                                    <li>
                                        Integrated frontend and backend modules to improve application functionality.
                                    </li>
                                    <li>
                                        Strengthened knowledge of database management, backend development, and software deployment.
                                    </li>
                                </ul>
                                <p className="print-summary">
                                    Developed backend modules using PHP and MySQL for the
                                    Hall Allotment Software, participated in building the
                                    company's official website, integrated frontend and
                                    backend components, and strengthened practical knowledge
                                    of backend development and database management.
                                </p>
                            </div>
                        </div>
                        {/* ================= PROJECTS ================= */}
                        <div className="card">
                            <h2>
                                Projects
                            </h2>
                            {/* Portfolio Project */}
                            <div className="project">
                                <h3>
                                    Personal Portfolio Website
                                </h3>
                                <span className="tech">
                                    React.js • Vite • JavaScript • CSS3 • Netlify
                                </span>
                                <p>
                                    Designed and developed a modern, responsive
                                    personal portfolio to showcase my projects,
                                    technical skills, certifications, and
                                    professional experience.
                                    Built with a clean UI, smooth animations,
                                    and optimized performance.
                                </p>
                                <p className="print-summary">
                                    Visit: https://yuthish-3117.netlify.app
                                </p>
                                <a
                                    href="https://yuthish-3117.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                    View Project
                                </a>
                            </div>
                            <hr />
                            {/* Our 2 Face Project */}
                            <div className="project">
                                <h3>
                                    Our 2 Face Website
                                </h3>
                                <span className="tech">
                                    React.js • Firebase • JavaScript • WhatsApp API
                                </span>
                                <p>
                                    Developed a responsive web application
                                    featuring Firebase integration,
                                    real-time database support, and
                                    WhatsApp connectivity.
                                    Focused on creating a modern UI and
                                    delivering a seamless user experience.
                                </p>
                                <p className="print-summary">
                                    Visit: https://nagaquickservices.netlify.app
                                </p>
                                <a
                                    href="https://nagaquickservices.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                    View Project
                                </a>
                            </div>
                            <hr />
                            {/* Kayarepe Project */}
                            <div className="project">
                                <h3>
                                    Kayarepe Technology Website
                                </h3>
                                <span className="tech">
                                    HTML5 • CSS3 • JavaScript • Responsive Design
                                </span>
                                <p>
                                    Designed and developed the official company
                                    website with a modern, responsive interface
                                    focused on performance, usability,
                                    and brand identity.
                                </p>
                                <p className="print-summary">
                                    Visit: https://kayarepe.netlify.app
                                </p>
                                <a
                                    href="https://kayarepe.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                    View Project
                                </a>
                            </div>
                        </div>

                        {/* ================= Resume Footer ================= */}

                        <div className="resume-footer">

                            <div className="resume-footer-text">
                                <p>
                                    Thank you for taking the time to review my resume.
                                </p>
                            </div>

                            <div className="resume-qr">

                                <a
                                    href="/links"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Quick Links"
                                >
                                    <img
                                        src={QRimg}
                                        alt="Quick Links QR Code"
                                    />
                                </a>

                                <p>
                                    Scan for<br />
                                    Quick Links
                                </p>

                            </div>

                        </div>

                    </section>
                </section>
            </main>
        </div>
    );
};
export default Resume;