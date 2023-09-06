import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, toggleReserve } from '../redux/rockets/rocketsSlice';
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

  console.log('How the rockets look like: ', rockets);

  // Function to handle image load error for the first rocket
  const handleFirstRocketImageError = () => {
    setFirstRocketImageLoadError(true);
  };

  // Function to handle reserve button
  const handleReserveButton = (id) => {
    dispatch(toggleReserve(id));
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
            <p>
              <span>
                {rocket.reserve && (
                  <span style={{ backgroundColor: 'yellow', marginRight: '10px' }}>
                    Reserved
                  </span>
                )}
                {rocket.description}
              </span>
            </p>
            <button
              type="button"
              className="reserve-btn"
              onClick={() => handleReserveButton(rocket.rocketId)}
            >
              { rocket.reserve ? 'Cancel Reservation' : 'Reserve Rocket' }
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketComponent;
