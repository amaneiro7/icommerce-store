import { useContext } from 'react'
import { AppContext } from "@/context";
import './Success.css'
import LocationMap from '../../components/Map';


function CheckoutSuccess () {
  const {buyer} = useContext(AppContext)
  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>{`${buyer?.name || 'Usuario'}, Gracias por tu compra`}</h2>
          <span>Tu pedido llegara en 3 dias a tu direccion:</span>
          <div className='Succes-map'>
            <LocationMap/>
          </div>
        
      </div>
    </div>
  )
}

export default CheckoutSuccess
