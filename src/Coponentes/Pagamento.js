function Pagamento(){
    return(
<div id="paymentModal" className="modal">
      <div className="modal-content">
        <h3>Escolha a forma de pagamento</h3>
        <label>
          <input type="radio" name="paymentMethod" value="Cartão" /> Cartão
        </label><br />
        <label>
          <input type="radio" name="paymentMethod" value="Dinheiro" /> Dinheiro
        </label><br />
        <label>
          <input type="radio" name="paymentMethod" value="Pix" /> Pix
        </label><br />

        <h3>Escolha como deseja receber:</h3>
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="Entrega"
            onChange={handleDeliveryChange}
          /> Entrega
        </label><br />
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="Retirada"
            onChange={handleDeliveryChange}
          /> Retirada
        </label><br />

        {deliveryMethod === 'Retirada' && (
          <div id="pickupDetails" style={{ marginTop: '10px' }}>
            <h4>Informe seu nome para retirada:</h4>
            <input type="text" id="pickupName" placeholder="Seu nome" />
          </div>
        )}

        {deliveryMethod === 'Entrega' && (
          <div id="deliveryDetails" style={{ marginTop: '10px' }}>
            <h4>Informe os dados para entrega:</h4>
            <input type="text" id="deliveryName" placeholder="Nome completo" /><br /><br />
            <input type="text" id="deliveryAddress" placeholder="Endereço completo" /><br /><br />
            <input type="tel" id="deliveryPhone" placeholder="Telefone (ex: (XX) XXXXX-XXXX)" />
          </div>
        )}

        <button onClick={() => alert('Pagamento confirmado!')}>Confirmar Pagamento</button>
        <button onClick={() => alert('Modal fechado!')}>Cancelar</button>
      </div>
    </div>
  );
}
export default Pagamento