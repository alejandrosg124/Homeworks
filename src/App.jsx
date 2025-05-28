import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CityManager from './components/CityManager';
import GreenZoneManager from './components/GreenZoneManager';
import { useGreenZone } from './context/GreenZoneContext.jsx';

function App() {
  const { selectedCity, setSelectedCityName } = useGreenZone();

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/cities">Manager de Ciudades</Link>
            </li>
            {selectedCity && (
              <li>
                <Link to="/greenzones">Manager de Zonas verdes ({selectedCity.name})</Link>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/cities" element={<CityManager />} />
          <Route path="/greenzones" element={<GreenZoneManager />} />
          <Route path="/" element={<div>Bienvenido, da clic en Manager de Ciudades para continuar</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
