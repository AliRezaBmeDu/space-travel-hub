import { useSelector } from 'react-redux';
import '../css/ProfileRocket.css';

const ProfileMission = () => {
  const { missions } = useSelector((store) => store.missions);
  // console.log('rockets', rockets);

  const joinedMissions = missions.filter((mission) => mission.joined === true);

  // console.log('reserved rockets', reservedRockets);

  if (joinedMissions.length === 0) {
    return (
      <div className="reserved-container">
        <h2>Reserved Missions</h2>
        <div className="rocket-profile">
          <p>None</p>
        </div>
      </div>
    );
  }

  return (
    <div className="reserved-container">
      <h2>Joined Missions</h2>
      {joinedMissions && joinedMissions.map((mission) => (
        <div key={mission.id} className="rocket-profile">
          <p>{mission.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileMission;
