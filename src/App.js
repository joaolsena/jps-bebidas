import './App.css';
import NavBar from './Coponentes/NavBar';
import Nome from './Coponentes/Nome';
import Pesquisa from './Coponentes/Pesquisa';
import Produtos from './Coponentes/Protutos';
import Carrinho from './Coponentes/Carrinho';
function App() {
  return (
    <div className="App">
  <NavBar/>
  <Nome/>
  <Pesquisa/>
  <Produtos/>
  <Carrinho/>
  <div class="footer">
      <p>&copy; 2024 João Sena. Todos os direitos reservados.</p>    
    </div>
    </div>
  );
}

export default App;
