import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCity, deleteCity, connectCities } from '../store/citiesSlice';
import { useGreenZone } from '../context/GreenZoneContext';
import CityNetworkGraph from './CityNetworkGraph';

const CityManager = () => {
  const [newCityName, setNewCityName] = useState('');
  const [sourceCity, setSourceCity] = useState('');
  const [targetCity, setTargetCity] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setSelectedCityName } = useGreenZone();
  const cities = useSelector(state => state.cities.cities);

  const handleAddCity = () => {
    if (newCityName.trim()) {
      dispatch(addCity({ name: newCityName.trim() }));
      setNewCityName('');
    }
  };

  const handleDeleteCity = (cityName) => {
    dispatch(deleteCity({ name: cityName }));
  };

  const handleSelectCity = (cityName) => {
    setSelectedCityName(cityName);
    navigate('/greenzones');
  };

  const handleConnectCities = () => {
    if (sourceCity.trim() && targetCity.trim()) {
      dispatch(connectCities({ 
        source: sourceCity.trim(), 
        target: targetCity.trim() 
      }));
      setSourceCity('');
      setTargetCity('');
    }
  };

  const containerStyle = {
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px'
  };

  return (
    <div>
      <h2>Manager de Ciudades</h2>
      <div style={containerStyle}>
        <input
          type="text"
          value={newCityName}
          onChange={(e) => setNewCityName(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleAddCity}>Añadir Ciudad</button>
      </div>

      <div style={containerStyle}>
        <h3>Connectar Ciudades</h3>
        <div>
          <input
            type="text"
            value={sourceCity}
            onChange={(e) => setSourceCity(e.target.value)}
            placeholder="Primera ciudad"
          />
          <input
            type="text"
            value={targetCity}
            onChange={(e) => setTargetCity(e.target.value)}
            placeholder="Segunda ciudad"
          />
          <button onClick={handleConnectCities}>Conectar Ciudades</button>
        </div>
      </div>

      <div style={containerStyle}>
        <h3>Lista de ciudades</h3>
        <ul>
          {cities.map(city => (
            <li key={city.name}>
              {city.name}
              <button onClick={() => handleSelectCity(city.name)}>Gestionar Zonas Verdes</button>
              <button onClick={() => handleDeleteCity(city.name)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>

      <div style={containerStyle}>
        <h3>Network de Ciudades</h3>
        <CityNetworkGraph />
      </div>
    </div>
  );
};

export default CityManager; 