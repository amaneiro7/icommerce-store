import React, { createContext } from 'react'
import { useInitialState } from '@/Hook/useInitialState'

export const AppContext = createContext()

export function AppProvider ({ children }) {
  const { state: { cart, products }, addToCart, addToBuyer, addNewOrder, removeFromCart } = useInitialState()

  return (
    <AppContext.Provider
      value={{
        cart,
        products,
        addToCart,
        addToBuyer,
        addNewOrder,
        removeFromCart
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
