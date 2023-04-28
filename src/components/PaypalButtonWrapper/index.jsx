import { useEffect } from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'

// Custom component to wrap the PayPalButtons and handle currency changes
export function PaypalButtonWrapper ({ currency, showSpinner, amount, handlePaymentSuccess }) {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer()

  const paypalOptions = {
    clientId: 'access_token$sandbox$pgbg43q2zxrj79zv$3ccde46cfc5b0863551d4815e67f76ae',
    intent: 'capture',
    currency: 'USD'
  }
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }
  const style = {
    layout: 'horizontal'
  }

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency
      }
    })
  }, [currency, showSpinner])
  return (
    <>
      {(showSpinner && isPending) && <div className='spinner' />}
      <PayPalButtons
        paypalOptions={paypalOptions}
        buttonStyles={buttonStyles}
        amount={amount}
        onClick={() => console.log('Start Payment')}
        onApprove={data => handlePaymentSuccess(data)}
        onError={error => console.log(error)}
        onCancel={data => console.log(data)}
        style={style}
      />
    </>
  )
}
