import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import '../css/RocketComponent.css';

// Placeholder image URL for the first rocket if it fails to load
const placeholderImageUrl = 'https://i.imgur.com/DaCfMsj.jpg';

const RocketComponent = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((store) => store.rockets);
  const { isLoading } = useSelector((store) => store.rockets);
  const [firstRocketImageLoadError, setFirstRocketImageLoadError] = useState(false);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  // Function to handle image load error for the first rocket
  const handleFirstRocketImageError = () => {
    setFirstRocketImageLoadError(true);
  };

  if (isLoading) {
    return (
      <div className="quote-container">
        <div className="quote-author">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Render the content conditionally based on the value of rockets DB
  return (
    <div className="rockets-container">
      <hr />
      {rockets && rockets.map((rocket, index) => (
        <div key={rocket.rocketId} className="single-rocket">
          <img
            src={(index === 0 && firstRocketImageLoadError)
              ? placeholderImageUrl : rocket.flickrImages[0]}
            alt="rocket"
            onError={index === 0 ? handleFirstRocketImageError : undefined}
          />
          <div className="rocket-info">
            <strong>{rocket.rocketName}</strong>
            <p>{rocket.description}</p>
            <button type="button" className="reserve-btn">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketComponent;
