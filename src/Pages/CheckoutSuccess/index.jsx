import './Success.css'

function CheckoutSuccess () {
  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>Oscar, Gracias por tu compra
          <span>Tu pedido llegara en 3 dias a tu direccion:</span>
          <div className='Succes-map'>
            Google Maps
          </div>
        </h2>
      </div>
    </div>
  )
}

export default CheckoutSuccess
