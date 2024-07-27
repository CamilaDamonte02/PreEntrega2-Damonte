import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import loader from './assets/cargando.gif'
import CardProductsList from './Components/CardProductsList';
import data from './data/ariculosCarpinteria.json'
import Filtros from './Components/filtros'
import Cartel from './Components/Cartel'
import './App.css';

function App() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Para simular una tardanza
    // setTimeout es una función predefinida de JS donde el primer parámetro es la función y el segundo el tiempo de espera
    const myPromise = new Promise((res) => setTimeout(() => res(data), 0));
  
    myPromise
      .then(response => setProducts(response))
      .catch(error => console.error('Error:', error)) // Manejo de error
      .finally(() => setLoading(false));
  }, []);
  
  
  
  return (
    <>
      <NavBar />
      {loading ? (
        <img src={loader} alt='cargando' />
      ) : products.length ? (
        <div  loading={loading}>
          
          <h1 className="titulo-tienda">Tienda</h1>
          <div className="contenido-tienda">
            <Filtros />
            <div className='cardProductListContainer'>
              <CardProductsList products={products}/>
            </div>
          </div>
        </div>
      ) : (
        <main><Cartel nombre = 'Advertencia' descripcion='No hay productos disponibles'/></main>
      )}
    </>
  );
}

export default App;
