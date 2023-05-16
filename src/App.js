import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import VehiclesPermanent from './pages/VehiclesPermanent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PremiumPass from './pages/PremiumPass';
import Houses from './pages/Houses';

function App() {

  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehiclepermanent" element={<VehiclesPermanent />} />
          <Route path="/premiunpass" element={<PremiumPass />} />
          <Route path="/houses" element={<Houses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
