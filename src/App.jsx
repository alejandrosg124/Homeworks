import { useState, useEffect } from 'react'
import { Graph } from 'react-d3-graph'
import './App.css'

function App() {
  const [graphData, setGraphData] = useState({
    nodes: [],
    links: []
  })

  const [selectedCity, setSelectedCity] = useState('')
  const [peopleInCity, setPeopleInCity] = useState([])

  const graphConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: 'lightgreen',
      size: 500,
      highlightStrokeColor: 'blue',
      labelProperty: 'name',
      fontSize: 20
    },
    link: {
      highlightColor: 'lightblue'
    },
    d3: {
        charge: -500,
        linkStrength: 0.8,
        disableLinkForce: false
    }
  }

  useEffect(() => {
    const cities = [
      { id: 'bogota', name: 'Bogotá' },
      { id: 'medellin', name: 'Medellín' },
      { id: 'cali', name: 'Cali' }
    ]

    const people = [
      { id: 'juan', name: 'Juan', age: 25, city: 'bogota' },
      { id: 'maria', name: 'María', age: 30, city: 'bogota' },
      { id: 'pedro', name: 'Pedro', age: 28, city: 'medellin' },
      { id: 'ana', name: 'Ana', age: 22, city: 'cali' }
    ]

    const nodes = [
      ...cities.map(city => ({
        id: city.id,
        name: city.name,
        type: 'city'
      })),
      ...people.map(person => ({
        id: person.id,
        name: person.name,
        type: 'person'
      }))
    ]

    const links = people.map(person => ({
      source: person.id,
      target: person.city
    }))

    setGraphData({ nodes, links })
  }, [])

  const handleCityClick = (clickedNode) => {
    setSelectedCity(clickedNode.name);
    const peopleInSelectedCity = graphData.nodes
      .filter(node => node.type === 'person')
      .filter(node => {
        const link = graphData.links.find(l => l.source === node.id && l.target === clickedNode.id);
        return link !== undefined;
      });
    setPeopleInCity(peopleInSelectedCity);
  };

  return (
    <div className="app-container">
      <h1>Grafo de Amigos y Ciudades</h1>
      <h2>Challenge #16</h2>
      <p>De clic en una ciudad, y podrá visualizar qué personas pertenecen a ella, en el recuadro inferior al grafo</p>
      <div className="graph-container">
        <Graph
          id="social-graph"
          data={graphData}
          config={graphConfig}
          onClickNode={node => {
            const clickedNodeData = graphData.nodes.find(n => n.id === node);
            if (clickedNodeData && clickedNodeData.type === 'city') {
              handleCityClick(clickedNodeData);
            }
          }}
        />
      </div>
      {selectedCity && (
        <div className="city-info" style={{ border: '2px solid red' }}>
          <h2>Personas en {selectedCity}</h2>
          <p>Total personas encontradas: {peopleInCity.length}</p>
          <ul>
            {peopleInCity.map(person => (
              <li key={person.id}>{person.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
