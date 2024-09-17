
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = ({ toggleDarkMode }) => {
//     return (
//         <header>
//             <nav>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/projects">Projects</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/testimonials">Testimonials</Link></li>
//                 </ul>
//                 <button onClick={toggleDarkMode} className="dark-mode-toggle">
//                     Toggle Dark Mode
//                 </button>
           
//             </nav>
//         </header>
        
//     );
// };

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file

const Header = ({ toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                </ul>
                <button onClick={toggleDarkMode} className="dark-mode-toggle">
                    Toggle Dark Mode
                </button>
            </nav>
        </header>
    );
};

export default Header;
