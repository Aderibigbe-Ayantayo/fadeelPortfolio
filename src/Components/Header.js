// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     return(
//         <header>
//             <nav>
//                 <ul>
//                     <li><Link to= "/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/projects">Projects</Link></li>
//                     <li><Link to="contact">Contact</Link></li>

//                 </ul>
//             </nav>
//         </header>
//     )
// };

// export default Header; 

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleDarkMode }) => {
    return (
        <header>
            <nav>
                <ul>
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
