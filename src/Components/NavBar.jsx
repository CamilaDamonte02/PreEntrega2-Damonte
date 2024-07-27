import Logo from '../assets/DR Muebles Blanco.png';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

export const NavBar = () => {
    return (
        <nav>
            <div className='Logo'>
                <img src={Logo} alt="Logo de DR Muebles" />
                <h1>DR Muebles</h1>
            </div>
            <ul>
                <ItemListContainer texto="Inicio" link="#" seleccionado="LinkNoSeleccionado"/>
                <ItemListContainer texto="Acerca de" link="#" seleccionado="LinkNoSeleccionado"/>
                <ItemListContainer texto="Proyecto" link="#" seleccionado="LinkNoSeleccionado"/>
                <ItemListContainer texto="Tienda" link="#" seleccionado="LinkSeleccionado"/>
                <ItemListContainer texto="Contacto" link="#" seleccionado="LinkNoSeleccionado"/>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
