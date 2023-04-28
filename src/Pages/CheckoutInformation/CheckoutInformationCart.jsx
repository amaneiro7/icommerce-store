import React from 'react'

function CheckoutInformationCart ({ item }) {
  return (
    <div className='Information-item'>
      <div className='Information-element'>
        <h4>{item.title}</h4>
        <span>${item.price}</span>
      </div>
    </div>
  )
}

export default CheckoutInformationCart
