import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cliente, ListaClientes } from './Cliente';
import FormularioCliente from './FormularioCliente';
import ListaClientesComponente from './ListaClientes';
import './App.css';

function App() {
  const [listaClientes] = useState(new ListaClientes());
  const [clientes, setClientes] = useState([]);

  const manejarAgregarCliente = ({ nombre, tipo, detalles }) => {
    let cliente = listaClientes.obtenerClientes().find(c => c.nombre === nombre);
    
    if (!cliente) {
      cliente = listaClientes.agregarCliente(nombre);
    }

    if (tipo === 'consulta') {
      cliente.agregarConsulta(detalles);
    } else {
      cliente.agregarReclamo(detalles);
    }

    setClientes([...listaClientes.obtenerClientes()]);
  };

  return (
    <Router>
      <div className="app">
        <h1>Centro de Atención</h1>
        <h1>Parcial #2</h1>
        <h3>Alejandro Solarte</h3>
        <Routes>
          <Route path="/formulario" element={<FormularioCliente onAgregarCliente={manejarAgregarCliente} />} />
          <Route path="/lista" element={<ListaClientesComponente clientes={clientes} />} />
          <Route path="/" element={<FormularioCliente onAgregarCliente={manejarAgregarCliente} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
