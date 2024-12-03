function Produtos({ produtosFiltrados = [], addToCart }) {
  return (
    <div className="categories" id="productList">
      {produtosFiltrados.map((produto) => (
        <div key={produto.name} className="card">
          <img src={produto.image} alt={produto.name} />
          <h3>{produto.name}</h3>
          <h4>R$ {produto.price.toFixed(2)}</h4>
          <button onClick={() => addToCart(produto)}>
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
}

export default Produtos;
