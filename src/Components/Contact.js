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

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' with your EmailJS information
        emailjs.sendForm(
            'service_somzrbv', 
            'template_o6z6j4o', 
            e.target, 
            '5QwrQo4iV0CgrOpZk'
        )
        .then((result) => {
            console.log(result.text);
            setIsSubmitted(true);
        }, (error) => {
            console.log(error.text);
            setErrorMessage('Something went wrong, please try again.');
        });

        // Clear form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <h6>Please fill out the form below to discuss any work opportunities.</h6>
            {isSubmitted ? (
                <p>Thank you! Your message has been sent successfully.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <button type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
};

export default Contact;
