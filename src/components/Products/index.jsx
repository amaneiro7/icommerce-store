import Product from '@/components/Product'
import './Products.css'

function Produtcs ({ products }) {
  return (
    <div className='Products'>
      <div className='Products-items'>
        {products.map(product =>
          <Product key={product.id} product={product} />
        )}
      </div>
    </div>
  )
}

export default Produtcs
