import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/ariculosCarpinteria.json';
import {itemContext} from '../Context/ItemsContext.jsx'

function ItemDetailContainer() {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    const {addProduct} = useContext(itemContext)

    useEffect(() => {
            const foundProduct = data.find(p => p.id === id);
            setProduct(foundProduct);
            console.log(id)
    }, [id]);

    if (!product) {
        return <p>Cargando...</p>;
    }

    return (
        <main className='ProductoMuestra'>
            <div className='ContainerProductoMuestra'>
                <div className="ImagenProducto">
                    <img src={product.foto} alt={product.categoria} />
                </div>
                <div className="InformacionProducto">
                    <div className="NombresProducto">
                        <h1>{product.categoria}</h1>
                        <h2>{product.linea.replace(/_/g, ' ')}</h2>
                    </div>
                    <div className="DescuentoProducto">
                        {product.rebaja.aplica ? (
                            <p>${product.rebaja.porcentaje}%</p>
                        ) : null }  
                    </div>
                    <div className='PrecioProducto'>
                        {product.rebaja.aplica ? (
                            <>
                                <p>${product.precio}</p>
                                <p className='precioViejoProducto'>${product.precio - (product.precio*(product.rebaja.porcentaje/100))}</p>
                            </> 
                        ) : (
                            <p>${product.precio}</p>
                        )}  
                    </div>
                    <div className='DescripcionProducto'>
                        <p>{product.descripcion}</p>
                    </div>
                    <div className='CaracteristicasProducto'>
                        <p>Características</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Alto</td>
                                    <td>{product.dimensiones.alto}</td>
                                </tr>
                                <tr>
                                    <td>Ancho</td>
                                    <td>{product.dimensiones.ancho}</td>
                                </tr>
                                <tr>
                                    <td>Profundidad</td>
                                    <td>{product.dimensiones.profundidad}</td>
                                </tr>
                                <tr>
                                    <td>Peso</td>
                                    <td>{product.peso}</td>
                                </tr>
                                <tr>
                                    <td>Material</td>
                                    <td>{product.material}</td>
                                </tr>
                                <tr>
                                    <td>Cajones</td>
                                    <td>{product.cajones}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='BotonComprarProducto'>
                        <button onClick={() => addProduct(product)} ><img src="https://camiladamonte02.github.io/PreEntrega2-Damonte/src/assets/Carrito.png" alt="carrito" />Comprar</button>
                    </div>
                </div>
            </div>
            
        </main>
    );
}


export default ItemDetailContainer;