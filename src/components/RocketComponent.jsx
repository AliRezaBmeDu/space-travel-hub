import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import '../css/RocketComponent.css';

const RocketComponent = () => {
  let { rocketsDB } = useSelector((store) => store.rockets);
  const { isLoading } = useSelector((store) => store.rockets);

  useEffect(() => {
    rocketsDB = getRockets();
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
