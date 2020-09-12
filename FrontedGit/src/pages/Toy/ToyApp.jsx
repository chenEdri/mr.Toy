import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { MyBtn } from '../../cmps/MyBtn'
import { loadToys, changeToysFilter, removeToy, updateFilter } from '../../store/actions/toyActions'
import { ToyList } from '../../cmps/ToyList'
import { toyService } from '../../services/toyService'
import { addToCart } from '../../store/actions/userActions'
import { ToyFilter } from '../../cmps/ToyFilter'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

class _ToyApp extends Component {

    componentDidMount() {
        this.props.loadToys(this.props.filterBy)
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.filterBy) return;
        if (prevProps.filterBy.name !== this.props.filterBy.name ||
            prevProps.filterBy.maxPrice !== this.props.filterBy.maxPrice ||
            prevProps.filterBy.minPrice !== this.props.filterBy.minPrice ||
            prevProps.filterBy.inStock !== this.props.filterBy.inStock ||
            prevProps.filterBy.category !== this.props.filterBy.category) {
            this.props.loadToys(this.props.filterBy)
        }
    }

    onAddToCart = (toy) => {
        this.props.addToCart(toy)
    }

    onSetFilter = (filterBy) => {
        this.props.updateFilter(filterBy);
    }

    onRemove = (_id) => {
        this.props.removeToy(_id)
    }
    render() {
        const { toys} = this.props
        if (!toys) return <div>Loading....</div>
        return (
            <div className="toy-app app main-container app-container">
                <div>
                <h4 className= "clr1">sort Format</h4>
                    <ToyFilter onSetFilter={this.onSetFilter} />
                    <Link to={`/toy/bar/`}><IconButton aria-label="edit"><EqualizerIcon/></IconButton></Link>
                    <Link to={`/toy/edit`}><IconButton aria-label="edit"><AddIcon/></IconButton></Link>
                </div>
                <ToyList toys={toys} onAddToCart={this.onAddToCart} onRemove={this.onRemove} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        toys: state.toyReducer.toys,
        filterBy: state.filterReducer.filterBy
    }
}
const mapDispatchToProps = {
    loadToys,
    addToCart,
    changeToysFilter,
    removeToy,
    updateFilter
}
export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)

