import React from 'react'

export function MyBtn({ children, ...restOfProps }) {
    return (
        <button { ...restOfProps }>{ children }</button>
    )
}
