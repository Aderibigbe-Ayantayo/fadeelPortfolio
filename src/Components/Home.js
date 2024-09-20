import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Testimonials from './Testimonials';
import personalImage from './Assets/images/img1.jpg'; // Import your image
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section or Intro Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p>Hi,</p>
            <h1>I'm <span className="highlight">Fadeel</span></h1>
            <h1>Software Developer</h1>
            <p>
              I am a full-stack developer with a passion for building clean and
              responsive web applications.
            </p>
            <a href="#/contact" className="btn hire-me">Hire Me</a> {/* A quick CTA */}
          </div>

          {/* Image Section */}
          <div className="hero-image">
            <img src={personalImage} alt="Fadeel" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
