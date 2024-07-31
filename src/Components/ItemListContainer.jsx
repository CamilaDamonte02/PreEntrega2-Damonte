import React from 'react'
import { useEffect, useState } from 'react'
import Filtros from './filtros'
import CardProductsList from './CardProductsList'
import data from '../data/ariculosCarpinteria.json'
import { useParams } from 'react-router-dom'
import loader from '../assets/cargando.gif'
import Cartel from './Cartel'


function ItemListContainer(){

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const myPromise = new Promise((res) => {
            setTimeout(() => res(data), 500);
        })
       
        myPromise.then(res => {
            console.table(categoryId);
            if (!categoryId) {
                // Si es undefined, mostrar todos los productos
                setProducts(res);
            } else {
                // Si no es undefined, mostrar solo los productos filtrados
                // Filtra por categoría
                const filteredProducts = res.filter(i => i.categoria.toLowerCase() === categoryId.toLowerCase() || i.linea.toLowerCase() === categoryId.toLowerCase());
                setProducts(filteredProducts);
            }
            console.table(products);
            console.log("categoryId:", categoryId);
            setLoading(false);
        });
    }, [categoryId]);

    return (
        <div>
            {loading ? (
                <div className="imagenCargando">
                    <img src={loader} alt="cargando" />
                </div>
            ) : products.length ? (
                <div className="tienda body">
                    <img className="Portada" src="https://camiladamonte02.github.io/PreEntrega2-Damonte/src/assets/portadaTienda.png" alt="Portada" />
                    <h1 className="titulo-tienda">Tienda</h1>
                    <div className="contenido-tienda">
                        <Filtros />
                        <div className="cardProductListContainer">
                            <CardProductsList products={products} />
                        </div>
                    </div>
                </div>
            ) : (
                <main>
                    <Cartel nombre="Advertencia" descripcion="No hay productos disponibles" />
                </main>
            )}
        </div>
    );
}

export default ItemListContainer;