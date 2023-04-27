import { Link } from 'react-router-dom'
import './Header.css'

function Header () {
  return (
    <div className='Header'>
      <h1 className='Header-title'>PlatziConf Merch</h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>Checkout</Link>
      </div>
    </div>
  )
}

export default Header
