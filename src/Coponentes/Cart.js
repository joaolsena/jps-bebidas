import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, updateCart }) => {
  // Estado para controlar se o carrinho está visível
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Função para alternar a exibição do carrinho
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  // Função para aumentar a quantidade de um item
  const increaseQuantity = (itemName) => {
    updateCart((prevCart) =>
      prevCart.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Função para diminuir a quantidade de um item
  const decreaseQuantity = (itemName) => {
    updateCart((prevCart) =>
      prevCart.map((item) =>
        item.name === itemName && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0) // Remove itens com quantidade 0
    );
  };

  if (!Array.isArray(cart)) {
    return <p>Erro: Carrinho inválido!</p>; // Caso `cart` não seja um array válido
  }

  if (cart.length === 0) {
    return <p>Seu carrinho está vazio.</p>; // Exibe mensagem caso o carrinho esteja vazio
  }

  return (
    <div className="cart-container">
      {/* Botão de Carrinho */}
      <button id="cartButton" onClick={toggleCart}>
        Carrinho (<span id="cartCount">{cart.length}</span>)
      </button>

      {/* Exibe o carrinho de compras quando isCartVisible for true */}
      <div className={`cart ${isCartVisible ? 'show' : ''}`}>
        <div className="cart-items">
          <h3>Itens no Carrinho:</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.name}>
                {item.name} - R$ {(item.price * item.quantity).toFixed(2)} (x{item.quantity})
                 <div class="cart-header">
                  <button onClick={() => decreaseQuantity(item.name)}>-</button>
                  <button onClick={() => increaseQuantity(item.name)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <p>
            Total: R${' '}
            {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </p>
          <button onClick={() => navigate('/payment')}>Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
