import React from 'react';
import '../css/ProfilePage.css';
import ProfileRocket from '../components/ProfileRocket';
import ProfileMission from '../components/ProfileMission';

const Profile = () => (
  <div className="rocket-mission-container">
    <ProfileMission />
    <ProfileRocket />
  </div>
);

export default Profile;
