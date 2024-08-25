import { useEffect, useState } from 'react';
import Filtros from './filtros';
import CardProductsList from './CardProductsList';
import { useParams } from 'react-router-dom';
import loader from '../assets/cargando.gif';
import Cartel from './Cartel';
import { getFirestore, getDocs, where, query, collection } from 'firebase/firestore';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryId, lineId } = useParams();  
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        let refCollection;

        if (categoryId) {
            refCollection = query(
                collection(db, 'Productos'),
                where('categoria', '==', categoryId)
            );
        } else if (lineId) {
            refCollection = query(
                collection(db, 'Productos'),
                where('linea', '==', lineId)
            );
        } else {
            refCollection = collection(db, 'Productos');
        }

        getDocs(refCollection)
            .then((snapshot) => {
                const productsData = snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                console.log('Productos obtenidos:', productsData);
                setProducts(productsData);
            })
            .catch((error) => {
                console.error('Error al obtener los productos:', error);
            })
            .finally(() => setLoading(false));
    }, [categoryId, lineId]);  

    return (
        <div>
            {loading ? (
                <div className="imagenCargando">
                    <img src={loader} alt="cargando" />
                </div>
            ) : (
                <div className="tienda body">
                    <img className="Portada" src="https://camiladamonte02.github.io/ProyectoFinal-Damonte/src/assets/portadaTienda.png" alt="Portada" />
                    <h1 className="titulo-tienda">Tienda</h1>
                    <div className="contenido-tienda">
                        <Filtros />
                        <div className="cardProductListContainer">
                            {products.length ? (
                                <CardProductsList products={products} />
                            ) : (
                                <Cartel nombre="Advertencia" descripcion="No hay productos disponibles" />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ItemListContainer;
