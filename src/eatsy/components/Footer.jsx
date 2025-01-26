import React, { useState } from 'react';


const Footer = () => {
  const [showMorePlaces, setShowMorePlaces] = useState(false);
  const [showMoreCuisines, setShowMoreCuisines] = useState(false);
  const [showMoreExplore, setShowMoreExplore] = useState(false);

  const bestPlaces = [
    "Best Restaurants in Bangalore",
    "Best Restaurants in Pune",
    "Best Restaurants in Mumbai",
    "Best Restaurants in Delhi",
    "Best Restaurants in Hyderabad",
    "Best Restaurants in Kolkata",
    "Best Restaurants in Chennai",
    "Best Restaurants in Chandigarh",
    "Best Restaurants in Ahmedabad",
    "Best Restaurants in Jaipur",
    "Best Restaurants in Nagpur",
  ];

  const bestCuisines = [
    "Chinese Restaurant Near Me",
    "South Indian Restaurant Near Me",
    "Indian Restaurant Near Me",
    "Kerala Restaurant Near Me",
    "Korean Restaurant Near Me",
    "North Indian Restaurant Near Me",
    "Seafood Restaurant Near Me",
    "Bengali Restaurant Near Me",
    "Punjabi Restaurant Near Me",
    "Italian Restaurant Near Me",
    "Andhra Restaurant Near Me",
  ];

  const exploreItems = [
    "Explore Every Restaurants Near Me",
    "Explore Restaurants Near Me",
    "Explore Top Rated Restaurants Near Me",
  ];

  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Best Places to Eat Across Cities</h3>
        <ul>
          {bestPlaces.slice(0, showMorePlaces ? bestPlaces.length : 3).map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>
        {!showMorePlaces && bestPlaces.length > 3 && (
          <button onClick={() => setShowMorePlaces(true)}>Show More</button>
        )}
      </div>

      <div className="footer-section">
        <h3>Best Cuisines Near Me</h3>
        <ul>
          {bestCuisines.slice(0, showMoreCuisines ? bestCuisines.length : 3).map((cuisine, index) => (
            <li key={index}>{cuisine}</li>
          ))}
        </ul>
        {!showMoreCuisines && bestCuisines.length > 3 && (
          <button onClick={() => setShowMoreCuisines(true)}>Show More</button>
        )}
      </div>

      <div className="footer-section">
        <h3>Explore</h3>
        <ul>
          {exploreItems.slice(0, showMoreExplore ? exploreItems.length : 3).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {!showMoreExplore && exploreItems.length > 3 && (
          <button onClick={() => setShowMoreExplore(true)}>Show More</button>
        )}
      </div>

      <div className="footer-section">
        <h3>© 2025 Swiggy Limited</h3>
        <ul>
          <li>Company</li>
          <li>About Us</li>
          <li>Swiggy Corporate</li>
          <li>Contact us</li>
          
        </ul>
      </div>
    </footer>
  );
};

export default Footer;