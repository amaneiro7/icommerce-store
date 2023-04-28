import { Link } from 'react-router-dom'
import './Header.css'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import { AppContext } from '@/context'

function Header () {
  const { cart } = useContext(AppContext)
  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to='/'>
          PlatziConf Merch
        </Link>
      </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <FaShoppingCart />
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  )
}

export default Header
