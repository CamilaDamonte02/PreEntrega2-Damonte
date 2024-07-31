import React from "react"
import { useNavigate } from "react-router-dom"

function RutaIncorrecta(){
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/')
    }

    return <main>
        <div  className="RutaIncorrecta">
            <div>
                <h1>Ruta incorrecta</h1>
                <p>La ruta que ingresaste no es válida</p>
                <button onClick={handleButtonClick}>Volver a la página principal</button>
            </div>
        </div>
    </main>
}

export default RutaIncorrecta
