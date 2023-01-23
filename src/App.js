import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div> 
      <Navbar/> 
      <ItemListContainer greeting={"¡Bienvenido!"}/>
    </div>
  );
}

export default App;
