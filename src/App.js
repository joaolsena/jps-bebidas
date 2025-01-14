import './App.css';
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
      <p>&copy; 2024 JPS BEBIDAS. Todos os direitos reservados. Desenvolvido por <a href="mailto:joaolsena129@gmail.com" className="criador">João Sena</a>
      </p>  
    </div>
    </div>
  );
}

export default App;
