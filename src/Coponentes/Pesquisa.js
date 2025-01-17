import React, { useState } from 'react';
import Produtos from './produtos';
import Cart from './Cart'; // Componente que exibe o carrinho

function Pesquisa() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);


  const todosProdutos = [
    { name: 'Heineken', price: 7.00, image: 'https://carrefourbrfood.vtexassets.com/arquivos/ids/23256938/cerveja-heineken-garrafa-600-ml-3.jpg' },
    { name: 'Água', price: 3.00, image: 'https://ibassets.com.br/ib.item.image.large/l-fd83a662da92460c81fae7b06f0f8bb2.jpeg' },
    { name: 'Coca Cola 1L', price: 7.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ag72Tmv6D2Q8OdHVKLldaR644a3azLR8Fw&s' },
    { name: 'Guaraná', price: 4.00, image: 'https://www.galaxcommerce.com.br/sistema/upload/1994/produtos/refrigerante-guarana-antarctica-lata-350-ml_2020-11-24_14-10-38_0_535.jpeg' },
    { name: 'Coca-cola Lata', price: 5.00, image: 'https://prezunic.vtexassets.com/arquivos/ids/210693/66db573a62edc14e790f8550.jpg?v=638612475473130000' },
    { name: 'Fanta Uva lata', price: 4.00, image: 'https://andinacocacola.vtexassets.com/arquivos/ids/158546-336-336?v=638659855346030000&width=336&height=336&aspect=true' },
     { name: 'AMSTEL', price: 3.00, image: 'https://static.paodeacucar.com/img/uploads/1/498/24656498.jpg' },
     { name: 'SKOL', price: 3.00, image: 'https://prezunic.vtexassets.com/arquivos/ids/193015/6568d783e1d9f5b4beb95faa.jpg?v=638369665355430000' },
  ];

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const produtosFiltrados = todosProdutos.filter((produto) =>
    produto.name.toLowerCase().includes(searchTerm)
  );

  const addToCart = (produto) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === produto.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === produto.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...produto, quantity: 1 }];
    });
  };

  // Função que permite atualizar o carrinho diretamente
  const updateCart = (newCart) => {
    setCart(newCart);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <Produtos produtosFiltrados={produtosFiltrados} addToCart={addToCart} />
      <Cart cart={cart} updateCart={updateCart} /> {/* Exibir o carrinho com atualização */}
    </div>
  );
}

export default Pesquisa;
