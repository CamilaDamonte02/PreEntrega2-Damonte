import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { itemContext } from '../Context/ItemsContext.jsx';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import loader from '../assets/cargando.gif';
import ItemCount from './ItemCount.jsx';

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { addProduct } = useContext(itemContext);

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "Productos", id);
        
        getDoc(refDoc)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.error('No se encontró el producto.');
                }
            })
            .catch((error) => {
                console.error('Error al obtener el producto:', error);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!product) {
        return <p>No se encontró el producto.</p>;
    }

    const onAdd = (count) => {
        addProduct({ ...product, cantidad: count });
    }

    const descuento = product.rebaja.aplica ? product.rebaja.porcentaje : 0;
    const precioDescontado = descuento ? product.precio - (product.precio * (descuento / 100)) : product.precio;

    return (
        <div>
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
                                {descuento > 0 && <p>{descuento}% de descuento</p>}
                            </div>
                            <div className='PrecioProducto'>
                                {descuento ? (
                                    <>
                                        <p>${precioDescontado.toFixed(2)}</p>
                                        <p className='precioViejoProducto'>${product.precio.toFixed(2)}</p>
                                    </>
                                ) : (
                                    <p>${product.precio.toFixed(2)}</p>
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
                            <ItemCount className="BotonComprarProducto" stock={product.stock} onAdd={onAdd} />
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
}

export default ItemDetailContainer;
