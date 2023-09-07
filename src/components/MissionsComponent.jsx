import { useDispatch, useSelector } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';
import '../css/MissionsComponent.css';

const MissionsComponent = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th className="empty-space">
          &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => {
              const {
                name, id, description, joined,
              } = mission;
              return (
                <tr key={id} data-testid="mission">
                  <th>{name}</th>
                  <td>
                    {description}
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${joined ? 'active' : 'non-active'} member-button`}
                    >
                      {joined ? 'Active Member' : 'Not a Member'}
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${joined ? 'leave-mission' : 'join-mission'} mission-button`}
                      onClick={() => dispatch(joinMission({ id }))}
                    >
                      { joined ? 'Leave Mission' : 'Join Mission'}
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </main>
  );
};

export default MissionsComponent;
