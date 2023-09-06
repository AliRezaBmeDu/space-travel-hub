import React from 'react';
import { useSelector } from 'react-redux';

const ProfileRocket = () => {
  const { rockets } = useSelector((store) => store.rockets);
  console.log('rockets', rockets);

  if (!rockets) {
    return <div>Loading...</div>;
  }

  const reservedRockets = rockets.filter((rocket) => rocket.reserve === true);
  return (
    <div>
      {reservedRockets && reservedRockets.map((rocket) => (
        <div key={rocket.rocketId} className="rocket-profile">
          <p>{rocket.rocketName}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileRocket;
