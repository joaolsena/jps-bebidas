import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Coponentes/NavBar';
import Nome from './Coponentes/Nome';
import Pesquisa from './Coponentes/Pesquisa';
import Produtos from './Coponentes/produtos';

function App() {
  return (
    <div className="App">
  <NavBar/>
  <Nome/>
  <Pesquisa/>
  <Produtos/>
  
  <div class="footer">
      <p>&copy; 2024 João Sena. Todos os direitos reservados.</p>    
    </div>
    </div>
  );
}

export default App;
