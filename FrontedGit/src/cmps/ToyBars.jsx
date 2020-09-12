
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadToys } from '../store/actions/toyActions'
import { MyChart } from './MyChart'
import { MyBarChart } from './MyBarChart'

class _ToyBars extends Component {

    componentDidMount(){
        this.props.loadToys(this.props.filterBy)
    }

    render() {
        const { toys} = this.props
        console.log(toys);
        return (
            <div>
                <MyChart toys={toys} />
                <MyBarChart />
            </div>
        )
    }
}

const mapDispatchToProps = {
    loadToys,
}

    const mapStateToProps = state => {
        return {
            toys: state.toyReducer.toys,
        }
    }

    export const ToyBars = connect(mapStateToProps,mapDispatchToProps)(_ToyBars)