import React, { useState } from 'react';
import Produtos from './Protutos';

function Pesquisa() {
  const [searchTerm, setSearchTerm] = useState('');

  // Lista original de produtos
  const todosProdutos = [
    { name: 'Heineken', price: 7.00, image: 'https://carrefourbrfood.vtexassets.com/arquivos/ids/23256938/cerveja-heineken-garrafa-600-ml-3.jpg' },
    { name: 'Água', price: 3.00, image: 'https://ibassets.com.br/ib.item.image.large/l-fd83a662da92460c81fae7b06f0f8bb2.jpeg' },
    { name: 'Coca Cola', price: 7.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ag72Tmv6D2Q8OdHVKLldaR644a3azLR8Fw&s' },
    { name: 'Guaraná', price: 4.00, image: 'https://www.galaxcommerce.com.br/sistema/upload/1994/produtos/refrigerante-guarana-antarctica-lata-350-ml_2020-11-24_14-10-38_0_535.jpeg' },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtrar os produtos com base no termo de busca
  const produtosFiltrados = todosProdutos.filter((produto) =>
    produto.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className='search-container'>
      <input 
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={handleSearch}
      ></input>
      <Produtos produtosFiltrados={produtosFiltrados} />
    </div>
  );
}

export default Pesquisa;
