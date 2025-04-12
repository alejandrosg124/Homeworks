import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Login } from './store/auth/Login'
import { Registro } from './store/auth/registro'
import Chat from './chat'
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
        <Link to="/chat"><button>Chat en tiempo real</button></Link>
        <Link to="/"><button>Login</button></Link>

      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Login />} />
        <Route path="/chat" element={<Chat />} />

      </Routes>
    </>
    
  )
}

export default App
