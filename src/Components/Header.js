
import React, { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Ensure that this CSS is being imported

const Header = ({ toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Ensure Home link is selected on first visit
    useEffect(() => {
        if (location.pathname !== "/") {
            // Redirect to Home if not already on the Home page
            setIsOpen(false); // Close the menu if navigating to Home
        }
    }, [location]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav>
                {/* Hamburger menu */}
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    <li><Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link></li>
                </ul>

                {/* Dark Mode Toggle Button */}
                <button onClick={toggleDarkMode} className="dark-mode-toggle">
                    Toggle Dark Mode
                </button>
            </nav>
        </header>
    );
};

export default Header;
