import Card from './Card'
import imagen from '../assets/FotosMuebles/1.png'

function CardProducts({product}) {
    return <Card 
    width="200px" 
    height="10vw" 
    border="1px solid black" 
    >
        <a href="">
            <div><img src="../assets/FotosMuebles/1.png" alt="" /></div>
            <div><h1>{product.producto} línea {product.linea}</h1></div>
            <div>
                <p>{product.precioNuevo}</p>
                <p>{product.precioViejo}</p>
            </div>
        </a>
    </Card>
}

export default CardProducts;
