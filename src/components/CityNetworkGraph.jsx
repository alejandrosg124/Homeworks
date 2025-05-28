import React, { useMemo } from 'react';
import { Graph } from 'react-d3-graph';
import { useSelector } from 'react-redux';

const CityNetworkGraph = () => {
  const cities = useSelector(state => state.cities.cities);
  const connections = useSelector(state => state.cities.connections);

  const data = useMemo(() => {
    const nodePositions = new Map();
    
    cities.forEach(city => {
      if (!nodePositions.has(city.name)) {
        nodePositions.set(city.name, {
          x: Math.random() * 500,
          y: Math.random() * 500,
          fx: Math.random() * 500,
          fy: Math.random() * 500
        });
      }
    });

    return {
      nodes: cities.map(city => {
        const pos = nodePositions.get(city.name);
        return {
          id: city.name,
          x: pos.x,
          y: pos.y,
          fx: pos.fx,
          fy: pos.fy,
          size: 200,
          color: '#1f77b4'
        };
      }),
      links: connections.map(conn => ({
        source: conn.source,
        target: conn.target,
        color: '#999'
      }))
    };
  }, [cities, connections]);

  const config = {
    nodeHighlightBehavior: true,
    node: {
      color: '#1f77b4',
      size: 200,
      highlightStrokeColor: 'blue',
      labelProperty: 'id'
    },
    link: {
      highlightColor: 'lightblue',
      color: '#999',
      strokeWidth: 2
    },
    d3: {
      gravity: -100,
      linkLength: 200
    },
    staticGraphWithDragAndDrop: true
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Graph
        id="city-network"
        data={data}
        config={config}
      />
    </div>
  );
};

export default CityNetworkGraph; 