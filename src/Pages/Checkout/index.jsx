import './Checkout.css'

function Checkout () {
  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        <h3>Lista de Pedidos</h3>
        <div className='Checkout-item'>
          <div className='CHeckout-element'>
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
        </div>
        <button type='button'>Eliminar</button>
      </div>
      <div className='Checkout-sidebar'>
        <h3>Precio Total: $10</h3>
        <button type='button'>Continuar pedido</button>
      </div>
    </div>
  )
}

export default Checkout
