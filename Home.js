import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Home.css';
import fc from '../images/fc.jpg'

function Home() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="home">
      <h1 className="foodwala">Welcome to TASTE HAVEN!</h1>
      <p>Your ultimate hub for delectable and mouthwatering delights, where every bite is a burst of flavor!</p>
      <p>Indulge in our handcrafted dishes, curated with the finest ingredients for the most memorable experience.</p>
      <div className="featured-section">
        <img
          src={fc}
          alt="Featured Cake"
          className="featured-image"
        />
        <div className="caption">
          <h2>Signature Molten Choco Pie</h2>
          <p>Enjoy the exceptional blend of creamy chocolate and heavenly satisfaction, guaranteed to satisfy your sweet tooth!</p>
          <p>Each bite is a perfect fusion of texture, flavor, and indulgence—made fresh, just for you!</p>
        </div>
      </div>
      <button
        className="cta-button"
        onClick={() => navigate('/categories')} // Redirect to Categories page
      >
        Explore Our Menu
      </button>
      <p>We take pride in offering a variety of dishes that cater to every taste—whether you’re in the mood for something savory, sweet, or both!</p>
      <p>Come experience a world of flavors that will leave you craving more. Your culinary adventure starts here.</p>
    </div>
  );
}

export default Home;
