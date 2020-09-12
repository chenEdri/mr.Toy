import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class _Home extends Component {
    render() {
        return (
            <div className="home">
                    <h1> Home </h1>
                    <Link to="/login">Login</Link> 
            </div>
        )
    }
}

export const Home = connect()(_Home)