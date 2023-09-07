import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Mission from './pages/Mission';
import Rocket from './pages/Rocket';
import { getRockets } from './redux/rockets/rocketsSlice';
import { fetchMissions } from './redux/missions/missionsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/missions" exact element={<Mission />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/" exact element={<Rocket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
