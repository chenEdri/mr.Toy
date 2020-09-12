import React from 'react'
import { ToyPreview } from './ToyPreview'
import { Card } from './Card'

export function ToyList({ toys,  onRemove }) {
    return (
        <div className= "card-grid">
            {
                toys.map(toy=>
                <Card key={ toy._id } header={ toy.name } body={ <ToyPreview toy={ toy } 
                onRemove={onRemove}/> } footer='The footer' />)
            }
        </div>
    )
}
//onAddToCart,
//onAddToCart={onAddToCart}