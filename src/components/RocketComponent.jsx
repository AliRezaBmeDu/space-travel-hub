import React, { useState, useEffect } from 'react';
import '../css/RocketComponent.css';

const RocketComponent = () => {
  const [rocketsDB, setRocketsDB] = useState(null); // Initialize to null
  const [isLoading, setIsLoading] = useState(true);

  const getRockets = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/rockets');
      const output = await response.json();
      setRocketsDB(output);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRockets();
  }, []);

  if (isLoading) {
    return (
      <div className="quote-container">
        <div className="quote-author">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Render the content conditionally based on the value of rocketsDB
  return (
    <div className="rockets-container">
      <hr />
      {rocketsDB && rocketsDB.map((rocket) => (
        <div key={rocket.id} className="single-rocket">
          <img src={rocket.flickr_images[1]} alt="rocket" />
          <div>
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
            <button type="button" className="reserve-btn">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketComponent;
