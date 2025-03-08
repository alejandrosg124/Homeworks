import { useState } from 'react'

function Challenge3 () {

    const [contador, setContador] = useState(0)
    const aumentarContador = () => {
        setContador(contador+1)
    }
    
    const disminuirContador = () => {
        if (contador == 0) {
            alert("No puedes disminuir más")
            return
        }
        setContador(contador-1)
    }

    const resetContador = () => {
        setContador(0)
    }

    return(
        <span>
        <h1>Challenge #3</h1>
        <p>Me has dado click {contador} veces</p>
        <div className="flex">
            <button onClick={aumentarContador}>Aumentar</button>
            <button onClick={disminuirContador}>Disminuir</button>
            <button onClick={resetContador}>Reset</button>
        </div>
        </span>

    )

}

export default Challenge3