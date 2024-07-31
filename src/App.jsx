import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import RutaIncorrecta from './Components/RutaIncorrecta'
import ItemDetailContainer from './Components/ItemDetailContainer'


function App() {     
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='*' element={<RutaIncorrecta/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
