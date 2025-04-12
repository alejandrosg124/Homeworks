import { useState } from 'react';

class Stack {
    constructor() {
        this.libros = [];
    }
    push(libro){
        this.libros.push(libro);
    }
    print() {
        this.libros.slice().reverse().forEach(item => {
            console.log(item);
        })
    }

}

const StacksChallenge = () => {
    const [libro, setLibro] = useState({ Titulo: "", ISBN: "", Autor: "", Editorial: "" });
    const [librosEnPantalla, setLibrosEnPantalla] = useState([]);

    const [stack] = useState(new Stack());

    const handleChange = (event) => {
        setLibro({ ...libro, [event.target.name]: event.target.value });
    }


    const añadirLibro = (event) => {
        event.preventDefault();
        stack.push(libro);
        stack.print();
        setLibrosEnPantalla([...stack.libros]);
        setLibro({ Titulo: "", ISBN: "", Autor: "", Editorial: "" });
    }

    return(
    <>
        <h3>Challenge #8</h3>
        <form className="form" onSubmit={añadirLibro}>
            <input type="text" name="Titulo" placeholder="Escribe el título" value={libro.Titulo} onChange={handleChange} required></input>
            <input type="text" name="ISBN" placeholder="Escribe el ISBN" value={libro.ISBN} onChange={handleChange} required></input>
            <input type="text" name="Autor" placeholder="Escribe el autor" value={libro.Autor} onChange={handleChange} required></input>
            <input type="text" name="Editorial" placeholder="Escribe el editorial" value={libro.Editorial} onChange={handleChange} required></input>
            <button type="submit">Añadir Libro</button>
        </form>
        <ul>
            {librosEnPantalla.slice().reverse().map((libro, index) => (
                <li key={index}>
                    <strong>{libro.Titulo}</strong> - {libro.Autor} ({libro.ISBN}, {libro.Editorial})
                </li>
            ))}
        </ul>

    </>
    )
}

export default StacksChallenge;