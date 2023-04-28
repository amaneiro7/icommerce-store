import { lazy, useContext } from 'react'
import { AppContext } from '@/context'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { PaypalButtonWrapper } from '../../components/PaypalButtonWrapper'
import { useNavigate } from 'react-router-dom'
import { useGetTotal } from '@/Hook/useGetTotal'
import './Payment.css'

const CheckoutPaymentList = lazy(() => import('./ChekcoutPayemntList.jsx'))

function CheckoutPayment () {
  const navigate = useNavigate()
  const { cart, buyer, addNewOrder } = useContext(AppContext)

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      navigate('/checkout/success')
    }
  }

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resumen del pedido:</h3>
        {cart.map(item =>
          <CheckoutPaymentList
            key={item.id}
            item={item}
          />)}
        <div className='Payment-button'>
          <PayPalScriptProvider
            options={{ 'client-id': 'test' }}
          >
            <PaypalButtonWrapper
              amount={useGetTotal(cart)}
              handlePaymentSuccess={handlePaymentSuccess}
              showSpinner={false}
              currency='USD'
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPayment
