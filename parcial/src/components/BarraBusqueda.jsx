import { useState } from "react"
export const BarraBusqueda = () => {
    
    const [texto, setTexto] = useState("")
    const [imagenes, setImagenes] = useState([]);

    const handleChange = (event) => {
        setTexto(event.target.value);
    };


    return (
        <form>
            <input type="text" placeholder="Buscar" onChange={handleChange} />
            <p>Mostrando Imágenes de: {texto}</p>

            <ul>
                {imagenes.map((imagenes, index) => (
                    <li key ={index}>{imagenes}</li>
                ))}
            </ul>
        </form>
    )
}