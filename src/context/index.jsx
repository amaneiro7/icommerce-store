import React, { createContext } from 'react'
import { useInitialState } from '@/Hook/useInitialState'

export const AppContext = createContext()

export function AppProvider ({ children }) {
  const { state: { cart, products }, addToCart, addToBuyer, removeFromCart } = useInitialState()

  return (
    <AppContext.Provider
      value={{
        cart,
        products,
        addToCart,
        addToBuyer,
        removeFromCart
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
