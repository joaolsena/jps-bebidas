function Carrinho(){
    return(
        <div class="cart-container">
      <button id="cartButton" onclick="toggleCart()">Carrinho (<span id="cartCount">0</span>)</button>
      <div id="cart" class="cart">
        <h3>Carrinho de Compras</h3>
        <ul id="cartItems"></ul>
        <p>Total: R$ <span id="totalPrice">0,00</span></p>
        <button onclick="checkout()">Finalizar Compra</button>
      </div>
    </div>
    )
}
export default Carrinho