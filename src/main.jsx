import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CancionesLinkedList from './pages/CancionesLinkedList'
import DoubleLinkedList from './pages/DoubleLinkedList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cancionesLinkedList" element={<CancionesLinkedList />} />
        <Route path="/doubleLinkedList" element={<DoubleLinkedList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
