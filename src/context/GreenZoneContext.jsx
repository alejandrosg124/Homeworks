import React, { createContext, useState, useContext, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GreenZone from '../GreenZone';
import City from '../City'; 
import { addGreenZoneToCity, editGreenZoneInCity } from '../store/citiesSlice';

export const GreenZoneContext = createContext(null);

export const GreenZoneProvider = ({ children }) => {
  const [selectedCityName, setSelectedCityName] = useState(null);
  const cities = useSelector(state => state.cities.cities);
  const dispatch = useDispatch();

  const selectedCityPlain = cities.find(city => city.name === selectedCityName);

  const selectedCity = useMemo(() => {
    if (selectedCityPlain) {
      const cityInstance = new City(selectedCityPlain.name);
      if (selectedCityPlain.greenZones) {
         const reconstructGreenZones = (plainZone) => {
          if (!plainZone) return null;
          const zoneInstance = new GreenZone(plainZone.name);
          zoneInstance.children = plainZone.children.map(reconstructGreenZones);
          return zoneInstance;
         };
         cityInstance.greenZones = reconstructGreenZones(selectedCityPlain.greenZones);
      }
      return cityInstance;
    }
    return null;
  }, [selectedCityPlain]);

  const findGreenZoneInPlainTree = (zoneName, currentNode) => {
    if (!currentNode) return null;
    if (currentNode.name === zoneName) return currentNode;
    for (const child of currentNode.children) {
      const found = findGreenZoneInPlainTree(zoneName, child);
      if (found) return found;
    }
    return null;
  };

  const updateGreenZoneInPlainTree = (oldName, newName, currentNode) => {
    if (!currentNode) return null;
    if (currentNode.name === oldName) {
      return { ...currentNode, name: newName };
    }
    const updatedChildren = currentNode.children.map(child => updateGreenZoneInPlainTree(oldName, newName, child)).filter(Boolean);

    if (updatedChildren.length !== currentNode.children.length || updatedChildren.some((child, index) => child !== currentNode.children[index])) {
       return { ...currentNode, children: updatedChildren };
    }

    return currentNode;
  };

  const addGreenZoneToPlainTree = (parentZoneName, newZone, currentNode) => {
      if (!currentNode) return null;

      if (currentNode.name === parentZoneName) {
          return { ...currentNode, children: [...currentNode.children, newZone] };
      }

      const updatedChildren = currentNode.children.map(child => addGreenZoneToPlainTree(parentZoneName, newZone, child)).filter(Boolean);

      if (updatedChildren.length !== currentNode.children.length || updatedChildren.some((child, index) => child !== currentNode.children[index])) {
         return { ...currentNode, children: updatedChildren };
      }

      return currentNode;
  };

  const addGreenZone = (cityName, zoneName, parentZoneName = null) => {
    dispatch(addGreenZoneToCity({ cityName, zoneName, parentZoneName }));
  };

  const editGreenZone = (cityName, oldZoneName, newZoneName) => {
    dispatch(editGreenZoneInCity({ cityName, oldZoneName, newZoneName }));
  };

  return (
    <GreenZoneContext.Provider value={{ selectedCity, selectedCityPlain, setSelectedCityName, addGreenZone, editGreenZone, findGreenZoneInPlainTree }}>
      {children}
    </GreenZoneContext.Provider>
  );
};

export const useGreenZone = () => useContext(GreenZoneContext); 