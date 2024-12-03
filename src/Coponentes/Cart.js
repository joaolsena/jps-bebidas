import React, { useState } from 'react';
import PaymentForm from './PaymentForm';

const Cart = ({ cart, updateCart }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const increaseQuantity = (itemName) => {
    updateCart((prevCart) =>
      prevCart.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemName) => {
    updateCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === itemName && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) 
    );
  };

  // Função para confirmar o pagamento
  const confirmPayment = (paymentMethod, deliveryMethod, details) => {
    // Verifica se todos os campos estão preenchidos
    if (!paymentMethod || !deliveryMethod || 
        (deliveryMethod === 'Entrega' && (!details.name || !details.address || !details.phone)) || 
        (deliveryMethod === 'Retirada' && !details.name)) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    
    updateCart([]);
    setIsPaymentVisible(false); 
    alert('Pagamento confirmado! Carrinho limpo.');
  };

  
  const closeModal = () => {
    setIsPaymentVisible(false);
  };

  if (!Array.isArray(cart)) {
    return <p>Erro: Carrinho inválido!</p>; // Caso `cart` não seja um array válido
  }

  if (cart.length === 0) {
    return <p>Seu carrinho está vazio.</p>; // Exibe mensagem caso o carrinho esteja vazio
  }

  return (
    <div className="cart-container">
      {!isPaymentVisible ? (
        <>
          <button id="cartButton" onClick={toggleCart}>
            Carrinho (<span id="cartCount">{cart.length}</span>)
          </button>

          <div className={`cart ${isCartVisible ? 'show' : ''}`}>
            <div className="cart-items">
              <h3>Itens no Carrinho:</h3>
              <ul>
                {cart.map((item) => (
                  <li key={item.name}>
                    {item.name} - R$ {(item.price * item.quantity).toFixed(2)} (x{item.quantity})
                    <div className="cart-header">
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
              <button onClick={() => setIsPaymentVisible(true)}>Finalizar Compra</button>
            </div>
          </div>
        </>
      ) : (
        <PaymentForm confirmPayment={confirmPayment} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Cart;
