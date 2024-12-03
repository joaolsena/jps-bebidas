import React, { useState } from 'react';

function PaymentForm({ confirmPayment, closeModal, cartItems }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [details, setDetails] = useState({ name: '', address: '', phone: '' });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  // Função para calcular o total do pedido com base no carrinho
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Função para gerar a mensagem do WhatsApp com os dados do pedido
  const sendMessageToWhatsApp = () => {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!paymentMethod || !deliveryMethod || 
        (deliveryMethod === 'Entrega' && (!details.name || !details.address || !details.phone)) || 
        (deliveryMethod === 'Retirada' && !details.name)) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const total = calculateTotal();
    const itemsDetails = cartItems.map(item => 
      `*${item.name}* - Quantidade: ${item.quantity} - Preço: R$ ${item.price.toFixed(2)}`
    ).join('\n');

    const message = `
      *Detalhes do Pedido:*\n
      *Forma de Pagamento:* ${paymentMethod}\n
      *Forma de Entrega:* ${deliveryMethod}\n
      ${deliveryMethod === 'Entrega' ? `
        *Nome:* ${details.name}\n
        *Endereço:* ${details.address}\n
        *Telefone:* ${details.phone}` : ''}
      ${deliveryMethod === 'Retirada' ? `
        *Nome para Retirada:* ${details.name}` : ''}
    
      *Itens:*\n
      ${itemsDetails}
      
      *Valor Total:* R$ ${total}
    `;
    
    const phoneNumber = '5596991538887'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div id="paymentModal" className='modal' style={{ display: 'flex' }}>
      <div className="modal-content">
        <h3>Pagamento</h3>
        <form>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="dinheiro"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{' '}
            Dinheiro
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Cartão"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{' '}
            Cartão
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Pix"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{' '}
            Pix
          </label>
          <br />
          <h3>Escolha como deseja receber:</h3>
          <label>
            <input
              type="radio"
              name="deliveryMethod"
              value="Entrega"
              onChange={(e) => setDeliveryMethod(e.target.value)}
            />{' '}
            Entrega
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="deliveryMethod"
              value="Retirada"
              onChange={(e) => setDeliveryMethod(e.target.value)}
            />{' '}
            Retirada
          </label>
          <br />
          {deliveryMethod === 'Entrega' && (
            <div id="deliveryDetails">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Endereço"
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Telefone"
                onChange={handleChange}
              />
            </div>
          )}
          {deliveryMethod === 'Retirada' && (
            <div id="pickupDetails">
              <input
                type="text"
                name="name"
                placeholder="Nome para retirada"
                onChange={handleChange}
              />
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              confirmPayment(paymentMethod, deliveryMethod, details);
              sendMessageToWhatsApp(); // Envia a mensagem para o WhatsApp
            }}
          >
            Confirmar
          </button>
          <button type="button" onClick={closeModal}>
            Fechar
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
