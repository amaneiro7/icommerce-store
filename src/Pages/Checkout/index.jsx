import { FaTrashAlt } from 'react-icons/fa'
import './Checkout.css'
import { Link } from 'react-router-dom'

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
        <button type='button'><FaTrashAlt/></button>
        </div>
      </div>
      <div className='Checkout-sidebar'>
        <h3>Precio Total: $10</h3>
        <Link to='/checkout/information'>
          <button type='button'>Continuar pedido</button>
        </Link>
      </div>
    </div>
  )
}


export default Checkout
