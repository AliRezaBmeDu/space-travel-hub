import React, { useState, useEffect } from 'react';
import { getRockets } from '../redux/rockets/rocketsSlice';
import { useSelector } from 'react-redux';
import '../css/RocketComponent.css';

const RocketComponent = () => {
  const { rocketDB } = useSelector((store) => store.rocket);
  
  useEffect(() => {
    const rocketsDB = getRockets();
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
          <img src={rocket.flickr_images[0]} alt="rocket" />
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
