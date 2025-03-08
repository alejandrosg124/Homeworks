import PropTypes from 'prop-types'
import { useState } from 'react'

function FirstApp() {

  const [texto, setTexto] = useState("")
  const [categorias, setCategorias] = useState([])

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && texto.trim() !== "") {
     const inputValue = texto.trim();
      setCategorias( [...categorias, inputValue] );
      setInputValue("");
      console.log(categorias)
    }
  };

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const añadirCategoria = (event) => {
    const inputValue = texto.trim();
    setCategorias([...categorias, inputValue]);
    setInputValue("");
  };

  const eliminarCategoria = (event) => {
    if (categorias.lenght > 0) {
      setCategorias([categorias.slice(0,-1)])
    }
  }

  return (
    <span>
    <h1>Challenge #2 y #4</h1>
    <h2>Añade Categorías a la lista</h2>
    <input type="text" placeholder="Escribe la categoría"  onChange={handleChange} onKeyDown={handleKeyPress} />
    <p>Añadirás {texto} a la lista</p>
    <ul>
      {categorias.map((category, index) => (
        <li key ={index}>{category}</li>
      ))}
    </ul>
    <div>
      <button onClick={añadirCategoria}>Añadir Categoría</button>
      <button onClick={eliminarCategoria}>Eliminar Categoría</button>
    </div>
    </span>
  )
}


export default FirstApp
