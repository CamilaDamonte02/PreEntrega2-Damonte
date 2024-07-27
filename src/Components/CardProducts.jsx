import PropTypes from 'prop-types';
import Card from './Card'

function CardProducts({product}) {
    return <Card 
    width="20vw" 
    height="25vw" 
    border="1px solid black" 
    >
        <a className='producto' href="">
            <div className='FotoProducto'><img src={product.foto} alt=""/></div>
            <div className='NombreProducto'><h1>{product.producto} línea {product.linea}</h1></div>
            <div className='precio'>
                <p className='precioNuevo'>{product.precioNuevo}</p>
                <p className='precioViejo'>{product.precioViejo}</p>
            </div>
        </a>
    </Card>
}

CardProducts.propTypes = {
    product: PropTypes.shape({
        foto: PropTypes.string.isRequired,
        producto: PropTypes.string.isRequired,
        linea: PropTypes.string.isRequired,
        precioNuevo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        precioViejo: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }).isRequired
};


export default CardProducts;
