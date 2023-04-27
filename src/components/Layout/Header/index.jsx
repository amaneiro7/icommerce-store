import { Link } from 'react-router-dom'
import './Header.css'
import { FaShoppingCart } from 'react-icons/fa'

function Header () {
  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to='/'>
          PlatziConf Merch
        </Link>  
      </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
        <FaShoppingCart/>
        </Link>
      </div>
    </div>
  )
}

export default Header
