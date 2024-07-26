import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import loader from './assets/cargando.gif'
import CardProductsList from './Components/CardProductsList';
import data from './data/ariculosCarpinteria.json'
import './App.css';

function App() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    //const myPromise = new Promise((res, rej) => res(data))
    //Para simular una tardanza
    //setTimeout es una función predefinida de js donde el primer parámetro es la función y el segundo el tiempo de espera
    const myPromise = new Promise((res, rej) => setTimeout(()=> res(data),0))
    myPromise
    .then(response => setProducts(response))
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <NavBar />
      {loading ? (
        <img src={loader} alt='cargando' />
      ) : (
        <CardProductsList products={products} loading={loading}/>
      )}
    </>
  );
}

export default App;
