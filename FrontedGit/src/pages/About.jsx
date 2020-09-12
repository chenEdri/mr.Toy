import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { MyBtn } from '../cmps/MyBtn'



class _About extends Component {
    render(){return <div>about</div>}
}

const mapStateToProps = state => {
    return {
        toys: state.toyReducer.toys
    }
}
const mapDispatchToProps = {


}
export const About = connect(mapStateToProps, mapDispatchToProps)(_About)