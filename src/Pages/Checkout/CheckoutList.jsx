import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function CheckoutList ({ item, handleRemove }) {
  return (
    <div className='Checkout-item'>
      <div className='Checkout-element'>
        <h4>{item.title}</h4>
        <span>${item.price}</span>
      </div>
      <button
        type='button'
        onClick={handleRemove(item)}
      >
        <FaTrashAlt />
      </button>
    </div>
  )
}

export default CheckoutList
