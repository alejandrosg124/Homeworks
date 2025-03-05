import { useState } from "react";

var imageId = 100;


export const ListaImagenes = () => {

    const [texto, setTexto] = useState("");
    const [imagenes, setImagenes] = useState([]);

    const agregarImagen = () => {
        if (imagenesId) {

          const nuevaImg = {
            id: imageId,
            url: `https://picsum.photos/id/${imageId}/200/300`,
      };
      setImagenes([...imagenes, nuevaImg]);
      setImagenesId("");
    }};
    

    const filtroImagenes = imagenes.filter((imagenes) =>
        imagenes.id.includes(texto)
    );

    return (
        <div>
          <button onClick={agregarImagen}>Agregar la imagen</button>
    
          <input type="text" value={texto} 
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Buscar"
          />

        <img src={`https://picsum.photos/id/${imageId}/200/300`} alt={`Imagen ${imagenes.id}`}/>
            <div>
            {filtroImagenes.map((imagenes) => (
              <div key={imagenes.id} >

                <img src={imagenes.url} alt={`Imagen ${imagenes.id}`}/>
                <p>{imagenes.id}</p>
              </div>
            ))}
            </div>
        </div>
    );
}