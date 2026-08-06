import React from "react";
import Logoimg from '../assets/img/logo.png';
import "./Connect.css";

function Connect() {
    return (
        <div className="connect-page">

            <div className="career-container">

                <div className="profile-image">
                    <img 
                        src={Logoimg} 
                        alt="Logo" 
                    />
                </div>


                <div className="line">
                    --------------------------------
                </div>


                <h1>
                    YUTHISHTHIRA SENTHIL M
                </h1>


                <h2>
                    Creative Web Designer & Developer
                </h2>


                <div className="line">
                    --------------------------------
                </div>


                <div className="links">

                    <a 
                        href="https://yuthish-3117.netlify.app" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        🌐 Portfolio
                    </a>


                    <a 
                        href="/career" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📄 Resume
                    </a>


                    <a 
                        href="https://github.com/Yuthish31" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💻 GitHub
                    </a>


                    <a 
                        href="https://linkedin.com/in/yuthishthira-senthil-m-334767334" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💼 LinkedIn
                    </a>


                    <a href="mailto:yuthish2222k0156@gmail.com">
                        📧 Email
                    </a>


                    <a href="tel:+919360334471">
                        📱 Contact
                    </a>

                </div>


                <div className="line">
                    --------------------------------
                </div>


            </div>

        </div>
    );
}


export default Connect;