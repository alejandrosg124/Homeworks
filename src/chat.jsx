import React, { useEffect, useState } from 'react';
import { db } from './firebase/config'
import { ref, push, onChildAdded } from 'firebase/database';

const Chat = () => {
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    const mensajesRef = ref(db, 'mensajes');
    onChildAdded(mensajesRef, (snapshot) => {
      const nuevoMensaje = snapshot.val();
      setMensajes((prev) => [...prev, nuevoMensaje]);
    });
  }, []);

  const enviarMensaje = () => {
    const mensajesRef = ref(db, 'mensajes');
    push(mensajesRef, {
      texto: mensaje,
      timestamp: Date.now()
    });
    setMensaje('');
  };

  return (
    <div>
      <h2>Chat en tiempo real con firebase</h2>

      <input type="text" value={mensaje} onChange={(e) => setMensaje(e.target.value)}
        placeholder="Escribe un mensaje"/>
      <button onClick={enviarMensaje}>Enviar</button>

      <ul>
        {mensajes.map((msg, index) => (
          <li key={index} >
            {msg.texto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
