import Products from '@/components/Products'
import initialState from '@/initialState'

function Home () {
  return (
    <Products products={initialState.products} />
  )
}

export default Home
