function Produtos({ produtosFiltrados = [] }) {
    return (
      <div className="categories" id="productList">
        {produtosFiltrados.map((produto) => (
          <div key={produto.name} className="card" data-name={produto.name}>
            <img src={produto.image} alt={produto.name} />
            <h3>{produto.name}</h3>
            <h4>R$ {produto.price.toFixed(2)}</h4>
            <button className="add-to-cart" data-product={produto.name} data-price={produto.price}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default Produtos;
  