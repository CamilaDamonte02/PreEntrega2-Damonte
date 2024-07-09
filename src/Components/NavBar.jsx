import React from 'react';
import Logo from '../assets/DR Muebles Blanco.png';
import Carrito from '../assets/Carrito.png';

export const NavBar = () => {
    return (
        <nav>
            <div className='Logo'>
                <img src={Logo} alt="Logo de DR Muebles" />
                <h1>DR Muebles</h1>
            </div>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Proyecto</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div className='Carrito'><img src={Carrito} alt="Carrito de compras" /></div>
        </nav>
    );
};

export default NavBar;
