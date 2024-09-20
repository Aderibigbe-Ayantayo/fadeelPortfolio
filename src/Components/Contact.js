// import React from 'react';

// const Contact = () => {
//     return(
//         <div className="contact">
//             <h2>Contact Me</h2>
//             <p>Email: adex.fadeel1989@gmail.com</p>
//             <p>Github: <a href="https://github.com/Aderibigbe-Ayantayo">github.com/Aderibigbe-Ayantayo</a></p>
//             <p>Phone Number: +234-8082698912</p>
//         </div>
//     );
// };

// export default Contact;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then(() => {
                alert('Message sent successfully');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch(() => {
                alert('Failed to send message');
            });
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
