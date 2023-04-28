import './Checkout.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '@/context'
import CheckoutList from './CheckoutList'

function Checkout () {
  const { cart, removeFromCart } = useContext(AppContext)

  const handleRemove = product => () => {
    removeFromCart(product)
  }

  const handleSumTotal = () => {
    let total = 0
    cart.forEach(item => {
      total += item.price || 0
    })
    return total
  }

  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        <h3>{cart.length ? 'Lista de Pedidos' : 'Sin Pedidos...'}</h3>
        {cart.map(item =>
          <CheckoutList
            key={item.id}
            item={item}
            handleRemove={handleRemove}
          />)}
      </div>
      <div className='Checkout-sidebar'>
        <h3>{cart.length ? `Precio Total: ${handleSumTotal()}` : null}</h3>
        {cart.length
          ? <Link to='/checkout/information'> <button type='button'>Continuar pedido</button></Link>
          : null}
      </div>
    </div>
  )
}

export default Checkout
