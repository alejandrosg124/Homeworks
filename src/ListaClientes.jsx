import { Link } from 'react-router-dom';

function ListaClientes({ clientes = [] }) {
  return (
    <div className="paddings">
    <div className="client-list">
      <Link to="/formulario"><button>Volver al Formulario</button></Link>
      <h3>Lista de Clientes</h3>
      {!clientes || clientes.length === 0 ? (
        <p>No hay clientes registrados</p>
      ) : (
        <ul>
          {clientes.map((cliente, index) => (
            <li key={index}>
              <h4>{cliente.nombre}</h4>
              
              {cliente.consultas && cliente.consultas.length > 0 && (
                <div className="consultas">
                  <h5>Consultas:</h5>
                  <ul>
                    {cliente.consultas.map((consulta, qIndex) => (
                      <li key={`q-${qIndex}`}>{consulta}</li>
                    ))}
                  </ul>
                </div>
              )}

              {cliente.reclamos && cliente.reclamos.length > 0 && (
                <div className="reclamos">
                  <h5>Reclamos:</h5>
                  <ul>
                    {[...cliente.reclamos].reverse().map((reclamo, cIndex) => (
                      <li key={`c-${cIndex}`}>{reclamo}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default ListaClientes;
