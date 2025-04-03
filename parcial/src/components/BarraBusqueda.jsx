
export const BarraBusqueda = ({ imagenId, setImagenId, agregarImagen }) => {

    return (
        <>
        <h1>Busca y agrega tus imágenes</h1>
        <h2>Parcial #1 - Alejandro Solarte</h2>
        <h2>- - -</h2>
        <div className="bordes">
        <h3>Escribe aquí:</h3>

        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text"
                value={imagenId}
                placeholder="Agregar Imagen Por ID"
                onChange={(e) => setImagenId(e.target.value)} 
            />

            <p>Agregarás la imagen #{imagenId}</p>

            <button onClick={agregarImagen}>Agregar la imagen</button>
        </form>
        </div>
        </>
    )
}