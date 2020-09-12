import React from 'react'
import { Link } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';

export function ToyPreview({ toy, onAddToCart, onRemove }) {
    // const image = toy.hasImg ? require(`../assets/imgs/${toy._id}.jpg`) : require(`../assets/imgs/default.jpg`)
    return (
        <div className="card-toy card flex column">
            <ul className="toy-info">
                <div className="body-card tac">
                    <li>{`Price: ${toy.price}`}</li>
                    <li>{`Category: ${toy.category}`}</li>
                    <li>{`Available: ${(toy.inStock) ? 'YES!' : 'NOT AVAILABLE'}`}</li>
                </div>
                <div>
                    <IconButton aria-label="add to shopping cart" onClick={() => onAddToCart(toy)}>
                        <AddShoppingCartIcon className="clr1"/>
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => onRemove(toy._id)}><DeleteIcon className="clr1"/></IconButton>
                    <Link to={`/toy/edit/${toy._id}`}><IconButton aria-label="edit"><EditIcon className="clr1"/></IconButton></Link>
                    <Link to={`/toy/${toy._id}`}><IconButton aria-label="details"><InfoIcon className="clr1"/></IconButton></Link>
                </div>
            </ul>
        </div>
    )
}
