
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../store/actions/userActions'
import { loadToys } from '../../store/actions/toyActions'
import { toyService } from '../../services/toyService'
import { MyBtn } from '../../cmps/MyBtn'

class _ToyDetails extends Component {

    state = {
        _id: '',
        toy: []
    }

    componentDidMount = () => {
        const { toyId } = this.props.match.params;
        toyService.getById(toyId)
            .then(toy => {
                this.setState({ _id: toyId, toy })
            })
    }

    onAddToCart = (toy) => {
        this.props.addToCart(toy)
    }

    render() {
        const { _id, toy } = this.state;
        if (!_id) return <h1>Loading...</h1>
        return (<div className="main-header">
            <h1>ToyDetails :) </h1>
            <h2>Name: {toy.name}</h2>
            <h2>Price: ${toy.price}</h2>
            <h3>Availability:{(toy.inStock) ?<span className="clr2"> 'YES!'</span> : <span className="clr1"> NOT AVAILABLE!</span>}</h3>
            <h3>Creation-Time:{toy.createdAt}</h3>
            <h3>Description:</h3>
            <pre className="ch50">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis mollitia et pariatur nulla excepturi eveniet dolore
                obcaecati sint perspiciatis, iure quae eaque velit culpa,
                soluta reiciendis? Nostrum, iure. Hic, modi.
            </pre>
            <MyBtn onClick={() => this.onAddToCart(toy)} style={{ backgroundColor: 'yellow' }} >ADD TO CART</MyBtn>
            <MyBtn onClick={() => this.props.history.push('/toy')} style={{ backgroundColor: 'yellow' }}>BACK TO STORE</MyBtn>
            <Link to={`/toy/review/${_id}`}>Reviews</Link>
        </div>
         ) }
}


const mapStateToProps = state => {
    return {
        toys: state.toyReducer.toys
    }
}
const mapDispatchToProps = {
    loadToys,
    addToCart
}
export const ToyDetails = connect(mapStateToProps, mapDispatchToProps)(_ToyDetails)
