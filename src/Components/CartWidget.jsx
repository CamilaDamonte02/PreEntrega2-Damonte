import React from 'react';
import Carrito from '../assets/Carrito.png';

export const CartWidget = () => {
    return (
        <div className='Carrito'>
            <img src={Carrito} alt="Carrito de compras" />
            <div className='circuloNumeroCompras'>
                <p>2</p>
            </div>
        </div>
    );
};

export default CartWidget;