import { Link } from "react-router-dom";
import Carrito from '../assets/Carrito.png';

import { useContext } from "react";
import { itemContext } from "../Context/ItemsContext";


export const CartWidget = () => {
    const { getTotalQuantity } = useContext(itemContext);
    const totalQuantity = getTotalQuantity();

    return (
        <Link to='/Cart' style={{ textDecoration: 'none' }} >
            <div className='Carrito'>
                <img src={Carrito} alt="Carrito de compras" />
                <div className='circuloNumeroCompras'>
                    <p>{totalQuantity}</p>
                </div>
            </div>
        </Link>
    );
};

export default CartWidget;