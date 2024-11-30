import React from 'react';
import './About.css';

function About() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="about">
      <header className="about-header">
        <h1>About Us</h1>
        <p className="intro-text">
        <p className="intro-text">
  Welcome to Flavorscape, your gateway to Taste Heaven, where every bite transports you to a world of flavors. Whether you're craving bold, savory dishes or sweet indulgences, our menu blends the finest ingredients to create unforgettable experiences. From sizzling appetizers to decadent desserts, we offer a delightful mix of comforting and adventurous tastes. Come, explore the rich fusion of fresh, handpicked ingredients and discover a dining experience like no other—one that will have you coming back for more!
</p>
        </p>
      </header>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" placeholder="Write your message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <footer className="about-footer">
        <div className="socials">
          <a href="https://www.facebook.com/yourbakery" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/yourbakery" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>&copy; 2024 FOOD WALLA - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
