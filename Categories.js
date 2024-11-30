import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import bc from '../images/bc.jpg'
import sr from '../images/sr.jpg'
import ap from '../images/ap.jpg'
import cl from '../images/cl.jpeg'
import om from '../images/om.jpg'
import lc from '../images/lc.jpg'

const Categories = () => {
  // Adding more cake data
  const cakes = [
    {
      id: 1,
      name: "Butter Chicken",
      category: "Food",
      image: bc, // Replace with actual image paths
    },
    
    {
      id: 2,
      name: "Spring Roll",
      category: "Food",
      image: sr,  // Replace with actual image paths
    },
    {
      id: 3,
      name: "Alfredo Pasta",
      category: "Food",
      image: ap,  // Replace with actual image paths
    },
    {
      id: 4,
      name: "Chocolava Cake",
      category: "Velvet",
      image: cl, // Replace with actual image paths
    },
    {
      id: 5,
      name: "Oreo Milkshake",
      category: "Milkshake",
      image: om, // Replace with actual image paths
    },
   
    {
      id: 6,
      name: "Lemon Cake",
      category: "Citrus",
      image: lc, // Replace with actual image paths
    }
   
    
  ];

  return (
    <div className="categories-page">
      <h1 className="categories-title">Discover Our Delicious Categories</h1>
      <div className="categories-container">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            <img src={cake.image} alt={cake.name} className="cake-image" />
            <div className="cake-info">
              <h2 className="cake-name">{cake.name}</h2>
              <p className="cake-category">{cake.category}</p>
              <Link to={`/cake/${cake.id}`} className="view-details-btn">
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
