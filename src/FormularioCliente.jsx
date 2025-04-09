import { useState } from 'react';
import { Link } from 'react-router-dom';

function FormularioCliente({ onAgregarCliente }) {
  const [nombre, setNombre] = useState('');
  const [tipoTransaccion, setTipoTransaccion] = useState('consulta');
  const [detalles, setDetalles] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !detalles.trim()) return;
    
    onAgregarCliente({
      nombre,
      tipo: tipoTransaccion,
      detalles
    });

    setNombre('');
    setDetalles('');
  };

  return (
    <div className="paddings">
    <div className="client-list">

      <Link to="/lista"><button>Ver Lista de Clientes</button></Link>
      <h2>Formulario de Clientes</h2>
        <h3>Agregar un cliente nuevo</h3>
        <h3>Buen día, ingrese sus datos y seleccione si es consulta o reclamo. Si ya realizó una y desea realizar otra puede hacerlo escribiendo su mismo nombre</h3>
        <form onSubmit={manejarEnvio}>
        <div>
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
        </div>
        <div>
            <label>Tipo de transacción:</label>
            <div>
            <label>
            <input type="radio" value="consulta" checked={tipoTransaccion === 'consulta'}
                onChange={() => setTipoTransaccion('consulta')}/>
            Consulta
            </label>
            <label>
              <input type="radio" value="reclamo" checked={tipoTransaccion === 'reclamo'}
                onChange={() => setTipoTransaccion('reclamo')}/> Reclamo
            </label>
          </div>
        </div>

        <div>
            <label>Detalles:</label>
            <textarea value={detalles} onChange={(e) => setDetalles(e.target.value)} required/>
        </div>
        <button type="submit">Agregar</button>
    </form>
    </div>
    </div>
  );
}

export default FormularioCliente