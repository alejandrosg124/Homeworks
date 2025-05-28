import React, { useState, useContext } from 'react';
import { GreenZoneContext } from '../context/GreenZoneContext.jsx';
import Tree from 'react-d3-tree';
import { calculateTotalGreenZones, calculateGreenZoneTreeHeight } from '../utils/treeHelpers';

function GreenZoneManager() {
  const { selectedCityPlain, addGreenZone, editGreenZone, findGreenZoneInPlainTree } = useContext(GreenZoneContext);
  const [zoneName, setZoneName] = useState('');
  const [parentZoneName, setParentZoneName] = useState('');
  const [editingZone, setEditingZone] = useState(null);
  const [newZoneName, setNewZoneName] = useState('');

  const containerStyle = {
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px'
  };

  if (!selectedCityPlain) {
    return <div>Selecciona una ciudad para manejar sus zonas verdes</div>;
  }

  const handleAddZone = () => {
    if (zoneName.trim()) {
      addGreenZone(selectedCityPlain.name, zoneName.trim(), parentZoneName.trim());
      setZoneName('');
      setParentZoneName('');
    }
  };

  const handleEditZone = () => {
    if (editingZone && newZoneName.trim()) {
      editGreenZone(selectedCityPlain.name, editingZone.name, newZoneName.trim());
      setEditingZone(null);
      setNewZoneName('');
    }
  };

  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <rect width="20" height="20" x="-10" y="-10" onClick={toggleNode} fill="lightblue" />
      <text fill="black" strokeWidth="0.5" x="25">
        {nodeDatum.name}
      </text>
    </g>
  );

  const toD3TreeFormat = (plainGreenZone) => {
    if (!plainGreenZone) return null;
    return {
      name: plainGreenZone.name,
      children: plainGreenZone.children ? plainGreenZone.children.map(toD3TreeFormat) : [],
    };
  };

  const treeData = selectedCityPlain.greenZones ? toD3TreeFormat(selectedCityPlain.greenZones) : null;
  const totalZones = calculateTotalGreenZones(selectedCityPlain.greenZones);
  const treeHeight = calculateGreenZoneTreeHeight(selectedCityPlain.greenZones);

  return (
    <div>
      <h2>Manager de zonas verdes de la ciudad {selectedCityPlain.name}</h2>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: '1' }}>
          <div style={containerStyle}>
            <h3>Añadir Zona verde</h3>
            <div>
              <input
                type="text"
                value={zoneName}
                onChange={(e) => setZoneName(e.target.value)}
                placeholder="Nombre"
              />
              <input
                type="text"
                value={parentZoneName}
                onChange={(e) => setParentZoneName(e.target.value)}
                placeholder="Zona verde padre (Opcional)"
              />
              <button onClick={handleAddZone}>Añadir Zona</button>
            </div>
          </div>

          <div style={containerStyle}>
            <h3>Editar Zona Verde</h3>
            {editingZone ? (
              <div>
                <input
                  type="text"
                  value={newZoneName}
                  onChange={(e) => setNewZoneName(e.target.value)}
                  placeholder="Nombre nueva zona"
                />
                <button onClick={handleEditZone}>Guardar</button>
                <button onClick={() => setEditingZone(null)}>Cancelar</button>
              </div>
            ) : (
              <div>Seleccionar zona a editar</div>
            )}
          </div>

          <div style={containerStyle}>
            <h3>Estadísticas</h3>
            <p>Zonas verdes totales: {totalZones}</p>
            <p>Altura zonas verdes: {treeHeight}</p>
          </div>
        </div>

        <div style={{ flex: '2' }}>
          <div style={{...containerStyle, height: 'calc(100vh - 200px)'}}>
            <h3>Green Zone Arbol</h3>
            <div style={{ width: '100%', height: 'calc(100% - 40px)' }}>
              {treeData ? (
                <Tree
                  data={treeData}
                  renderCustomNodeElement={renderRectSvgNode}
                  orientation="vertical"
                  translate={{ x: 200, y: 50 }}
                  pathFunc="step"
                  collapsible={true}
                  onNodeClick={(nodeDatum) => setEditingZone(findGreenZoneInPlainTree(nodeDatum.name, selectedCityPlain.greenZones))}
                />
              ) : (
                <div>No hay zonas verdes todavía</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreenZoneManager; 