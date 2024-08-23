import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import RutaIncorrecta from './Components/RutaIncorrecta';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {Cart} from './Components/Cart';
import { Provider } from './Context/ItemsContext';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />  
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/Cart' element={<Cart />} />  {/* Ruta para el carrito */}
          <Route path='*' element={<RutaIncorrecta />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
