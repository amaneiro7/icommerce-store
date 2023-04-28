import React, { createContext } from 'react'
import { useInitialState } from '@/Hook/useInitialState'

export const AppContext = createContext()

export function AppProvider ({ children }) {
  const { state: { cart, products }, addToCart, removeFromCart } = useInitialState()

  return (
    <AppContext.Provider
      value={{
        cart,
        products,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
