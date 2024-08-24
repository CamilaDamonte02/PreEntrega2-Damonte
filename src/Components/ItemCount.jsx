import { useState } from "react";
import PropTypes from "prop-types"; 


export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)
    
    const handleDecrease = () =>{
        if (count < stock) {
            setCount((prev) => prev +1)
        }
    } 
    const handleIncrease = () =>{
        if(count > 1) {
            setCount((prev) => prev - 1)
        }
    } 
    const handleAdd = () => {
        onAdd(count)
        setCount(1)
    }
    return (
        <div className="AgregarCarrito">
            <div>
                <button onClick={handleIncrease}>+</button>
                <span>{ count }</span>
                <button onClick={handleDecrease}>-</button>
            </div>
            <div>
                <button onClick={handleAdd}><img src="https://camiladamonte02.github.io/ProyectoFinal-Damonte/src/assets/Carrito.png" alt="carrito" />Agregar al carrito</button>
            </div>
        </div>
    )
}

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired, // 'stock' debe ser un número y es obligatorio
    onAdd: PropTypes.func.isRequired // 'onAdd' debe ser una función y es obligatorio
};


export default ItemCount