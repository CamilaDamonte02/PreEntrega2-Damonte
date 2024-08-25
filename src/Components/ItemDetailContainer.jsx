import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/ariculosCarpinteria.json';
import {itemContext} from '../Context/ItemsContext.jsx'
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import loader from '../assets/cargando.gif'
import ItemCount from './ItemCount.jsx'

function ItemDetailContainer() {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)


    const {addProduct} = useContext(itemContext)

    useEffect(() => {
        const db =getFirestore();
        const refDoc = doc(db, "Productos", id)
        
        getDoc(refDoc)
        .then((snapshot) => {
            setProduct({id: snapshot.id, ...snapshot.data()})
        })
        .finally(() => setLoading(false))
            const foundProduct = data.find(p => p.id === id);
            setProduct(foundProduct);
            console.log(id)
    }, [id]);

    if (!product) {
        return <p>Cargando...</p>;
    }
    
    const onAdd = (count) => {
        addProduct({...product, cantidad: count})
    }

    return (<div>
            {loading ? (
                <div className="imagenCargando">
                    <img src={loader} alt="cargando" />
                </div>
            ) : (
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
                            {product.rebaja > 0 ? (
                                <p>${product.rebaja}%</p>
                            ) : null }  
                        </div>
                        <div className='PrecioProducto'>
                            {product.rebaja.aplica ? (
                                <>
                                    <p>${product.precio}</p>
                                    <p className='precioViejoProducto'>${product.precio - (product.precio*(product.rebaja/100))}</p>
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
                                        <td>{product.dimensiones[0]}</td>
                                    </tr>
                                    <tr>
                                        <td>Ancho</td>
                                        <td>{product.dimensiones[1]}</td>
                                    </tr>
                                    <tr>
                                        <td>Profundidad</td>
                                        <td>{product.dimensiones[2]}</td>
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
                        <ItemCount className="BotonComprarProducto" stock={product.stock} onAdd={onAdd}></ItemCount>
                    </div>
                </div>
                
            </main>
            )}
            </div>
    );
}


export default ItemDetailContainer;