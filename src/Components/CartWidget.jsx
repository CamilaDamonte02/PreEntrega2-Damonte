import { Link } from "react-router-dom";
import Carrito from '../assets/Carrito.png';

export const CartWidget = () => {
    return (
        <Link to='/Cart' >
            <div className='Carrito'>
                <img src={Carrito} alt="Carrito de compras" />
                <div className='circuloNumeroCompras'>
                    <p>2</p>
                </div>
            </div>
        </Link>
    );
};

export default CartWidget;