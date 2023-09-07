import React from 'react';
import { useSelector } from 'react-redux';
import '../css/ProfileRocket.css';

const ProfileRocket = () => {
  const { rockets } = useSelector((store) => store.rockets);
  console.log('rockets at profile rocket component', rockets);

  if (!rockets) {
    return (
      <div className="reserved-container">
        <h2>Reserved Rockets</h2>
        <div className="rocket-profile">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const reservedRockets = rockets.filter((rocket) => rocket.reserve === true);

  if (reservedRockets.length === 0) {
    return (
      <div className="reserved-container">
        <h2>Reserved Rockets</h2>
        <div className="rocket-profile">
          <p>None</p>
        </div>
      </div>
    );
  }

  return (
    <div className="reserved-container">
      <h2>Reserved Rockets</h2>
      {reservedRockets && reservedRockets.map((rocket) => (
        <div key={rocket.rocketId} className="rocket-profile">
          <p>{rocket.rocketName}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileRocket;
