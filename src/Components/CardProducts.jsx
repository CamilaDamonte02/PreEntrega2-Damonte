import Card from './Card'

function CardProducts({product}) {
    return <Card 
    width="13vw" 
    height="15vw" 
    border="1px solid black" 
    >
        <a className='producto' href="">
            <div><img src={product.foto} alt="" className='FotoProducto' /></div>
            <div><h1 className='NombreProducto'>{product.producto} línea {product.linea}</h1></div>
            <div>
                <p className='precioNuevoProducto'>{product.precioNuevo}</p>
                <p className='precioprecioViejo'>{product.precioViejo}</p>
            </div>
        </a>
    </Card>
}

export default CardProducts;
