import { useState } from "react";
import { BarraBusqueda } from "./BarraBusqueda";
import './componentes.css'

export const ListaImagenes = () => {

    const [buscar, setBuscar] = useState("");
    const [imagenes, setImagenes] = useState([]);
    const [imagenId, setImagenId] = useState("");

    const agregarImagen = () => {
        if (imagenId) {
          const nuevaImg = {
            id: imagenId,
            url: `https://picsum.photos/id/${imagenId}/200/300`,
          };
        setImagenes((prevImagenes) => [...prevImagenes, nuevaImg]);
        setImagenId("");
    }};
    
    const filtroImagenes = imagenes.filter((imagen) =>
        imagen.id.includes(buscar)
    );

    return (
        <>
          <BarraBusqueda 
            imagenId={imagenId}
            setImagenId={setImagenId}
            agregarImagen={agregarImagen}
          />

          <div className="imagenes-container">
            {filtroImagenes.map((imagen) => (
              <div key={imagen.id} >
                <img src={imagen.url} alt={`Imagen ${imagen.id}`}/>
                <p>Imagen con id #{imagen.id}</p>
              </div>
            ))}
            </div>
        </>
    );
}