import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import '../css/RocketComponent.css';

const RocketComponent = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((store) => store.rockets);
  const { isLoading } = useSelector((store) => store.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

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
      {rockets && rockets.map((rocket) => (
        <div key={rocket.id} className="single-rocket">
          <img src={rocket.flickrImages[0]} alt="rocket" />
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
