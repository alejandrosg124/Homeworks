import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
  connections: []
};

const findGreenZoneInPlainTree = (zoneName, currentNode) => {
  if (!currentNode) return null;
  if (currentNode.name === zoneName) return currentNode;
  for (const child of currentNode.children) {
    const found = findGreenZoneInPlainTree(zoneName, child);
    if (found) return found;
  }
  return null;
};

const updateGreenZoneInTree = (tree, oldName, newName) => {
  if (!tree) return null;
  if (tree.name === oldName) {
    return { ...tree, name: newName };
  }
  return {
    ...tree,
    children: tree.children.map(child => updateGreenZoneInTree(child, oldName, newName))
  };
};

const addGreenZoneToTree = (tree, parentName, newZone) => {
  if (!tree) return null;
  if (tree.name === parentName) {
    return {
      ...tree,
      children: [...tree.children, newZone]
    };
  }
  return {
    ...tree,
    children: tree.children.map(child => addGreenZoneToTree(child, parentName, newZone))
  };
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cities = [...state.cities, { name: action.payload.name, greenZones: null }];
    },
    deleteCity: (state, action) => {
      const cityName = action.payload.name;
      state.cities = state.cities.filter(city => city.name !== cityName);
      state.connections = state.connections.filter(
        conn => conn.source !== cityName && conn.target !== cityName
      );
    },
    addGreenZoneToCity: (state, action) => {
      const { cityName, zoneName, parentZoneName } = action.payload;
      const cityIndex = state.cities.findIndex(city => city.name === cityName);
      
      if (cityIndex === -1) {
        console.error("Ciudad no encontrada.");
        return;
      }

      const city = state.cities[cityIndex];
      const newZone = { name: zoneName, children: [] };

      if (parentZoneName === null || parentZoneName === '') {
        if (city.greenZones) {
          console.error("La ciudad ya tiene una zona verde raíz. No se puede añadir otra.");
          return;
        }
        state.cities = state.cities.map((c, index) => 
          index === cityIndex 
            ? { ...c, greenZones: newZone }
            : c
        );
      } else {
        if (!city.greenZones) {
          console.error("No se puede añadir una subzona, la ciudad no tiene zona verde raíz.");
          return;
        }

        const updatedGreenZones = addGreenZoneToTree(city.greenZones, parentZoneName, newZone);
        if (!updatedGreenZones) {
          console.error(`Zona padre '${parentZoneName}' no encontrada.`);
          return;
        }

        state.cities = state.cities.map((c, index) => 
          index === cityIndex 
            ? { ...c, greenZones: updatedGreenZones }
            : c
        );
      }
    },
    editGreenZoneInCity: (state, action) => {
      const { cityName, oldZoneName, newZoneName } = action.payload;
      const cityIndex = state.cities.findIndex(city => city.name === cityName);
      
      if (cityIndex === -1 || !state.cities[cityIndex].greenZones) {
        console.error(cityIndex === -1 ? "Ciudad no encontrada." : "La ciudad no tiene zonas verdes para editar.");
        return;
      }

      const updatedGreenZones = updateGreenZoneInTree(
        state.cities[cityIndex].greenZones,
        oldZoneName,
        newZoneName
      );

      if (!updatedGreenZones) {
        console.error(`Zona verde '${oldZoneName}' no encontrada.`);
        return;
      }

      state.cities = state.cities.map((c, index) => 
        index === cityIndex 
          ? { ...c, greenZones: updatedGreenZones }
          : c
      );
    },
    connectCities: (state, action) => {
      const { source, target } = action.payload;
      
      if (source === target) {
        console.error("No se puede conectar una ciudad consigo misma.");
        return;
      }

      const sourceExists = state.cities.some(city => city.name === source);
      const targetExists = state.cities.some(city => city.name === target);

      if (!sourceExists || !targetExists) {
        console.error("Ambas ciudades deben existir para crear una conexión.");
        return;
      }

      const connectionExists = state.connections.some(
        conn => (conn.source === source && conn.target === target) || 
                (conn.source === target && conn.target === source)
      );

      if (connectionExists) {
        console.error("Ya existe una conexión entre estas ciudades.");
        return;
      }

      state.connections = [...state.connections, { source, target }];
    },
    disconnectCities: (state, action) => {
      const { source, target } = action.payload;
      state.connections = state.connections.filter(
        conn => !(conn.source === source && conn.target === target) && 
                !(conn.source === target && conn.target === source)
      );
    }
  },
});

export const { 
  addCity, 
  deleteCity, 
  addGreenZoneToCity, 
  editGreenZoneInCity,
  connectCities,
  disconnectCities
} = citiesSlice.actions;

export default citiesSlice.reducer; 