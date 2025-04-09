import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>Challenge #7</h1>
        <h3>Alejandro Solarte</h3>

        <h4>Linked List:</h4>
        <Link to="/cancionesLinkedList">Linked List</Link>
        <h4>Double Linked List:</h4>
        <Link to="/doubleLinkedList">Double Linked List</Link>


      </div>
    </>
  )
}

export default App
