import { useState } from 'react';
import initialState from '@/initialState'

import React from 'react'

export default function useInitialState() {
    const [state, setState] = useState(initialState)

    return {
        addToCart(payload) {
            setState({
                ...state,
                cart: [...state.cart, payload]
            })
        },
        removeFromCart(payload) {
            setState({
                ...state,
                cart: [state.cart.filter(items => items.id !== payload.id)]
            })
        },
    }
}

