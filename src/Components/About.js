import React from 'react';
import './About.css'; // Import the CSS file for styling

// Import images from src folder
import personalImage from './Assets/images/img1.jpg';
import htmlLogo from './Assets/images/HTML logo.png';
import cssLogo from './Assets/images/CSS logo.jpg';
import jsLogo from './Assets/images/JS logo.png';
import reactLogo from './Assets/images/React logo.png';
import cvFile from './Assets/Fadeelcv.pdf';

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                {/* Text Content */}
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        I am a full-stack developer with a passion for creating clean, responsive, and visually appealing web applications. I possess an understanding of React.JS, HTML, CSS, JavaScript, and Node.js.
                    </p>
                    
                    <div className="stack">
                        <h3>STACK:</h3>
                        <div className="stack-items">
                            <div className="stack-item">
                                <img src={htmlLogo} alt="HTML" className="stack-logo" />
                                <p>HTML</p>
                            </div>
                            <div className="stack-item">
                                <img src={cssLogo} alt="CSS" className="stack-logo" />
                                <p>CSS</p>
                            </div>
                            <div className="stack-item">
                                <img src={jsLogo} alt="JavaScript" className="stack-logo" />
                                <p>JavaScript</p>
                            </div>
                            <div className="stack-item">
                                <img src={reactLogo} alt="React" className="stack-logo" />
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-buttons">
                        <a href="#/contact" className="btn hire-me">----Hire Me----</a>
                        <a href={cvFile} className="btn cv" target="_blank" rel="noopener noreferrer">----Get CV----</a>
                    </div>
                </div>

                {/* Personal Image */}
                <img src={personalImage} 
                    alt="Personal" 
                    className="about-image"
                />
            </div>
        </div>
    );
};

export default About;
