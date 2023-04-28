import { useContext } from 'react'
import Product from '@/components/Product'
import { AppContext } from '@/context'
import './Products.css'

function Products () {
  const { products, addToCart } = useContext(AppContext)
  const handleAddToCart = product => () => {
    addToCart(product)
  }
  return (
    <div className='Products'>
      <div className='Products-items'>
        {products.map(product =>
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        )}
      </div>
    </div>
  )
}

export default Products
