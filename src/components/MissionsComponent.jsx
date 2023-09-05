import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import '../css/MissionsComponent.css';

const MissionsComponent = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>
          &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => {
              const { name, id, description } = mission;
              return (
                <tr key={id}>
                  <th>{name}</th>
                  <td>
                    {description}
                  </td>
                  <td>
                    <button type="button">not a member</button>
                  </td>
                  <td>
                    <button type="button">Join Mission</button>
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
