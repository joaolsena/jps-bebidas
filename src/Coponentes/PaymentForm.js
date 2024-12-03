import React, { useState } from 'react';

function PaymentForm({ confirmPayment, closeModal }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [details, setDetails] = useState({ name: '', address: '', phone: '' });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
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
            onClick={() => confirmPayment(paymentMethod, deliveryMethod, details)}
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
