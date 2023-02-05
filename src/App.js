import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navigation/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Navigation/Home';

function App() {
  return (
    <BrowserRouter> 
    <Navbar/>
      <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
