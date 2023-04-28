import React from 'react'

export default function CheckoutPayemntList ({ item }) {
  return (
    <div className='Payment-item'>
      <div className='Payment-element'>
        <h4>{item.title}</h4>
        <span>$ {item.price}</span>
      </div>
    </div>
  )
}
