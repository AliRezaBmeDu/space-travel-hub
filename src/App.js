import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Mission from './pages/Mission';
import Rocket from './pages/Rocket';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" exact element={<Profile />} />
          <Route path="/missions" exact element={<Mission />} />
          <Route path="/rockets" exact element={<Rocket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
