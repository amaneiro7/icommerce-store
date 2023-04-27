import React, { createContext } from 'react'
import useInitialState from '../Hook/useInitialState'

export const AppContext = createContext()

export default function AppProvider ({children}) {
    const initialState = useInitialState()

    return (
        <AppContext.Provider 
            value={initialState}>
                {children}
        </AppContext.Provider>
    )
}

