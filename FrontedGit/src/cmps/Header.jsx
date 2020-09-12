
import { NavLink, withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { checkout, clearCart } from '../store/actions/userActions.js'
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';



function _Header(props) {
    //     const { user, cartItems } = props;
    //     const totalPrice = cartItems.reduce((acc, item) => acc += item.price, 0)

    //     const onCheckout = () => {
    //         props.checkout()
    //             .catch(err => alert(err))
    //             .then(() => {
    //                 props.history.push('/')
    //             })
    //     }

    //{user.balance}
    //{ user.name }
    //{ cartItems.length }
    //{ totalPrice.toFixed(2) }
    //onClick={ onCheckout }
    //onClick={ props.clearCart }
    const image = require('../assets/imgs/main.png')
    return <header className="main-header">
        <div className="nav">
            <h3>User: </h3>
            <h3>Balance: $5000 </h3>
            <h3>Items in your Cart: 100 </h3>
            <h3>Total price: </h3>
            <nav className="nav-btn">
                <NavLink to="/"><IconButton aria-label="home"><HomeIcon /></IconButton></NavLink> 
                <NavLink to="/toy"><IconButton aria-label="toy-stor"><VideogameAssetIcon /></IconButton></NavLink> 
            </nav>
        </div>
        <img className="logo" src={image} alt="" />
        <h1>My Shop</h1>
    </header>
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.loggedinUser,
        cartItems: state.userReducer.cartItems,
    }
}
const mapDispatchToProps = {
    // checkout,
    // clearCart
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(withRouter(_Header))