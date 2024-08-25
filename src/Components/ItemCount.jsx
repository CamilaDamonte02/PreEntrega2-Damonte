import { useState } from "react";
import PropTypes from "prop-types";


export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    
    const handleIncrease = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    };

    const handleDecrease = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    const handleAdd = () => {
        onAdd(count);
        setCount(1);  
    };

    return (
        <div className="AgregarCarrito">
            <div>
                <button onClick={handleDecrease}>-</button> {/* Botón para decrementar */}
                <span>{ count }</span>
                <button onClick={handleIncrease}>+</button> {/* Botón para incrementar */}
            </div>
            <div>
                <button onClick={handleAdd}>
                    <img src="https://camiladamonte02.github.io/ProyectoFinal-Damonte/src/assets/Carrito.png" alt="carrito" />
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired, 
    onAdd: PropTypes.func.isRequired
};

export default ItemCount;
